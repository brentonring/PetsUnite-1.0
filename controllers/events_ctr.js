const router = require('express').Router();
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
router.get('/:id', (req, res) => {    
  db.Event.findById(req.params.id)
  .populate('comments')
  .then(events => {
    console.log(events.comments)
    res.render('events/show_events', {events});
  })
  .catch(err => {
    console.log('err', err);
    res.render('error404');
  })
})


//GET edit events
router.get('/:id/edit', (req, res) => {
    db.Event.findById(req.params.id)
      .then(events => {
        res.render('events/edit_events', {events})
      })
      .catch(err => {
        res.render('error404')
      })
})

//PUT edit events
router.put('/:id', (req, res) =>{
    db.Event.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
      .then(() => {
        res.redirect(`/events/${req.params.id}`);
      })
      .catch(err => {
        res.render('error404');
      })
})

//post comment to events
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
    req.body.event = req.body.event ? true : false
    db.Event.findById(req.params.id)
        .then(events => {
            db.Eventcomment.create(req.body)
                .then(comment => {
                    events.comments.push(comment.id)
                    events.save()
                        .then(() => {
                            res.redirect(`/events/${req.params.id}`)
                        })
                        .catch(err => {
                            res.render('error404')
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

//DELETE events
router.delete('/:id', async (req, res) => {
  let deletedEvent = await db.Event.findByIdAndDelete(req.params.id)
  res.status(303).redirect('/events')
})

module.exports = router;