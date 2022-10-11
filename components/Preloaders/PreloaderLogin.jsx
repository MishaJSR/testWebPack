import React, {useEffect} from "react";
import classes from './PreloaderLogin.less'

const PreloaderLogin = ({img}) => {


    return (
        <div className="preloader-back">
            <div className="preloader-heart">
                <img src={img}/>
            </div>
        </div>
    )
}

export default PreloaderLogin