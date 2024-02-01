const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workoutDetails">
            <h4>{workout.title}</h4>
            <p><strong>Load(lb): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails