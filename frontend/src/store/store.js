import { applyMiddleware, legacy_createStore as createStore } from "redux";
import {thunk} from 'redux-thunk'
import { pharmReducer } from "./reducer/pharmReducer.js";
import { labReducer } from "./reducer/labReducer.js";


export const store = createStore(pharmReducer, applyMiddleware(thunk))
export const labStore = createStore(labReducer, applyMiddleware(thunk))
