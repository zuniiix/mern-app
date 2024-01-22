const mongoose = require('mongoose')

const Schema = mongoose.Schema // we make a schema for the model which enforces a structure on the documents we save to
                               // the database in terms of what propertues they should have and what types they should
                               // be etc

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true }) // configured to apply timestamps like a create timestamp property

module.exports = mongoose.model('Workout', workoutSchema) // at the end make a model based on that schema and 
                                                          // we export it so 