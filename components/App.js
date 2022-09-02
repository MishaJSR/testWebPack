import React, {useEffect} from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'
import {useDispatch, useSelector} from "react-redux";

const App = () => {

    const isAuth = useSelector(state => state.users.isAuth)

    return (
        <div>
                <Navbar isAuth={isAuth}/>
            <div className="grey-background">
                <AppRoute isAuth={isAuth}/>
            </div>
        </div>
    )
}

export default App
