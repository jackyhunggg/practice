const mongoose = require('mongoose')
// load todo model
const Todo = require('../todo')
// only using dotenv while not in the production environment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

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
    for(let i = 0; i < 10; i ++) {
        Todo.create({name: `name-${i}`})
    }
    console.log('done')
})