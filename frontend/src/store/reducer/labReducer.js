import { ADD_LABS, DELETE_LABS, FETCH_LABS, UPDATE_LABS } from "../action/labActions.js"

const initialState = {
    labs: []
}

export const labReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_LABS: {
            return {labs: [...state.labs, action.payload]}
        }

        case FETCH_LABS: {
            return {labs: action.payload}
        }

        case UPDATE_LABS: {
            return {labs: state.labs.map((lab))}
        }

        case DELETE_LABS: {
            return {labs: state.labs.filter((lab) => lab._id !== action.payload._id)}
        }
        
        default:
            return state
    }
}
