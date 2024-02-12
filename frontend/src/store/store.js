import { applyMiddleware, legacy_createStore as createStore } from "redux";
import {thunk} from 'redux-thunk'
import { pharmReducer } from "./reducer/pharmReducer.js";


export const store = createStore(pharmReducer, applyMiddleware(thunk))
