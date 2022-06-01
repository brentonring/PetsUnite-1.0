const router = require('express').Router();
const db = require('../models');

//Controllers routes for Adoption
//GET route pet adoption
router.get('/', (req, res) => {
  db.Adoption.find()
    .then(pets => {
      res.render('adoption/index_adoption', {pets});
    })
    .catch(err => {
      console.log('err', err);
      res.render('error404');
    })
})

//GET add pet adoption
router.get ('/new', (req, res) => {
    res.render('adoption/new_adoption')
})

//POST add pet adoption
router.post('/', (req, res) => {
  db.Adoption.create(req.body)
    .then(() => {
      res.redirect('/adoption');
    })
    .catch(err => {
      if(err && err.name === 'ValidationError'){
        let message = "Validation Error: "
        for(var field in err.errors){
          message+= `${field} was ${err.errors[field].value}.`
          message+= `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('adoption/new_adoption', {message})
      }
      else{
        res.render('error404');
      }
    })
})

//GET show pet adoption
router.get('/:id', (req, res) => {    
    db.Adoption.findById(req.params.id)
    .populate('comments')
    .then(pets => {
      res.render('adoption/show_adoption', {pets});
    })
    .catch(err => {
      res.render('error404');
    })
})

//GET edit pet adoption
router.get('/:id/edit', (req, res) => {
  db.Adoption.findById(req.params.id)
    .then(foundPet => {
      res.render('adoption/edit_adoption', {
        pet: foundPet
      })
    })
    .catch(err => {
      res.render('error404')
    })
})

//PUT edit pet adoption
router.put('/:id', (req, res) =>{
  db.Adoption.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
    .then(() => {
      res.redirect(`/adoption/${req.params.id}`);
    })
    .catch(err => {
      res.render('error404');
    })
})

//Post comment to pet adoption
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
    req.body.adopt = req.body.adopt ? true : false
    db.Adoption.findById(req.params.id)
        .then(pets => {
            db.AdoptComment.create(req.body)
                .then(comment => {
                    pets.comments.push(comment.id)
                    pets.save()
                        .then(() => {
                            res.redirect(`/adoption/${req.params.id}`)
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
});

//DELETE pet adoption
router.delete('/:id', async (req, res) => {
  let deletedAdoption = await db.Adoption.findByIdAndDelete(req.params.id)
  res.status(303).redirect('/adoption')
});

//DELETE comment from pet adoption
router.delete('/:id/comment/:commentId', (req, res) => {
  db.AdoptComment.findByIdAndDelete(req.params.commentId)
        .then(() => {
            console.log('Success')
            res.redirect(`/adoption/${req.params.id}`)
        })
        .catch(err => {
            res.render('error404')
        })
})

module.exports = router;