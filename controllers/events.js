const router = require('express').Router();
const db = require('../models/Collections/collections');

//Controllers routes for Services
//GET route events


//GET add events
router.get ('/new', (req, res) => {
    res.render('events/new')
})

//POST add events


//GET show events
router.get('/show', (req, res) => {
    res.send("GET events/show")
    // res.render('events/show')
})


//GET edit events


//PUT edit events


//DELETE events

module.exports = router