const express = require('express')
const router = express.Router()
const User = require('../../../oi/models/User')
const Event = require('../../../oi/models/Event')

router.post('/whoisgoing/:id', (req, res) => {
    const _id = req.params.id
    Event.findById({ _id })
        .populate('location')
        .then(event => {
            User.find({ goingEvents: { $in: _id } })
                .then(usersWhoGo => {
                    //console.log(event)
                    res.render('whoisgoing/whoisgoing', { usersWhoGo, event })
                })
                .catch(err => {
                    console.error(err)
                })
        })
        .catch(err => {
            console.error(err)
        })
})

module.exports = router
