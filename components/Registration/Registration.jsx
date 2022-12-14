import classes from './Registration.less'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {reg} from "../../actions/auth";
import {NavLink, useNavigate} from "react-router-dom";
import GenderSelect from "./GenderSelect";
import PreloaderLogin from "../Preloaders/PreloaderLogin";

const Registration = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const genders = useSelector(state => state.auth.gendersPool)
    const Error = useSelector(state => state.auth.errorMessage)
    const isFetch = useSelector(state => state.auth.isFetching)

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [gender, setGender] = useState(genders[0]);
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
                    <NavLink className={isFetch? "disabled-link but-login" : " but-login"} onClick={() =>  dispatch(reg(email, pass, gender, name, navigate))} to="">
                        {isFetch? <PreloaderLogin/> : "Registrate"}
                    </NavLink>

                    <p className="error_message">{Error}</p>
                </form>
            </div>
        </div>
    )
}

export default Registration