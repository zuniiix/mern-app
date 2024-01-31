require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workouts')

// express app stored in that constant
const app = express()


// middleware
app.use(express.json()) // any req that comes in -> checks if its sending data to the server
// if it does, then it passes it and attaches it to the req object so we can access it in the req handler
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// we want to react to requests so set up a route handler , aka the route being app 
// only need this route to test API
//app.get('/', (req, res) => { 
//   res.json({mssg: 'Welcome to the app'})
//})

// routes
// takes all the routes we attached to the router and uses them on the app
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI) // try to connect to the database , asynch in method
    .then(() => {
        // listen for requests once connected to the db
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => { // catch block in case there is error
        console.log(error)
    }) 
    