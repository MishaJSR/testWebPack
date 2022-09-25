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
import {setFullScreen} from "../../reducers/profileReducer";


const Profile = () => {
    const dispatch = useDispatch()
    const nowUser = useSelector(state => state.profile.nowUser)
    const nowUserInfo = useSelector(state => state.profile.nowUserInfo)
    const {idUser} = useParams();
    const fullScreen = useSelector(state => state.profile.fullScreen)

    useEffect(() => {
        dispatch(setProfileInfo(idUser))
    }, [])

    return (
            <div>
                {fullScreen && <FullScreen photo={photo3}/>}
                <div className="top_userInfo">
                    <div className='userAva'>
                        <a className='ava_a'>
                            <img src={photo1}></img>
                            <p className="user_blur_name">
                                <p>Misha</p>
                                <p className='userStatus'>{nowUserInfo.status}</p>
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
                        <a className='postImg'><img src={photo2}></img>
                            <div className="likes_container">
                                <span className="likes_count">12</span>
                                <a className='like_button'><img src={like}></img></a>
                            </div>
                        </a>
                        <a className='postImg'><img src={photo3} onClick={() => dispatch(setFullScreen(true))}></img>
                            <div className="likes_container">
                                <span className="likes_count">63</span>
                                <a className='like_button'><img src={like}></img></a>
                            </div></a>
                        <a className='postImg'><img src={photo4}></img>
                            <div className="likes_container">
                                <span className="likes_count">6223</span>
                                <a className='like_button'><img src={like}></img></a>
                            </div></a>
                        <a className='postImg'><img src={photo5}></img>
                            <div className="likes_container">
                                <span className="likes_count">853</span>
                                <a className='like_button'><img src={like}></img></a>
                            </div></a>
                        <a className='postImg'><img src={photo6}></img>
                            <div className="likes_container">
                                <span className="likes_count">3461</span>
                                <a className='like_button'><img src={like}></img></a>
                            </div></a>
                        <a className='postImg'><img src={photo1}></img>
                            <div className="likes_container">
                                <span className="likes_count">7</span>
                                <a className='like_button'><img src={like}></img></a>
                            </div></a>
                    </div>

                </div>
            </div>
    )
}

export default Profile