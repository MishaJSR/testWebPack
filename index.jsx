import './index.less'
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import {store} from "./reducers";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom'
import AppRoute from "./router/routes";



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
            <AppRoute/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
)