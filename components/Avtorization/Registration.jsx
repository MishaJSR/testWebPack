import classes from './Registration.less'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logIn, reg} from "../../actions/inq";
import {NavLink} from "react-router-dom";

const Registration = () => {

    const dispatch = useDispatch()


    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");


    return (
        <div className="login_page">
            <div className="form">
                <form className="login_form">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password"/>
                    <input type="text" onChange={(e) => setGender(e.target.value)} placeholder="Gender"/>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                    <NavLink className="but-login" onClick={() =>  dispatch(reg(email, pass, gender, name))} to="/profile">Registrate</NavLink>

                </form>
            </div>
        </div>
    )
}

export default Registration