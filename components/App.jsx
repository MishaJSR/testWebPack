import React, {useEffect} from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/inq";

const App = () => {

    return (
        <div className="container-app">
                <Navbar/>
            <div className="grey-background">
                <AppRoute/>
            </div>
        </div>
    )
}

export default App
