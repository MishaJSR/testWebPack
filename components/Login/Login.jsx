import React, {useEffect, useState} from "react";
import classes from './Login.less'
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../actions/auth";
import { NavLink, useNavigate} from "react-router-dom";
import PreloaderLogin from "../Preloaders/PreloaderLogin";

const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const isFetch = useSelector(state => state.auth.isFetching)
    const Error = useSelector(state => state.auth.errorMessage)

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className="login_page">
            <div className="form">
                <form className="login_form">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password"/>

                    <NavLink  className={isFetch? "disabled-link but-login" : " but-login"} onClick={() =>  dispatch(logIn(email, pass, navigate))} to="">
                        {isFetch? <PreloaderLogin/> : "Login"}
                    </NavLink>
                        <p className="p-not-reg">Not registered? </p>
                            <NavLink className="a-create-acc" onClick={() => dispatch(setError(false))} to="/registration">Create an account</NavLink>
                    <p className="error_message">{Error}</p>
                </form>
            </div>

        </div>
    )
}

export default Login