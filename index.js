// **Modules and Globals**
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// **Express Settings**
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) //static files don't dynamically change
app.use(express.urlencoded({ extended: true })) //body parser tool that decrypts data, included with Express
app.use(methodOverride('_method')) // method-override listens for the query string value _method?


// **Controllers & Routes**
app.use('/places', require('./controllers/places'))

// !! when you call the render method, it knows to look for a 'views' folder !!
app.get('/', (req, res) => {
    res.render('home')
})


// !! make sure this route is at the bottom OR 
// it will override your other pages !!
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)
