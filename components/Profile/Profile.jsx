import React, {useEffect} from "react";
import classes from './Profile.less'

const Profile = () => {


    return (
            <div>
                This is Profile
                {localStorage.getItem('token')}
            </div>
    )
}

export default Profile