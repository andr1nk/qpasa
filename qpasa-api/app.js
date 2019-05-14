require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const CronJob = require('cron').CronJob
const Event = require('./models/Event')
const Location = require('./models/Location')
const { request } = require('graphql-request')
const moment = require('moment')
const cors = require("cors")

const { scrapeBerlinDay1, scrapeBerlinDay2, scrapeBerlinDay3, scrapeBerlinDay4, scrapeBerlinDay5, scrapeBerlinDay6, scrapeBerlinDay7 } = require("./scraper/scraperBerlin")

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')

const mongoDBURL = process.env.NODE_ENV === "development" ? process.env.MONGO_DEV_URL : process.env.MONGO_PROD_URL

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

const day0 = moment(new Date()).subtract(1, 'day').format('DD.MM.YYYY') // Yesterday
const day1 = moment(new Date()).format('DD.MM.YYYY')                    // Today
const day2 = moment(new Date()).add(1, 'day').format('DD.MM.YYYY')      // Tomorrow
const day3 = moment(new Date()).add(2, 'day').format('DD.MM.YYYY')      // ...
const day4 = moment(new Date()).add(3, 'day').format('DD.MM.YYYY')      // ...
const day5 = moment(new Date()).add(4, 'day').format('DD.MM.YYYY')      // ...
const day6 = moment(new Date()).add(5, 'day').format('DD.MM.YYYY')      // ...
const day7 = moment(new Date()).add(6, 'day').format('DD.MM.YYYY')      // ...

new CronJob(
  // Every 10 seconds: 
  // '*/30 * * * * *',
  // Daily at 6 p.m.
  //'18 * * *',
  // Daily at 12am, 5pm and 11PM
  // '12,23 * * *',
  // Every 5min (00:05, 00:10, ...)
   '*/5 * * * *',
  function () {

    console.log(`CronJob executed`)

    // EMPTY EVENT DATABASE
    // Event.deleteMany({})
    //     .then(() => {
    //         console.log('All events deleted')
    //     })
    //     .catch(err => console.error(err))

    // Delete events of yesterday from the database
    Event.deleteMany({ date: day0 })
      .then(() => {
        // console.log("deleted events from yesterday")
      })
      .catch(err => {
        console.error(err)
      })


    // Create Events from scraperBerlin

    createEventsScraperBerlin = (scrapeBerlinDay, day) => {
      scrapeBerlinDay
        .then(events => {
            // console.log(`Berlin events creation for ${day}`)
            const eventsOfDayArray = events.filter(el => {
              if (el.date === day) return el
            })

            eventsOfDayArray.forEach(event => {

              const { city, eventName, locationName, description, date, url } = event
              // console.log("event scrape", event.eventName )
              //check if event is in database
              Event.find({ $and: [{ name: eventName }, { date: date }] })
                .then(duplicateEvent => {
                  if (duplicateEvent.length > 0) {
                    // console.log(`${city} | ${eventName} | ${date} already in database`)
                  } else {
                    // Upon event creation, find the location of event in our Location databse
                    Location.find({ name: locationName })
                      .then(oneLocation => {
                        // console.log(oneLocation)
                        if (oneLocation.length !== 1) {
                          // console.log(`Berlin | Event not created, location probably unknown: ${locationName}`)
                        } else {
                          // create event            
                          let locationId = oneLocation[0]._id
                          Event.create({ date, url, name: eventName, description, location: locationId })
                            .then(() => {
                              // console.log(`Berlin Event created for ${day}: `, event)
                            })
                            .catch(err => {
                              console.error(err)
                            })
                        }
                      })
                      .catch(err => {
                        console.error(err)
                      })
                  }
                })
            })
        })
        .catch(err => {
          console.error(err)
        })
    }

    createEventsScraperBerlin(scrapeBerlinDay1, day1)
    createEventsScraperBerlin(scrapeBerlinDay2, day2)
    createEventsScraperBerlin(scrapeBerlinDay3, day3)
    createEventsScraperBerlin(scrapeBerlinDay4, day4)
    createEventsScraperBerlin(scrapeBerlinDay5, day5)
    createEventsScraperBerlin(scrapeBerlinDay6, day6)
    createEventsScraperBerlin(scrapeBerlinDay7, day7)

    // Create Events from HEUTE.SG API

    // Define query for api.heute.sg API
    const query = `{
            allFutureEvents(city: "Zürich") {
              date
              locationName
              details {
                title
                description
                url
                }
               }
            }`

    request('https://api.heute.sg/graphql', query)
      .then(data => {

        // Function to create events in our database
        createEvents = (day) => {
          // console.log(`Züri events creation for ${day}`)
          const eventsOfDayArray = data.allFutureEvents.filter(el => {
            if (el.date === day) return el
          })

          eventsOfDayArray.forEach(event => {

            const { date, locationName } = event
            const { title, description, url } = event.details

            //check if event is in database
            Event.find({ $and: [{ name: title }, { date: date }] })
              .then(duplicateEvent => {
                if (duplicateEvent.length > 0) {
                  // console.log(`Zürich | ${title} | ${date} already in database`)
                } else {
                  // Upon event creation, find the location of event in our Location databse
                  Location.find({ name: locationName })
                    .then(oneLocation => {
                      if (oneLocation.length !== 1) {
                        // console.log("Züri | Event not created, probably unknown location", oneLocation)
                      } else {
                        // create event            
                        let locationId = oneLocation[0]._id
                        Event.create({ date, url, name: title, description, location: locationId })
                          .then(() => {
                            console.log('Event created for today: ', event)
                          })
                          .catch(err => {
                            console.error(err)
                          })
                      }
                    })
                    .catch(err => {
                      console.error(err)
                    })
                }
              })
          })
        }

        createEvents(day1)
        createEvents(day2)
        createEvents(day3)
        createEvents(day4)
        createEvents(day5)
        createEvents(day6)
        createEvents(day7)

      })

      .catch(err => {
        console.error(err)
      })
  },
  null,
  true,
  'Europe/Berlin'
)



// request('https://api.heute.sg/graphql', query)
//     .then(data => {
//         console.log(data.allFutureEvents)
//     })
//     .catch(err => {
//         console.error(err)
//     })

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))

hbs.registerHelper('ifUndefined', (value, options) => {
  if (arguments.length < 2) throw new Error('Handlebars Helper ifUndefined needs 1 parameter')
  if (typeof value !== undefined) {
    return options.inverse(this)
  } else {
    return options.fn(this)
  }
})

// default value for title local
// app.locals.title = 'Express - Generated with IronGenerator';

// Enable authentication using session + passport
app.use(
  session({
    secret: 'irongenerator',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)
app.use(flash())
require('./passport')(app)

// Add CORS settings

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

//Routes

const index = require("./routes/index");
app.use("/", index);

const events = require("./routes/events");
app.use("/api", events);

const locations = require("./routes/locations");
app.use("/api", locations);

const auth = require('./routes/auth')
app.use('/api', auth)

const whoisgoingRoutes = require('./routes/whoisgoing')

app.use('/api', whoisgoingRoutes)

app.use((req, res, next) => {
  res.sendFile(__dirname+"/public/index.html")
})

module.exports = app
