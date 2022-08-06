import React from "react";
import classes from './App.less'
import Main from "./main/Main";
import FindFr from "./FindFr/FindFr";
import { Route, Routes} from "react-router-dom";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";

const App = () => {


    return (
        <div className="container">
                <Navbar/>
                <AppRoute/>
        </div>
    )
}

export default App
