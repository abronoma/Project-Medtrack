import { ADD_LABS, FETCH_LABS } from "../action/labActions.js"

const initialState = {
    labs: []
}

export const labReducer = (state = initialState, action) => {
    console.log("action", action);
    switch(action.type) {
        case ADD_LABS: {
            return {labs: [...state.labs, action.payload]}
        }

        case FETCH_LABS: {
            return {labs: action.payload}
        }

        
        default:
            return state
    }
}
