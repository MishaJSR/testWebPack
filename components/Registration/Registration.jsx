import classes from './Registration.less'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logIn, reg} from "../../actions/inq";
import {NavLink, useNavigate} from "react-router-dom";
import GenderSelect from "./GenderSelect";

const Registration = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const genders = useSelector(state => state.users.genderCh)
    const Error = useSelector(state => state.users.errorMessage)

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
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                    <select value={gender} onChange={(event) => setGender(event.target.value)}>
                        <GenderSelect genderMass={genders}/>
                    </select>
                    <NavLink className="but-login" onClick={() =>  dispatch(reg(email, pass, gender, name, navigate))} to={""}>Registrate</NavLink>
                    <p className="error_message">{Error}</p>
                </form>
            </div>
        </div>
    )
}

export default Registration