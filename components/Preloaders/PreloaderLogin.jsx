import React, {useEffect} from "react";
import classes from './PreloaderLogin.less'
import heart from '../../icons/heart.png'

const PreloaderLogin = () => {


    return (
            <div className="preloader-heart">
                <img src={heart}/>
            </div>
    )
}

export default PreloaderLogin