import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {setProfileInfo} from "../../actions/profileActions";
import userimg from  '../../icons/user.png'
import photo1 from  '../../icons/11photo.jpg'
import photo2 from  '../../icons/8photo.jpg'
import photo3 from  '../../icons/9photo.jpg'
import photo4 from  '../../icons/10photo.jpg'
import photo5 from  '../../icons/7photo.jpg'
import photo6 from  '../../icons/12photo.jpg'


const Profile = () => {
    const dispatch = useDispatch()
    const nowUser = useSelector(state => state.profile.nowUser)
    const nowUserInfo = useSelector(state => state.profile.nowUserInfo)
    const {idUser} = useParams();

    useEffect(() => {
        dispatch(setProfileInfo(idUser))
    }, [])

    return (
            <div>
                <div className="top_userInfo">
                    <div className='userAva'>
                        <a className='ava_a'>
                            <img src={photo1}></img>
                            <p className="user_blur_name"> {nowUser.name}</p>
                        </a>
                    </div>
                    <div className='userInfo'>
                        <div className='textInfo'>
                            <div className='userStatus'>
                                {nowUserInfo.status}
                            </div>
                        </div>
                        <div className='genderInfo'>
                            <div className='genderText'>
                                Preferences:
                            </div>
                            <div className='genderList'>
                                <a className='genderImg'><img src={userimg}></img></a>
                                <a className='genderImg'><img src={userimg}></img></a>
                                <a className='genderImg'><img src={userimg}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='botInfo_container'>
                    <div className="botInfo">
                        <a className='postImg'><img src={photo2}></img></a>
                        <a className='postImg'><img src={photo3}></img></a>
                        <a className='postImg'><img src={photo4}></img></a>
                        <a className='postImg'><img src={photo5}></img></a>
                        <a className='postImg'><img src={photo6}></img></a>
                        <a className='postImg'><img src={photo1}></img></a>
                    </div>

                </div>
            </div>
    )
}

export default Profile