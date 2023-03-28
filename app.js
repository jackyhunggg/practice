// only using dotenv while not in the production environment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  // Define the parameters
  // Load express and build up the server
  const express = require('express')
  const app = express()
  const mongoose = require('mongoose')
  const port = 3000
  
  // set up MongoDB connection
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  // set database connection status
  const db = mongoose.connection
  
  // connection error
  db.on('error', () => {
    console.log('mongodb error!')
  })
  
  // connection success
  db.once('open', () => {
    console.log('mongodb connected!')
  })
  
  app.get('/', (req, res) => {
    res.send('hello world')
  })
  
  app.listen(port, () => {
    console.log(`App is running on port ${port}`)
  })
  