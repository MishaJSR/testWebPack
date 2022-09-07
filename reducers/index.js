import {combineReducers} from "redux";
import {applyMiddleware, createStore} from "redux";
import profileReducer from "./profileReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))