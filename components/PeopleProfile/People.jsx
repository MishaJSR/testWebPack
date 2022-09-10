import React, {useEffect, useState} from "react";
import classes from './People.less'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {setProfileInfo} from "../../actions/profileActions";


const People = () => {
    const dispatch = useDispatch()
    const nowUser = useSelector(state => state.profile.nowUser)
    const params = useParams()

    useEffect(() => {
        dispatch(setProfileInfo(params.id))
    })

    return (
            <div>
                This is Profile
                Hello!!! {nowUser.name}
            </div>
    )
}

export default People