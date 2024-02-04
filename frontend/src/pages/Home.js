import { useEffect } from 'react'

import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => { 
    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {
        // fetch workouts from api
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') // fetch the data and store the response in response
            const json = await response.json()

            // check if the response is ok
            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json}) // fire this dispatch function which in turn fires workoutsRedcucer and passes is in the action (set_workouts)
            } 
        }

        fetchWorkouts()
    }, [dispatch]) // dependecy array, will only fire once when the component first renders

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map( workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home