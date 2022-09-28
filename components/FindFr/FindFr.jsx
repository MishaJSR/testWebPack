import React, {useEffect, useState} from "react";
import classes from './FindFr.less'
import {NavLink} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'

const FindFr = () => {

    return (
        <div></div>
    //         <div className="findFriend">
    //     <a>
    //         <img src={photo1}></img>
    //     </a>
    // </div>
    )
}

export default FindFr

