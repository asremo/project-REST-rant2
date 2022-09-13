const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    // console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    // adds the new place's data, found in req.body, to the places array
    places.push(req.body) 
    // redirect = redirects to new route
    res.redirect('/places')
})


// make sure /new route is above /:id route so the 
// new part of /places/new is not interpreted as an id
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})



module.exports = router
