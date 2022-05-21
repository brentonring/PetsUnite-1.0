const router = require('express').Router();
const db_adoption = require('../models/collections');

//Controllers routes for Services
//GET route pet adoption


//GET add pet adoption
router.get ('/new', (req, res) => {
    res.render('adoption/new')
})

//POST add pet adoption


//GET show pet adoption
router.get('/show', (req, res) => {
    // res.send("GET adoption/show")
    res.render('adoption/show')
})
// I used Postman to check route above. It's good as is. Once we connect data on Mongoose, I will include the commented sections.

//GET edit pet adoption


//PUT edit pet adoption


//DELETE pet adoption

module.exports = router;