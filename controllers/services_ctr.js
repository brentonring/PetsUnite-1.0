const router = require('express').Router();
// const services = require('../models/collections');
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


//GET show service


//GET edit service


//PUT edit service


//DELETE service

module.exports = router