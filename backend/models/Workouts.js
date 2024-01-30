const mongoose = require('mongoose') // want mongoose ; allows the schema to create models

const Schema = mongoose.Schema // create a new schema fx to create a new

// what should a typical workout property look like?
const workoutSchema = new Schema({ // pass in arg where we define this schema
    title: { // how title should look , aka like a string not a num ENFORCES SCHEMA
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    
}) 