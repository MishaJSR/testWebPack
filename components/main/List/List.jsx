import React from "react";
import classes from './List.less'

const List = (props) => {
const user =  props.user

    return (
        <div className="row mb-vh2 card-shadow">
                <img className="img-ava" src={user.avaImg} alt=""/>
            <div className="col-11 col-md-10 col-sm-9 pl-vw3">
                <div className="name-block">{user.username} <span>{user.surname}</span></div>
            </div>
        </div>


    )
}

export default List