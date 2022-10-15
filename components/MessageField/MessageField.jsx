import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from './MessageField.less'
import {NavLink, useParams} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getChats, getChatsById, getImage, getRepos} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'
import backbutton from "../../icons/back-button.png";
import message_send_icon from  '../../icons/send.png'
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import MessageList from "../MessageList/MessageList";
import {setMessageLoading} from "../../reducers/messageReducer";


const MessageField = () => {
    const dispatch = useDispatch()
    const nameSelected = useSelector(state => state.message.nameSelected);
    const activeUser = useSelector(state => state.auth.activeUserId)
    const nowChat = useSelector(state => state.message.nowChat)
    const messageLoading = useSelector(state => state.message.messageLoading)
    const isSecond = useSelector(state => state.message.isSecond)
    const h2ref = useRef(null);
    const { idChat } = useParams();

    useLayoutEffect(() => {
        h2ref.current.scrollIntoView({block: "end", inline: "nearest"});
    }, []);

    useEffect(() => {
            dispatch(setMessageLoading(true))
            dispatch(getChatsById(idChat, activeUser));
    }, [])

    return ((!messageLoading && nowChat)?
        <>
            <div ref={h2ref} className="messageListWrapper">
                <div className="message_top_name">
                    {nameSelected}
                    <NavLink to={"/messages"}>
                        <img className="icon_back_messager"  src={backbutton} alt=""/>
                    </NavLink>
                    <NavLink to={"/messages"}>
                        <img className="ava_messager" src={isSecond? getImage(nowChat[0].twoID.ava): getImage(nowChat[0].oneID.ava)} alt=""/>
                    </NavLink>
                </div>
                <div className="message_text_container">
                    {nowChat[0].messages.map((e, index) => <MessageList e={e} id={activeUser} index={index}/>)}
                </div>
            </div>
            <div className="fixed_test_edit">
                <textarea type="text" className="text_edit"/>
                <a href="" className="send_button">
                    <img src={message_send_icon} alt=""/>
                </a>
            </div>
        </>
            :
            <div ref={h2ref}>
            <PreloaderLogin img={loaderImg}/>
            </div>
    )
}

export default MessageField

