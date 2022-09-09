import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate} from "react-router-dom";
import {setProfileInfo} from "../../actions/profileActions";


const Profile = () => {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.activeUserId)
    const myUser = useSelector(state => state.profile.myUser)

    useEffect(() => {
        dispatch(setProfileInfo(userId))
    })

    return (
            <div>
                This is Profile
                Hello!!! {myUser.name}
            </div>
    )
}

export default Profile