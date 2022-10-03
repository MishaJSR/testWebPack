import React, {useEffect, useState} from "react";
import classes from './MessageField.less'
import {NavLink} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'
import backbutton from "../../icons/back-button.png";


const MessageField = () => {
    const dispatch = useDispatch()
    const nameSelected = useSelector(state => state.message.nameSelected);
    const messageUserList = useSelector(state => state.message.messageMass);
    const friendsMass = useSelector(state => state.message.friendsMass);
    const nowUser = useSelector(state => state.profile.nowUser)


    const messageItems = messageUserList.map((e, index) =>
        <div key={index} className={(nowUser.id === e.idAdder)? 'mess_textBlock_reverse message_size' : 'mess_textBlock message_size'}>
            {e.text}
        </div>
    );

    return (
            <div className="messageListWrapper">
                <div className="message_top_name">
                    {nameSelected}
                    <NavLink to={"/messages"}>
                        <img src={backbutton} alt=""/>
                    </NavLink>
                </div>
                <div className="message_text_container">
                    {messageItems}
                </div>
            </div>
    )
}

export default MessageField

