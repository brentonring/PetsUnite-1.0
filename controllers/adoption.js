const router = require('express').Router();
const pets = require('../models/collections');
// const db_adoption = require('../models/collections');

//Controllers routes for Adoption
//GET route pet adoption
router.get('/', (req, res) => {
    res.render('adoption/index_adoption', {pets});
    // res.send('GET /adoption stub')
    // db.Adoption.find()
    //   .then(pets => {
    //     res.render('adoption/index_adoption', {pets});
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //     res.render('error404');
    //   })
})

//GET add pet adoption
router.get ('/new', (req, res) => {
    res.render('adoption/new_adoption')
})

//POST add pet adoption


//Alissa--->Marisol I put in some code to test out the show page on my index, but i can't get it to generate an id number in the url. 
//hopefully once katie finalizes the mongodb seeders and database content in teh collections.js and mongo_index.js it will be fixed. 
//GET show pet adoption
router.get('/:id', (req, res) => {
    // res.send("GET adoption/show")
    res.render('adoption/show_adoption')
    //pre-mongo code
    // let id = Number(req.params.id);
    // if(isNaN(id)){
    //     res.render('error404')
    // }
    // else if(!pets[id]){
    //     res.render('error404')
    // }
    // else{
    //     res.render('adoption/show_adoption', {pet: pets[id], id})
    // }
    //mongo code
    // db.Adoption.findById(req.params.id)
    // .then(pets => {
    //   res.render('adoption/show_adoption', {pets});
    // })
    // .catch(err => {
    //   res.render('error404');
    // })
})
// I used Postman to check route above. It's good as is. Once we connect data on Mongoose, I will include the commented sections.

//GET edit pet adoption
router.get('/:id/edit', (req, res) => {
<<<<<<< HEAD
    res.send('GET edit form stub')
})
=======
    // let id = Number(req.params.id);
    // if(isNaN(id)){
    //   res.render('error404')
    // }
    // else if(!pets[id]){
    //   res.render('error404')
    // }
    // else{
    //   res.render('adoption/edit_adoption', {pet: pets[id], id})
    // }
    // res.send('GET /:id/edit stub')
    // db.Adoption.findById(req.params.id)
    //   .then(pets => {
    //     res.render('adoption/edit_adoption', {pets})
    //   })
    //   .catch(err => {
    //     res.render('error404')
    //   })
  })
>>>>>>> 58a74a7285f61393fead291d5159108e9ee04b23

//PUT edit pet adoption
router.put('/:id', (req, res) =>{
    // let id = Number(req.params.id);
    // if(isNaN(id)){
    //   res.render('error404')
    // }
    // else if(!pets[id]){
    //   res.render('error404')
    // }
    // else{
    //   if(!req.body.pic){
    //     req.body.pic = 'https://placekitten.com/100/100'
    //   }
    //   pets[id] = req.body;
    //   res.redirect(`/adoption/${id}`);
    // }
    // res.send('PUT /:id stub')
    // db.Adoption.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    //   .then(() => {
    //     res.redirect(`/adoption/${req.params.id}`);
    //   })
    //   .catch(err => {
    //     res.render('error404');
    //   })
  })

//DELETE pet adoption


module.exports = router;