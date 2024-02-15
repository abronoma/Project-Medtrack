import { pharmReducer } from "./pharmReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    drugs: pharmReducer
})