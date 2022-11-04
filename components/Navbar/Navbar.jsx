import React, {useEffect} from "react";
import classes from './Navbar.less'
import './Navbar.less'
import { NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setA, setMe} from "../../reducers/authReducer";
import logo from  '../../icons/brotherhood.png'
import message from  '../../icons/send.png'
import findlove from  '../../icons/findlove.png'
import userimg from  '../../icons/user.png'
import exit from  '../../icons/exit.png'
import photo1 from  '../../icons/11photo.jpg'

const Navbar = ({isAuth}) => {

    const dispatch = useDispatch()
    const activeUser = useSelector(state => state.auth.activeUserId)
    const nowUser = useSelector(state => state.profile.nowUser);

    return isAuth ?(
        <div className="cont-nav">
            <NavLink className="hoverpink mobile-none col-1 col-l-2 col-sm-3"  to="/">
                <img className="img-box" src={logo} alt=""/>
            </NavLink>
            <div className="menu__list col-4">
                        <NavLink className="hoverpink col-2 col-lg-3" to={"/profile/"+ activeUser}>
                            <img className="img-box" src={userimg} alt=""/>
                        </NavLink>
                        <NavLink className="hoverpink col-2 col-lg-3" to="/search">
                            <img className="img-box" src={findlove} alt=""/>
                        </NavLink>
                        <NavLink className="hoverpink col-2 col-lg-3" to="/messages">
                            <img className="img-box" src={message} alt=""/>
                        </NavLink>
            </div>
            <div className="authUserInfo mobile-none col-1 col-l-2 col-sm-3">
                <NavLink className="hoverpink col-3 col-lg-4"  to={"/profile/"+ activeUser}>
                    <img className="nullprofile round" src={nowUser.ava? nowUser.ava : photo1  } alt=""/>
                </NavLink>
                <NavLink className="hoverpink rigth_nav_panel col-3 col-lg-4 "  to="/login" onClick={() => {
                    localStorage.clear();
                    dispatch(setA(false));
                }}>
                    <img className="nullprofile" src={exit} alt=""/>
                </NavLink>
            </div>
        </div>
    ) :
        <div className="cont-nav">
                <NavLink className="hoverpink col-1 col-l-1 col-sm-3"  to="/">
                    <img className="img-box" src={logo} alt=""/>
                </NavLink>
                <div className="menu__list">
                </div>
                <NavLink className="hoverpink col-1 col-l-1 col-sm-3" to="/login">
                    Login
                </NavLink>
        </div>
}

export default Navbar