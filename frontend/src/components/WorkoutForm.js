import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => { //UI in sync with database 
    const { dispatch } = useWorkoutsContext() // destructure the dispatch function from the useWorkoutsContext 

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    // reach out to api and take event object
    const handleSubmit = async (e) => {
        e.preventDefault() //prevent default action of the form being submitted

        // create dummy worokout object that we are going to send as the body of the request
        const workout = { title, load, reps}

        // want to use fetch api to send a post request aka fetch request to POST the new data
        const response = await fetch('/api/workouts', {
            method: 'POST', // have to send dummy workout body as json !! 
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        // check if response was okay
        if (!response.ok) {
            setError(json.error) 
            setEmptyFields(json.emptyFields) // setting empty fields
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null) // in case there was an error prev
            setEmptyFields([])// set empty fields to an empty array
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    // creating a form w these 3 input fields
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercise Name:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)} //user types in workout title
                value={title} // two way data binding set val of import to be title state
                className={ emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load:</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)} 
                value={load} 
                className={ emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)} 
                value={reps} 
                className={ emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm