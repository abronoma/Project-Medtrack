import { ADD_LABS, FETCH_LABS } from "../action/labActions.js"

const initialState = {
    labs: []
}

export const labReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_LABS: {
            return {labs: [...state.labs, action.payload]}
        }

        case FETCH_LABS: {
            return {...state, labs: action.payload}
        }

        
        default:
            return state
    }
}
