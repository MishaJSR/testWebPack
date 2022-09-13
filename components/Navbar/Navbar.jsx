import React, {useEffect} from "react";
import classes from './Navbar.less'
import './Navbar.less'
import { NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setA} from "../../reducers/authReducer";
import logo from  '../../icons/brotherhood.png'
import angel from  '../../icons/angel.png'
import message from  '../../icons/send.png'
import nullProf from  '../../icons/profile.png'

const Navbar = ({isAuth}) => {

    const dispatch = useDispatch()
    const activeUser = useSelector(state => state.auth.activeUserId)

    return isAuth ?(
        <div className="cont-nav">
            <NavLink className="col-1 logolink"  to="/">
                <img src={logo} alt=""/>
            </NavLink>
            <nav className="header__menu menu col-9">
                <ui className="menu__list">
                    <li className="menu__item">
                        <NavLink className="hoverpink" to={"/profile/"+ activeUser}>
                            My Profile
                    </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink className="hoverpink" to="/search">
                            Search Friends
                        </NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink className="hoverpink" to="/messages">
                            Messages
                        </NavLink>
                    </li>
                </ui>
            </nav>
            <div className="authUserInfo col-2 hoverpink">
                <NavLink to={"/profile/"+ activeUser}>
                    <img className="nullprofile" src={nullProf} alt=""/>
                </NavLink>

                <NavLink className="login_end" to="/login" onClick={() => {
                    localStorage.clear();
                    dispatch(setA(false))
                }}>
                    Unlogin
                </NavLink>
            </div>
            {/*<div className="container row navbar">*/}
            {/*    <div className="left">*/}
            {/*    <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/">*/}
            {/*        InHunt*/}
            {/*    </NavLink>*/}
            {/*    <NavLink className="col-1 col-l-2 col-lg-2 col-mg-2 col-sm-3 a-nav" to={"/profile/"+ activeUser}>*/}
            {/*        My Profile*/}
            {/*    </NavLink>*/}
            {/*    <NavLink className="col-1 col-l-3 col-lg-4 col-mg-3 col-sm-3 a-nav" to="/search">*/}
            {/*       Search Friends*/}
            {/*    </NavLink>*/}
            {/*    <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/messages">*/}
            {/*        Messages*/}
            {/*    </NavLink>*/}
            {/*    </div>*/}
            {/*    <div className="right">*/}
            {/*        <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to={"/profile/" + activeUser}>*/}
            {/*            Me*/}
            {/*        </NavLink>*/}
            {/*        <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/login" onClick={() => {*/}
            {/*            localStorage.clear();*/}
            {/*            dispatch(setA(false))*/}
            {/*        }}>*/}
            {/*            Unlogin*/}
            {/*        </NavLink>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    ) :
        <div className="cont-nav">
                <NavLink className="col-1 logolink"  to="/">
                    <img className="img-box" src={logo} alt=""/>
                </NavLink>
            <nav className="header__menu menu col-9">
                <ui className="menu__list col-6">
                    <li className="menu__item col-6">
                        <NavLink className="hoverpink" to="/">
                            <img className="img-box" src={angel} alt=""/>
                        </NavLink>
                    </li>
                    <li className="menu__item col-6">
                        <NavLink  className="hoverpink" to="/">
                            <img className="img-box" src={message} alt=""/>
                        </NavLink>
                    </li>
                </ui>
            </nav>
            <div className="authUserInfo col-2">
                <NavLink className="login_end hoverpink" to="/login">
                    Login
                </NavLink>
            </div>
            {/*<div className="row navbar">*/}
            {/*    <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 a-nav" to="/">*/}
            {/*        InHunt*/}
            {/*    </NavLink>*/}
            {/*    <NavLink className="col-1 col-l-1 col-lg-1 col-mg-2 col-sm-2 right a-nav" to="/profile">*/}
            {/*        Login*/}
            {/*    </NavLink>*/}
            {/*</div>*/}
        </div>
}

export default Navbar