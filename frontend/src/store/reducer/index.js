import { combineReducers } from "redux";
import { pharmReducer } from "./pharmReducer";
import { labReducer } from "./labReducer";

export const rootReducer = combineReducers({
    drugs: pharmReducer,
    labs: labReducer
})
