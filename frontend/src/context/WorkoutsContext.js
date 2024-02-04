import { createContext, useReducer } from 'react'


export const WorkoutsContext = createContext() //creates brand new context

export const workoutsReducer = (state, action) => {
    // check the action type n what we want do with the data
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload // if we want to set all the workouts then the payload property that was pass into the dispatch function would be an array of all of the workouts
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts] // adding that new workout to the array , spread current state 
            } // keep local state in sync w database so we dispatch createworkout when workout is created etc
        default:
            return state
    }
}

// provide context to component tree by making a context provider component 
//destructure children property from the props in this component
export const WorkoutsContextProvider = ({ children }) => {
    // specify inital value (null), similar to useState which returns the state
    //passes the action into the reducer function and update the state using the info n data
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    }) 

    // outputting the root app component
    return ( //spreading out diff properties inside this object n providing those
        <WorkoutsContext.Provider value={{...state, dispatch}}>
            { children }
        </WorkoutsContext.Provider>
    )
}




