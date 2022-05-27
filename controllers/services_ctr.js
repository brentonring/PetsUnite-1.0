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
router.get('/new', (req, res) => {
    res.render('services/new_services')
})

//POST add service
router.post('/', (req, res) => {
  db.Service.create(req.body)
    .then(() => {
      res.redirect('/services');
    })
    .catch(err => {
      if(err && err.name === 'ValidationError'){
        let message = "Validation Error: "
        for(var field in err.errors){
          message+= `${field} was ${err.errors[field].value}.`
          message+= `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('services/new_services', {message})
      }
      else{
        res.render('error404');
      }
    })
})

// Marisol - Waiting on updates to services seed data. Render code ready below.
//GET show service
router.get('/:id', (req, res) => {
//   res.send("GET services/show_services")
  // res.render('services/show')
// })
  db.Service.findById(req.params.id)
    .then(services => {
      res.render('services/show_services', {services});
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
router.delete('/:id', async (req, res) => {
  let deletedService = await db.Service.findByIdAndDelete(req.params.id)
  res.status(303).redirect('/services')
})

module.exports = router;