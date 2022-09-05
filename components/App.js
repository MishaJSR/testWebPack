import React, {useEffect} from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'
import {useDispatch, useSelector} from "react-redux";
import {checkAuth} from "../actions/inq";

const App = () => {

    const isAuth = useSelector(state => state.users.isAuth);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkAuth());
    });

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
