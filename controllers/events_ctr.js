const router = require('express').Router();
const events = require('../models/collections');
// const db_event = require('../models/collections');

//Controllers routes for Events
//GET route events
router.get('/', (req, res) => {
    res.render('events/index_events', {events});
    // res.send('GET /events stub')
    // db.Event.find()
    //   .then(events => {
    //     res.render('events/index_events', {events});
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //     res.render('error404');
    //   })
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