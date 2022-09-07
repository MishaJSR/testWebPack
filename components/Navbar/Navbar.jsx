import React, {useEffect} from "react";
import classes from './Navbar.less'
import './Navbar.less'
import { NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setA} from "../../reducers/authReducer";

const Navbar = ({isAuth}) => {

    const dispatch = useDispatch()

    return isAuth ?(
        <div className="cont-nav">
            <div className="row navbar">
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/">
                    InHunt
                </NavLink>
                <NavLink className="col-1 col-l-2 col-lg-2 col-mg-2 col-sm-3 a-nav" to="/profile">
                    My Profile
                </NavLink>
                <NavLink className="col-1 col-l-3 col-lg-4 col-mg-3 col-sm-3 a-nav" to="/search">
                   Search Friends
                </NavLink>
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/messages">
                    Messages
                </NavLink>
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 right a-nav" to="/login" onClick={() => {
                    localStorage.clear();
                    dispatch(setA(false))
                }}>
                    Unlogin
                </NavLink>
            </div>
        </div>
    ) :
        <div className="cont-nav">
            <div className="row navbar">
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/">
                    InHunt
                </NavLink>
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 right a-nav" to="/profile">
                    Login
                </NavLink>
            </div>
        </div>
}

export default Navbar