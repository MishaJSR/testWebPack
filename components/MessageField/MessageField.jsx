import React, {useEffect, useState} from "react";
import classes from './MessageField.less'
import {NavLink} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'
import backbutton from "../../icons/back-button.png";
import message_send_icon from  '../../icons/send.png'


const MessageField = () => {
    const dispatch = useDispatch()
    const nameSelected = useSelector(state => state.message.nameSelected);
    const photoSelected = useSelector(state => state.message.photoSelected);
    const messageUserList = useSelector(state => state.message.messageMass);
    const friendsMass = useSelector(state => state.message.friendsMass);
    const nowUser = useSelector(state => state.profile.nowUser)


    const messageItems = messageUserList.map((e, index) =>
        <div key={index} className={(nowUser.id === e.idAdder)? 'mess_textBlock_reverse message_size' : 'mess_textBlock message_size'}>
            {e.text}
        </div>
    );

    return (
        <>
            <div className="messageListWrapper">
                <div className="message_top_name">
                    {nameSelected}
                    <NavLink to={"/messages"}>
                        <img className="icon_back_messager"  src={backbutton} alt=""/>
                    </NavLink>
                    <NavLink to={"/messages"}>
                        <img className="ava_messager" src={photoSelected} alt=""/>
                    </NavLink>
                </div>
                <div className="message_text_container">
                    {messageItems}
                </div>
            </div>
            <div className="fixed_test_edit">
                <textarea type="text" className="text_edit"/>
                <a href="" className="send_button">
                    <img src={message_send_icon} alt=""/>
                </a>
            </div>
        </>
    )
}

export default MessageField

