import React, {useEffect} from "react";
import classes from './Navbar.less'
import './Navbar.less'
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {onAuth, unAuth} from "../../reducers/usersReducer";

const Navbar = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.users.activeUser.isActive)

    return isAuth ?(
        <div className="cont-nav">
            <div className="row navbar">
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2" to="/">
                    InHunt
                </NavLink>
                <NavLink className="col-1 col-l-2 col-lg-2 col-mg-2 col-sm-3" to="/profile">
                    My Profile
                </NavLink>
                <NavLink className="col-1 col-l-3 col-lg-4 col-mg-3 col-sm-3" to="/search">
                   Search Friends
                </NavLink>
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2" to="/messages">
                    Messages
                </NavLink>
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 right" to="/login" onClick={() => dispatch(unAuth())}>
                    Unlogin
                </NavLink>
            </div>
        </div>
    ) :
        <div className="cont-nav">
            <div className="row navbar">
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2" to="/">
                    InHunt
                </NavLink>
                <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 right" to="/profile" onClick={() => dispatch(onAuth())}>
                    Login
                </NavLink>
            </div>
        </div>
}

export default Navbar