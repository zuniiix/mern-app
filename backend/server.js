require('dotenv').config()

const express = require('express')

// express app stored in that constant
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// we want to react to requests so set up a route handler , aka the route being app 
app.get('/', (req, res) => { 
    res.json({mssg: 'Welcome to the app'})
})

// listen for port numbers ,, requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
