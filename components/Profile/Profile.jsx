import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch} from "react-redux";


const Profile = () => {

    const dispatch = useDispatch()


    return (
            <div>
                This is Profile
                {localStorage.getItem('id')}
            </div>
    )
}

export default Profile