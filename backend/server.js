const express = require('express')


// express app stored in that constant
const app = express()

// we want to react to requests so set up a route handler , aka the route being app
app.get()

// type npm run dev to use nodemon,, we can see this in package.json line 9
// listen for port numbers ,, requests
app.listen(3000, () => {
    console.log('listening on port 3000')
})