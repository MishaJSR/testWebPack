import React, {useEffect, useState} from "react";
import AppRoute from "../router/routes";
import Navbar from "./Navbar/Navbar";
import './App.less'
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, setAllUsers, staticURL} from "../actions/auth";
import {NavLink} from "react-router-dom";
import {setA, setAuthLoading} from "../reducers/authReducer";
import exit from "../icons/exit.png";
import photo from "../icons/11photo.jpg";
import loaderImg from "../icons/loading_app.png";
import {useLocation} from "react-router";
import PreloaderLogin from "./Preloaders/PreloaderLogin";

const App = () => {

    const isAuth = useSelector(state => state.auth.isAuth);
    const myUser = useSelector(state => state.auth.myUser);
    const authLoadind = useSelector(state => state.auth.authLoadind);
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        dispatch(setAuthLoading(true));
        if (localStorage.getItem('id')) {
            dispatch(checkAuth());
            dispatch(setAllUsers(localStorage.getItem('id')));
        } else dispatch(setA(false))

    }, []);

    return (isAuth === null?
            <PreloaderLogin img={loaderImg}/>
            :
            <div className="wrapper">
                {myUser&&
                    <div className="mobile_navbar">
                        <div className="authUserInfo">
                            <NavLink className="hoverpink round-white" to={"/login"} onClick={() => {
                                localStorage.clear();
                                dispatch(setA(false))
                            }}>
                                <img className="nullprofile round" src={staticURL + myUser.ava} alt="" />
                            </NavLink>
                        </div>
                    </div>}
                <div className={"header-background " + ((pathname.indexOf("message") < 0)? "header-mobile" : "header-mobile-none")}>
                    <div className="header">
                        <Navbar isAuth={isAuth}/>
                    </div>
                </div>
                <div className={(pathname.indexOf("message") < 0)? "main col-8 col-md-12 background-point": "main main-message col-8 col-md-12 background-point"}>
                    <AppRoute isAuth={isAuth}/>
                </div>
            </div>
        )
}

export default App
