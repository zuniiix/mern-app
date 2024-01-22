const express = require('express')
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController') // the controller functions are from the controller folder


/*
~ register all of the workout routes
~ each hooked up to different controller functions to handle request
*/
const router = express.Router()

// GET all workouts route
router.get('/', getWorkouts)

//GET a single workout route
router.get('/:id', getWorkout)

// POST a new workout route
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router