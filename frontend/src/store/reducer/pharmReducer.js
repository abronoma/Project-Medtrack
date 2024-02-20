import { ADD_DRUGS, DELETE_DRUGS, FETCH_DRUG, FETCH_DRUGS, UPDATE_DRUGS } from "../action/pharmActions.js"

const initialState = {
    drugs: [],
}

export const pharmReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DRUGS: {
            return {drugs: [...state.drugs, action.payload]}
        }

        case FETCH_DRUGS: {
            return {... state, drugs: action.payload}
        }

        case FETCH_DRUG: {
            return { drugs: action.payload}
        }

        case UPDATE_DRUGS: {
            return {drugs: state.drugs.map((drug))}
        }

        case DELETE_DRUGS: {
            return {drugs: state.drugs.filter((drug) => drug._id !== action.payload._id)}
        }

        default:
            return state
    }
}
