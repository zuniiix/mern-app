const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    // list them on webpage, newest ones on top
    const workouts = await Workout.find({}).sort({createdAt: -1}) // gives all of workout documents

    // sending the docs as json back to browser/client
    res.status(200).json(workouts)
}



// get a single workout
const getWorkout = async (req, res) => {
    // grabbing the id property from the route parameters
    const { id } = req.params

    const workout = await Workout.findById(id)

    // if that workout doesnt exist then we send error
    if (!workout) {
        return res.status(404).json({error: 'No such workout'}) //  if we dont return then itll fire the rest of the code 
    }
    // if error doesnt fire then weve found workout n have value for it n send json
    res.status(200).json(workout)
}


// create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){ // if we dont have workout send back a 404 status
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


// update a workout
const updateWorkout = async (req, res) =>{
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    // 2 params : id and the object which represents the updates that we want to make
    const workout = await Workout.findOneAndUpdate({_id:id}, { 
        ...req.body // wtv properties are on the body would output those in this update object
    })

    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }

    // if there is workout then
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}