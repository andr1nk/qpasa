const express = require('express')
const router = express.Router()
const Event = require('../models/Event')
const Location = require('../models/Location')
const moment = require('moment')

/* GET home page */
router.get('/events', (req, res, next) => {
    const dateOfToday = moment(new Date()).format('DD.MM.YYYY')
    const dateOfTomorrow = moment(new Date())
        .add(1, 'day')
        .format('DD.MM.YYYY')
    const dateOfAfterTomorrow = moment(new Date())
        .add(2, 'day')
        .format('DD.MM.YYYY')
    Location.find({})
        .then(locationNames => {
            console.log(locationNames)
            Event.find({})
                .populate('location')
                .then(events => {
                    console.log(events)
                    eventsTodayArr = events.filter(el => {
                        if (el.date === dateOfToday) {
                            let going = false

                            if (req.user) {
                                going = req.user.goingEvents
                                    .map(element => element + '')
                                    .includes(el._id + '')
                            }
                            el.going = going
                            return el
                        }
                    })
                    eventsTomorrowArr = events.filter(el => {
                        if (el.date === dateOfTomorrow) {
                            let going = false

                            if (req.user) {
                                going = req.user.goingEvents
                                    .map(element => element + '')
                                    .includes(el._id + '')
                            }
                            el.going = going
                            return el
                        }
                    })
                    eventsAfterTomorrowArr = events.filter(el => {
                        if (el.date === dateOfAfterTomorrow) {
                            let going = false

                            if (req.user) {
                                going = req.user.goingEvents
                                    .map(element => element + '')
                                    .includes(el._id + '')
                            }
                            el.going = going
                            return el
                        }
                    })
                    let userLoggedIn = req.isAuthenticated()
                    res.json(events)
                })
        })
        .catch(err => {
            res.json(err);
        })
})

module.exports = router
