import React, {useEffect} from "react";
import classes from './FullScreen.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../reducers/profileReducer";
import crest2 from '../../icons/crest2.png'

const FullScreen = ({photo}) => {
    const dispatch = useDispatch()
    const fullScreen = useSelector(state => state.profile.fullScreen);
    const sliderPosition = useSelector(state => state.profile.sliderPosition);
    const photos = useSelector(state => state.profile.photo);


    return (
        <a className="fullphoto">
                    <a>
                        <img src={photos[sliderPosition]}></img>
                    </a>
            <div className="slider_container" >
                <button className="prev" onClick={() => dispatch(setSliderActive(sliderPosition - 1))}>{"<"}</button>
                <button className="next" onClick={() => dispatch(setSliderActive(sliderPosition + 1))}>{">"}</button>
                <button className="exit" onClick={() => dispatch(setFullScreen(false))}>
                    x
                </button>
            </div>

        </a>

    )
}

export default FullScreen