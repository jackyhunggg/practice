// Define the parameters
// Load express and build up the server
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`)
})