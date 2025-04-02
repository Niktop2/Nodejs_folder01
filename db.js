const mongoose = require('mongoose')

const mongoURl = "mongodb://localhost:27017/hotels"

mongoose.connect(mongoURl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
                       
db.on('connected', () => {
  console.log('connected to mongoDB server')
})
db.on('error', (err) => {
  console.log('mongodb connection error', err)
})
db.on('disconnected', () => {
  console.log('mongodb disconnected')
})

module.exports = db;