import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";


const Profile = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const clicker = (e) => {
        e.preventDefault();
        navigate("/messages");
    }
    return (
            <div>
                This is Profile
                {localStorage.getItem('id')}
                <NavLink to={""} onClick={(e) => clicker(e)}>ccc</NavLink>
            </div>
    )
}

export default Profile