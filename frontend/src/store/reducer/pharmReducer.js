import { ADD_DRUGS, DELETE_DRUGS, FETCH_DRUGS, UPDATE_DRUGS } from "../action/pharmActions.js"

const initialState = {
    drugs: [],
    // loading: false,
    // error: null
}

export const pharmReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DRUGS: {
            return {drugs: [...state.drugs, action.payload]}
        }

        case FETCH_DRUGS: {
            return {... state, drugs: action.payload}
        }

        // case UPDATE_DRUGS: {
        //     return {}
        // }

        // case DELETE_DRUGS: {
        //     return {}
        // }

        default:
            return state
    }
}
