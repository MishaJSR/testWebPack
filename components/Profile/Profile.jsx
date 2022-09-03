import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";


const Profile = () => {

    const dispatch = useDispatch()


    return (
            <div>
                This is Profile
                Hello!!!
                {localStorage.getItem('id')}
            </div>
    )
}

export default Profile