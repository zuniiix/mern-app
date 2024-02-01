import { useEffect, useState } from 'react'

// components
import workoutDetails from '../components/workoutDetails'

const Home = () => {
    const [workouts, setWorkouts] = useState(null) // to begin with state is null BUT if the res is ok then update workouts using setWorkouts and the value is is going to be the const json

    useEffect(() => {
        // fetch workouts from api
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts') // fetch the data and store the response in response
            const json = await response.json()

            // check if the response is ok
            if (response.ok) {
                setWorkouts(json)
            } 
        }

        fetchWorkouts()
    }, []) // dependecy array, will only fire once when the component first renders
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <workoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home