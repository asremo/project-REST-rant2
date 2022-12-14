// connect to Mongoose after doing npm install mongoose

require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

// making a one-stop shop for our connection info and access to all of our models
module.exports.Place = require('./places')
module.exports.Comment = require('./comment')