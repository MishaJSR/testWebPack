import React, {useEffect, useState} from "react";
import classes from './Login.less'
import {setSearch} from "../../reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {getRepos, logIn} from "../../actions/inq";
import {Navigate, Link, NavLink} from "react-router-dom";
import PreloaderLogin from "../Preloaders/PreloaderLogin";

const Login = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.users.isAuth)

    const [email, setEmail] = useState("");

    const [pass, setPass] = useState("");

    const [isPreloader, setPreloader] = useState(false);

    if (isAuth) {
        return <Navigate to="/" />
    }

    return (
        <div className="login_page">
            <div className="form">
                <form className="login_form">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password"/>

                    <NavLink className="but-login" onClick={() =>  {setPreloader (true); dispatch(logIn(email, pass)); }} to="/profile">
                        Login
                    </NavLink>
                        <p className="p-not-reg">Not registered? </p>
                            <NavLink className="a-create-acc" to="/registration">Create an account</NavLink>
                </form>
            </div>

        </div>
    )
}

export default Login