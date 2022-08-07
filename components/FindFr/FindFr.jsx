import React, {useEffect} from "react";
import classes from './FindFr.less'
import {NavLink} from "react-router-dom";
import {unAuth} from "../../reducers/usersReducer";

const FindFr = () => {



    return (
        <div className="container">
            <div className="row">
                <div className="col-10 center">
                    <input type="text" name="firstname" id="firstname" placeholder="Alaxander"/>
                </div>

            </div>
        </div>
    )
}

export default FindFr