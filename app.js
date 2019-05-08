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

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')

const mongoDBURL= process.env.NODE_ENV === "development" ?  process.env.MONGO_DEV_URL :  process.env.MONGO_PROD_URL.toString()

mongoose
  .connect(mongoDBURL, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

new CronJob(
    //12 : '00 00 12 * * *'
    // One minute: 0 */1 * * * *
    '0 0 */18 * * *',
    function() {
        console.log(`Hello`)
        const dateOfYesterday = moment(new Date())
            .subtract(1, 'day')
            .format('DD.MM.YYYY')

        Event.deleteMany({ date: dateOfYesterday })
            .then()
            .catch(err => {
                console.error(err)
            })

        // Event.deleteMany({})
        //     .then(() => {
        //         console.log('All events deleted')
        //     })
        //     .catch(err => console.error(err))

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
                //If events for today and tomorrow want to be created
                const dateOfToday = moment(new Date()).format('DD.MM.YYYY')
                const dateOfTomorrow = moment(new Date())
                    .add(1, 'day')
                    .format('DD.MM.YYYY')
                const eventsOfTodayArr = data.allFutureEvents.filter(el => {
                    if (el.date === dateOfToday) return el
                })

                eventsOfTodayArr.forEach(el => {
                    const date = el.date
                    const event = el.details.title
                    const location = el.locationName
                    const description = el.details.description
                    Location.find({ name: location })
                        .then(oneLocation => {
                            if (oneLocation[0]) {
                                let locationId = oneLocation[0]._id

                                // Event.create({ date, event, description, location: locationId })
                                //     .then(() => {
                                //         console.log('Event created for today: ', event)
                                //     })
                                //     .catch(err => {
                                //         console.error(err)
                                //     })
                            }
                        })
                        .catch(err => {
                            console.error(err)
                        })
                })

                const eventsOfTomorrowArr = data.allFutureEvents.filter(el => {
                    if (el.date === dateOfTomorrow) return el
                })

                eventsOfTomorrowArr.forEach(el => {
                    const date = el.date
                    const event = el.details.title
                    const location = el.locationName
                    const description = el.details.description
                    Location.find({ name: location })
                        .then(oneLocation => {
                            if (oneLocation[0]) {
                                let locationId = oneLocation[0]._id

                                // Event.create({ date, event, description, location: locationId })
                                //     .then(() => {
                                //         console.log('Event created for tomorrow: ', event)
                                //     })
                                //     .catch(err => {
                                //         console.error(err)
                                //     })
                            }
                        })
                        .catch(err => {
                            console.error(err)
                        })
                })

                //Creation of after tomorrow events
                const dateAfterThreeDays = moment(new Date())
                    .add(2, 'day')
                    .format('DD.MM.YYYY')

                const eventsAfterThreeDaysArr = data.allFutureEvents.filter(el => {
                    if (el.date === dateAfterThreeDays) return el
                })

                eventsAfterThreeDaysArr.forEach(el => {
                    const date = el.date
                    const event = el.details.title
                    const location = el.locationName
                    const description = el.details.description
                    console.log(date)
                    Location.find({ name: location })
                        .then(oneLocation => {
                            if (oneLocation[0]) {
                                let locationId = oneLocation[0]._id

                                Event.create({ date, event, description, location: locationId })
                                    .then(() => {
                                        console.log('Event created for after tomorrow: ', event)
                                    })
                                    .catch(err => {
                                        console.error(err)
                                    })
                            }
                        })
                        .catch(err => {
                            console.error(err)
                        })
                })
            })

            .catch(err => {
                console.error(err)
            })
    },
    null,
    true,
    'America/Los_Angeles'
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
    origin: "http://localhost:3000"
  })
);

//Routes

const index = require("./routes/index");
app.use("/", index);

const events = require("./routes/events");
app.use("/api", events);

const auth = require('./routes/auth')
app.use('/api', auth)

const whoisgoingRoutes = require('./routes/whoisgoing')
app.use('/api', whoisgoingRoutes)

module.exports = app
