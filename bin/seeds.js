// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Event = require("../models/Event")
const Location = require("../models/Location")

const bcryptSalt = 10;

const mongoDBURL= process.env.NODE_ENV === "development" ?  process.env.MONGO_DEV_URL :  process.env.MONGODB_URI


mongoose
  .connect(mongoDBURL, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// let users = [
//   {
//     username: "alice",
//     password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
//   },
//   {
//     username: "bob",
//     password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
//   }

let events = [
  {
    date: "07.05.2019",
    location: "5cd2b4b16cf18c000c6901a0",
    name: "Awesome Techno Party",
    description: "test description",
    url: "http://1nicesevent.com"
  },
  {
    date: "07.05.2019",
    location: "5cd2b4b16cf18c000c6901a1",
    name: "Testparty 1232341",
    description: "test description",
    url: "http://1nicesevent.com"
  },
  {
    date: "07.05.2019",
    location: "5cd2b4b16cf18c000c6901a2",
    name: "Tresorparty",
    description: "test description",
    url: "http://1nicesevent.com"
  },
  {
    date: "07.05.2019",
    location: "5cd2b4b16cf18c000c6901a3",
    name: "Sisyphos Party",
    description: "test description",
    url: "http://1nicesevent.com"
  },
  {
    date: "07.05.2019",
    location: "5cd2b4b16cf18c000c6901a3",
    name: "Berhain Party day2",
    description: "test description",
    url: "http://1nicesevent.com"
  }
]

Event.deleteMany()
  .then(() => {
    return Event.create(events)
  })
  .then(eventsCreated => {
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

// let locations = [
//   {
//     city: "Zürich",
//     name: "Bogen F",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "El Lokal",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Exil",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Hafenkneipe",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Helsinki",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Kaufleuten",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Mascotte",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Mehrspur",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Moods",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Papiersaal",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Rote Fabrik",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Sender",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
//   {
//     city: "Zürich",
//     name: "Stall 6",
//     GPS: "129803120983",
//     address: "teststreet1234",
//   },
// ]



// Location.deleteMany()
//   .then(() => {
//     return Location.create(locations)
//   })
//   .then(locationsCreated => {
//     console.log(`${locationsCreated.length} locations created with the following id:`);
//     console.log(locationsCreated.map(u => u._id));
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })