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
  // .connect("mongodb://localhost/qpasa-api", { useNewUrlParser: true })
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

// let events = [
//   {
//     date: "07.05.2019",
//     location: "5cd2b4b16cf18c000c6901a0",
//     name: "Awesome Techno Party",
//     description: "test description",
//     url: "http://1nicesevent.com"
//   },
//   {
//     date: "07.05.2019",
//     location: "5cd2b4b16cf18c000c6901a1",
//     name: "Testparty 1232341",
//     description: "test description",
//     url: "http://1nicesevent.com"
//   },
//   {
//     date: "07.05.2019",
//     location: "5cd2b4b16cf18c000c6901a2",
//     name: "Tresorparty",
//     description: "test description",
//     url: "http://1nicesevent.com"
//   },
//   {
//     date: "07.05.2019",
//     location: "5cd2b4b16cf18c000c6901a3",
//     name: "Sisyphos Party",
//     description: "test description",
//     url: "http://1nicesevent.com"
//   },
//   {
//     date: "07.05.2019",
//     location: "5cd2b4b16cf18c000c6901a3",
//     name: "Berhain Party day2",
//     description: "test description",
//     url: "http://1nicesevent.com"
//   }
// ]

// Event.deleteMany()
//   .then(() => {
//     return Event.create(events)
//   })
//   .then(eventsCreated => {
//     console.log(`${eventsCreated.length} events created with the following id:`);
//     console.log(eventsCreated.map(u => u._id));
//   })
//   .then(() => {
//     // Close properly the connection to Mongoose
//     mongoose.disconnect()
//   })
//   .catch(err => {
//     mongoose.disconnect()
//     throw err
//   })

let locations = [
  {
    city: "Zürich",
    name: "Bogen F",
    GPS: {
      lat: "47.3847814",
      long: "8.5206887"
    },
    address: "Viaduktstrasse 97, 8005 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Dynamo",
    GPS: {
      lat: "47.3834046",
      long: "8.5371934"
    },
    address: "Wasserwerkstrasse 21, 8006 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "El Lokal",
    GPS: {
      lat: "47.3834224",
      long: "8.5306273"
    },
    address: "Gessnerallee 11, 8001 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Exil",
    GPS: {
      lat: "47.3883073",
      long: "8.517131"
    },
    address: "Hardstrasse 245, 8005 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Hafenkneipe",
    GPS: {
      lat: "47.3763376",
      long: "8.5310883"
    },
    address: "Militärstrasse 12, 8004 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Helsinki",
    GPS: {
      lat: "47.3858815",
      long: "8.5159686"
    },
    address: "Geroldstrasse 35, 8005 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Kaufleuten",
    GPS: {
      lat: "47.3716427",
      long: "8.5341738"
    },
    address: "Pelikanpl. 18, 8001 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Mascotte",
    GPS: {
      lat: "47.3663792",
      long: "8.5445846"
    },
    address: "Theaterstrasse 10, 8001 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Mehrspur",
    GPS: {
      lat: "47.3915258",
      long: "8.5097185"
    },
    address: "Toni-Areal, Förrlibuckstrasse 109, 8005 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Moods",
    GPS: {
      lat: "47.3886794",
      long: "8.5173859"
    },
    address: "Schiffbauplatz, 8005 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Papiersaal",
    GPS: {
      lat: "47.3581993",
      long: "8.5204826"
    },
    address: "Kalanderpl. 6, 8045 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Rote Fabrik",
    GPS: {
      lat: "47.3435616",
      long: "8.5336404"
    },
    address: "Seestrasse 395, 8038 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Sender",
    GPS: {
      lat: "47.3772136",
      long: "8.5254738"
    },
    address: "Kurzgasse 4, 8004 Zürich, Schweiz",
  },
  {
    city: "Zürich",
    name: "Stall 6",
    GPS: {
      lat: "47.3748365",
      long: "8.5325065"
    },
    address: "Gessnerallee 8, 8001 Zürich, Schweiz",
  },
]



Location.deleteMany()
  .then(() => {
    return Location.create(locations)
  })
  .then(locationsCreated => {
    console.log(`${locationsCreated.length} locations created with the following id:`);
    console.log(locationsCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })