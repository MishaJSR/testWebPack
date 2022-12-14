import React, {useEffect, useState} from "react";
import classes from './Profile.less'
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import photo3 from  '../../icons/9photo.jpg'
import like from  '../../icons/findlove.png'
import genequality from  '../../icons/gender-equality.png'
import equality from  '../../icons/equality.png'
import nochildren from  '../../icons/nochildren.png'
import FullScreen from "../FullScreen/FullScreen";
import {setFullScreen, setSliderPosition} from "../../reducers/profileReducer";
import {getImage, staticURL} from "../../actions/auth";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import loaderImg from "../../icons/loading_app.png";

const Profile = () => {
    const dispatch = useDispatch()
    const nowUser = useSelector(state => state.profile.nowUser)
    const nowUserInfo = useSelector(state => state.profile.nowUserInfo)
    const {idUser} = useParams();
    const fullScreen = useSelector(state => state.profile.fullScreen)
    const myUser = useSelector(state => state.auth.myUser);

    const listPhotos = myUser.userPhotos.map((e, index) =>
        <a key={index} className='postImg'><img src={getImage(e.photo)} onClick={() => {
            dispatch(setFullScreen(true));
            dispatch(setSliderPosition(index));
        }}></img>
            <div className="likes_container">
                <span className="likes_count">63</span>
                <a className='like_button'><img src={like}></img></a>
            </div>
        </a>);


    return (myUser?
            <div>
                {fullScreen && <FullScreen leng={myUser.userPhotos.length}/>}
                <div className="top_userInfo">
                    <div className='userAva'>
                        <a className='ava_a'>
                            <img src={getImage(myUser.ava)}></img>
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
                                <p className="statistic-value">{myUser.userPhotos.length}</p>
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
            :
                <PreloaderLogin img={loaderImg}/>

    )
}

export default Profile