import React, {useEffect} from "react";
import classes from './Profile.less'
import {useDispatch} from "react-redux";
import {setMyUser} from "../../reducers/usersReducer";

const Profile = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(setMyUser(localStorage.getItem('id')))
    // }, []);

    return (
            <div>
                This is Profile
                {localStorage.getItem('id')}
            </div>
    )
}

export default Profile