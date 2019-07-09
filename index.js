'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config.js')

mongoose.connect(config.db, (err, res) => {
  if (err) throw err
  console.log('Stablished connection with the database')
  
  app.listen(config.port, () => {
    console.log(`API REST corriento en  http://localhost:${config.port}`)
  })
})

