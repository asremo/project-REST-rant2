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
    // make sure id is a number. if not, go to 404 page
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    // make sure it is a valid array index. 
    // checks for accuracy of the places array at that index
    // if invalid, go to 404 page
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // 1. { place: places[id] } passes the data in places[id] to your view.
        // 2. to add the href value for the edit & delete button in show page, we need to
        // have access to the array index number by passing it into the view when
        // we call res.render() from the places.js controller -> id in the end of {place}
        res.render('places/show', { place: places[id], id })
    }
})

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
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
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})
  
  

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // splice actually gets delete route to actually delete
        // the item from the array
        places.splice(id, 1)
        res.redirect('/places')
    }
})
  
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id })
    }
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})



module.exports = router
