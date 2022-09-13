const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'images/thai-food.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'images/cat-cafe.jpg'
    }]
      
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
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
