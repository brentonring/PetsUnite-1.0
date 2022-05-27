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


//GET show service
router.get('/:id', (req, res) => {  
    db.Service.findById(req.params.id)
    .populate('comments')
      .then(services => {
        console.log(services.comments)
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

//post comment to service
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
    req.body.service = req.body.service ? true : false
    db.Service.findById(req.params.id)
        .then(services => {
            db.Servicecomment.create(req.body)
                .then(comment => {
                    services.comments.push(comment.id)
                    services.save()
                        .then(() => {
                            res.redirect(`/services/${req.params.id}`)
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

//DELETE service

module.exports = router;