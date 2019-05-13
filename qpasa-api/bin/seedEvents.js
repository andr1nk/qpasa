require('dotenv').config()
const moment = require('moment')
const { request } = require('graphql-request')

const { scrapeBerlinDay1, scrapeBerlinDay2, scrapeBerlinDay3, scrapeBerlinDay4, scrapeBerlinDay5, scrapeBerlinDay6, scrapeBerlinDay7 } = require("../scraper/scraperBerlin")


// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Event = require("../models/Event")
const Location = require("../models/Location")

const bcryptSalt = 10;

const mongoDBURL = process.env.NODE_ENV === "development" ? process.env.MONGO_DEV_URL : process.env.MONGO_PROD_URL

console.log(mongoDBURL)

mongoose
  .connect(mongoDBURL, { useNewUrlParser: true })
  // .connect("mongodb://localhost/qpasa-api", { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const day0 = moment(new Date()).subtract(1, 'day').format('DD.MM.YYYY') // Yesterday
const day1 = moment(new Date()).format('DD.MM.YYYY')                    // Today
const day2 = moment(new Date()).add(1, 'day').format('DD.MM.YYYY')      // Tomorrow
const day3 = moment(new Date()).add(2, 'day').format('DD.MM.YYYY')      // ...
const day4 = moment(new Date()).add(3, 'day').format('DD.MM.YYYY')      // ...
const day5 = moment(new Date()).add(4, 'day').format('DD.MM.YYYY')      // ...
const day6 = moment(new Date()).add(5, 'day').format('DD.MM.YYYY')      // ...
const day7 = moment(new Date()).add(6, 'day').format('DD.MM.YYYY')      // ...


function initialEventsCreation() {

  console.log(`CronJob executed`)

  // EMPTY EVENT DATABASE
  // Event.deleteMany({})
  //     .then(() => {
  //         console.log('All events deleted')
  //     })
  //     .catch(err => console.error(err))

  // Delete events
  // Event.deleteMany({ })
  //   .then(() => {
  //     //console.log("deleted events from yesterday")
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })


  // Create Events from scraperBerlin

  createEventsScraperBerlin = (scrapeBerlinDay, day) => {
    scrapeBerlinDay
      .then(events => {
        console.log(`Berlin events creation for ${day}`)
        const eventsOfDayArray = events.filter(el => {
          if (el.date === day) return el
        })

        eventsOfDayArray.forEach(event => {

          const { city, eventName, locationName, description, date, url } = event
          console.log("Event is: ", event)
          //check if event is in database
          Event.find({ $and: [{ name: eventName }, { date: date }] })
            .then(duplicateEvent => {
              if (duplicateEvent.length > 0) {
                console.log(`Event ${eventName} for date ${date} already in database`)
              } else {
                // Upon event creation, find the location of event in our Location databse
                Location.find({ name: locationName })
                  .then(oneLocation => {
                    console.log(oneLocation)
                    if (oneLocation.length !== 1) {
                      console.log(`Event not created, location probably unknown: ${locationName}`)
                    } else {
                      // create event            
                      let locationId = oneLocation[0]._id
                      Event.create({ date, url, name: eventName, description, location: locationId })
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
        console.log(`Züri events creation for ${day}`)
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
                console.log(`Event ${title} for date ${date} already in database`)
              } else {
                // Upon event creation, find the location of event in our Location databse
                Location.find({ name: locationName })
                  .then(oneLocation => {
                    if (oneLocation.length !== 1) {
                      console.log(`Event not created, probably unknown location: ${locationName}`)
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
}

Event.deleteMany()
  .then(() => {
    console.log("Events deleted")
  })
  .then(() => {
    return initialEventsCreation()
    console.log(`${eventsCreated.length} events created with the following id:`);
    console.log(eventsCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

  // initialEventsCreation();