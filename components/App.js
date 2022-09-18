import React, {useEffect} from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "../actions/auth";

const App = () => {

    const isAuth = useSelector(state => state.auth.isAuth);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuth());
    });

    return (
            <div className="wrapper">
                <div className="header-background header-mobile">
                    <div className="header">
                        <Navbar isAuth={isAuth}/>
                    </div>
                </div>
                <div className="main col-8 col-md-12 background-point">
                    <AppRoute isAuth={isAuth}/>
                </div>
            </div>
        )
}

export default App
