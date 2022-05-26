const router = require('express').Router();
const db = require('../models');

//Controllers routes for Services
//GET route services
router.get('/', (req, res) => {
    db.Service.find()
      .then(services => {
        res.render('services/index_services', {services});
      })
      .catch(err => {
        console.log('err', err);
        res.render('error404');
      })
})

//GET add service
router.get ('/new', (req, res) => {
    res.render('services/new_services')
})

//POST add service

// Marisol - Waiting on updates to services seed data. Render code ready below.
//GET show service
router.get('/:id', (req, res) => {
  // res.send("GET services/show_services")
//   res.render('events/show')
// })
db.Service.findById(req.params.id)
  .then(services => {
    res.render('services/show_services', {services})
  })
  .catch(err => {
    console.log('err', err);
    res.render('error404');
  })
})

//GET edit service
router.get('/:id/edit', (req, res) => {
    db.Service.findById(req.params.id)
      .then(services => {
        res.render('services/edit_services', {services})
      })
      .catch(err => {
        res.render('error404')
      })
  })

//PUT edit service
router.put('/:id', (req, res) =>{
    db.Service.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
      .then(() => {
        res.redirect(`/services/${req.params.id}`);
      })
      .catch(err => {
        res.render('error404');
      })
})

//DELETE service

module.exports = router;