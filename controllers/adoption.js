const router = require('express').Router();
const db = require('../models/Collections/collections');

//Controllers routes for Services
//GET route pet adoption


//GET add pet adoption
router.get ('/new', (req, res) => {
    res.render('adoption/new')
})

//POST add pet adoption


//GET show pet adoption


//GET edit pet adoption


//PUT edit pet adoption


//DELETE pet adoption

module.exports = router