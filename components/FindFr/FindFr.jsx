import React, {useEffect, useState} from "react";
import classes from './FindFr.less'
import {NavLink} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'


const FindFr = () => {
    const dispatch = useDispatch()
    const fullScreen = useSelector(state => state.profile.fullScreen);
    const sliderPosition = useSelector(state => state.profile.sliderPosition);
    const photos = useSelector(state => state.profile.photo);

    return (
            <a onDoubleClick={() => dispatch(setSliderActive(sliderPosition - 1))} className="findFriend">
                    <img src={photos[sliderPosition]}></img>
            </a>
    )
}

export default FindFr

