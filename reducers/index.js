import {combineReducers} from "redux";
import {applyMiddleware, createStore} from "redux";
import profileReducer from "./profileReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    auth: authReducer,
    message: messageReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))