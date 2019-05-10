const express = require('express')
const router = express.Router()
const Location = require('../models/Location')


router.get('/locations', (req, res, next) => {

  Location.find({})
    .then(location => {
      res.json(location)
    })
    .catch(err => {
      res.json(err);
    })
})

router.post('/locations', (req, res) => {
  Location.create({
    city: req.body.city,
    name: req.body.name,
    GPS: {
      lat: req.body.GPS.lat,
      long: req.body.GPS.long
    },
    address: req.body.address
  })
    .then(response => {
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
});

module.exports = router
