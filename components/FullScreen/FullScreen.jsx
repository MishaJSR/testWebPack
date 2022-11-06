import React, {useEffect} from "react";
import classes from './FullScreen.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../reducers/profileReducer";
import crest2 from '../../icons/crest2.png'
import {getImage} from "../../actions/auth";

const FullScreen = ({leng}) => {
    const dispatch = useDispatch()
    const sliderPosition = useSelector(state => state.profile.sliderPosition);
    const myUser = useSelector(state => state.auth.myUser);


    return (
        <a className="fullphoto">
                    <a>
                        <img src={getImage(myUser.userPhotos[sliderPosition].photo)}></img>
                    </a>
            <div className="slider_container" >
                <button className="prev" onClick={() => dispatch(setSliderActive(sliderPosition - 1, leng))}>{"<"}</button>
                <button className="next" onClick={() => dispatch(setSliderActive(sliderPosition + 1, leng))}>{">"}</button>
                <button className="exit" onClick={() => dispatch(setFullScreen(false))}>
                    x
                </button>
            </div>

        </a>

    )
}

export default FullScreen