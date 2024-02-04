import { WorkoutsContext } from '../context/WorkoutsContext'
import { useContext } from 'react'

// 11 this makes it easier when a lot of diff components start to share and update the same state
export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext) // have the obj stored in workoutContext

    if (!context) {
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
    }

    return context // everytime we want to use workouts data, we invoke this use workout context hook
}