import { pharmReducer } from "./pharmReducer";
// import { labReducer } from "./labReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    drugs: pharmReducer,
    // labs: labReducer
})

