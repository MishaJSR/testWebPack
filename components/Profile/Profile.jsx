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
import like from  '../../icons/findlove.png'
import genequality from  '../../icons/gender-equality.png'
import equality from  '../../icons/equality.png'
import nochildren from  '../../icons/nochildren.png'
import FullScreen from "../FullScreen/FullScreen";
import {setFullScreen, setSliderPosition} from "../../reducers/profileReducer";
import {staticURL} from "../../actions/auth";


const Profile = () => {
    const dispatch = useDispatch()
    const nowUser = useSelector(state => state.profile.nowUser)
    const nowUserInfo = useSelector(state => state.profile.nowUserInfo)
    const {idUser} = useParams();
    const fullScreen = useSelector(state => state.profile.fullScreen)
    const photos = useSelector(state => state.profile.photo);
    const myUser = useSelector(state => state.auth.myUser);

    const listPhotos = myUser.userPhotos.map((e, index) =>
        <a key={index} className='postImg'><img src={staticURL + e.photo} onClick={() => {
            dispatch(setFullScreen(true));
            dispatch(setSliderPosition(index));
        }}></img>
            <div className="likes_container">
                <span className="likes_count">63</span>
                <a className='like_button'><img src={like}></img></a>
            </div>
        </a>);


    return (
            <div>
                {fullScreen && <FullScreen photo={photo3}/>}
                <div className="top_userInfo">
                    <div className='userAva'>
                        <a className='ava_a'>
                            <img src={"http://localhost:5000/" + myUser.ava}></img>
                            <p className="user_blur_name">
                                <p>{myUser.name}</p>
                                <p className='userStatus'>{"yee"}</p>
                            </p>
                        </a>
                    </div>
                    <div className='userInfo'>
                        <div className="user_statistic">
                            <div className="statistic-block">
                                <p className="statistic-label">Followers</p>
                                <p className="statistic-value">124</p>
                            </div>
                            <div className="statistic-block">
                                <p className="statistic-label">Photos</p>
                                <p className="statistic-value">17</p>
                            </div>
                            <div className="statistic-block">
                                <p className="statistic-label">Likes</p>
                                <p className="statistic-value">6533</p>
                            </div>
                        </div>
                        <div className='genderInfo'>
                            <div className='genderText'>
                                Preferences:
                            </div>
                            <div className='genderList'>
                                <a className='genderImg'><img src={equality}></img></a>
                                <a className='genderImg'><img src={genequality}></img></a>
                                <a className='genderImg'><img src={nochildren}></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='botInfo_container'>
                    <div className="botInfo">
                        {listPhotos}
                    </div>
                </div>
            </div>
    )
}

export default Profile