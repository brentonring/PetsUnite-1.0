const router = require('express').Router();
// const events = require('../models/collections');
const db = require('../models');

//Controllers routes for Events
//GET route events
router.get('/', (req, res) => {
    db.Event.find()
      .then(events => {
        res.render('events/index_events', {events});
      })
      .catch(err => {
        console.log('err', err);
        res.render('error404');
      })
})


//GET add events
router.get ('/new', (req, res) => {
    res.render('events/new_events')
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