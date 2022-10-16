import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from './Messager.less'
import {NavLink, useParams} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {getChats, getChatsById, getImage, getRepos, pushMess} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'
import backbutton from "../../icons/back-button.png";
import message_send_icon from  '../../icons/send.png'
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import MessageList from "./MessageList/MessageList";
import {setMessageLoading} from "../../reducers/messageReducer";



const Messager = () => {
    const dispatch = useDispatch()
    const nameSelected = useSelector(state => state.message.nameSelected);
    const activeUser = useSelector(state => state.auth.activeUserId)
    const nowChat = useSelector(state => state.message.nowChat)
    const messageLoading = useSelector(state => state.message.messageLoading)
    const isSecond = useSelector(state => state.message.isSecond)
    const scrollRef = useRef(null);
    const textMessRef = useRef(null);
    const { idChat } = useParams();
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        scrollRef.current.scrollIntoView({block: "end", inline: "nearest"});
    }, []);

    useEffect(() => {
        dispatch(getChatsById(idChat, activeUser, nowChat));
            setTimeout(() => {
                setCount(count + 1);
            }, 4000);
    }, [count])

    return ((!messageLoading && nowChat)?
        <>
            <div ref={scrollRef} className="messageListWrapper">
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
                <textarea ref={textMessRef} type="text" className="text_edit"/>
                <button onClick={() => {
                    dispatch(pushMess(nowChat[0].id, activeUser, textMessRef.current.value));
                    // dispatch(getChatsById(idChat, activeUser));
                }} href="" className="send_button">
                    <img src={message_send_icon} alt=""/>
                </button>
            </div>
        </>
            :
            <div ref={scrollRef}>
            <PreloaderLogin img={loaderImg}/>
            </div>
    )
}

export default Messager

