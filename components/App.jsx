import React from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'
import {useDispatch, useSelector} from "react-redux";

const App = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.users.activeUser.isActive)

    return (
        <div className="container">
                <Navbar isA={isAuth}/>
                <AppRoute/>
        </div>
    )
}

export default App
