import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {setProfileInfo} from "../../actions/profileActions";


const Profile = (props) => {
    const dispatch = useDispatch()
    const myuserId = useSelector(state => state.auth.activeUserId)
    const nowUser = useSelector(state => state.profile.nowUser)

    useEffect(() => {
        dispatch(setProfileInfo(myuserId))
    }, [])

    return (
            <div>
                This is Profile
                Hello!!! {nowUser.name}
            </div>
    )
}

export default Profile