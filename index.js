require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

// when you call the render method, it knows to look for a 'views' folder
app.get('/', (req, res) => {
    res.render('home')
})



// make sure this route is at the bottom OR 
// it will override your other pages
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
