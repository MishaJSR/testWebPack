import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from './Messager.less'
import {NavLink, useParams} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    checkNewMessage,
    getChats,
    getChatsById,
    getImage,
    getMiliSeconds,
    getRepos,
    pushMess
} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'
import backbutton from "../../icons/back-button.png";
import message_send_icon from  '../../icons/send.png'
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import MessageList from "./MessageList/MessageList";
import {pushLastMessChats, setMessageLoading} from "../../reducers/messageReducer";
import nullUser from "../../icons/user.png";



const Messager = () => {
    const dispatch = useDispatch()
    const dateMessage = useSelector(state => state.message.dateMessage);
    const nameSelected = useSelector(state => state.message.nameSelected);
    const activeUser = useSelector(state => state.auth.activeUserId)
    const nowChat = useSelector(state => state.message.nowChat)
    const messageLoading = useSelector(state => state.message.messageLoading)
    const lastID = useSelector(state => state.message.firstLoadingID)
    const isSecond = useSelector(state => state.message.isSecond)
    const utc = useSelector(state => state.message.utc);
    const scrollRef = useRef(null);
    const textMessRef = useRef(null);
    const { idChat } = useParams();
    const [count, setCount] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);

    const executeScroll = () => scrollRef.current.scrollIntoView({block: "end", inline: "nearest"});



    useEffect(() => {
        if (!utc) dispatch(getMiliSeconds());

        if (lastID == idChat) {
            dispatch(checkNewMessage(idChat, nowChat, activeUser));

        }
        else {
            dispatch(setMessageLoading(true));
            dispatch(getChatsById(idChat, activeUser));
        }
            setTimeout(() => {
                setCount(count + 1);
            }, 4000);

    }, [count])


    useLayoutEffect(() => {
        executeScroll();
        setTimeout(() => {
            setScrollCount(count + 1);
        }, 100);
    }, [nowChat, messageLoading])

    return ((!messageLoading && nowChat)?
        <>
            <div className="messageListWrapper">
                <div className="message_top_name">
                    {nameSelected}
                    <NavLink to={"/messages"}>
                        <img className="icon_back_messager"  src={backbutton} alt=""/>
                    </NavLink>
                    <NavLink to={"/messages"}>
                        <img className="ava_messager" src={(isSecond)?
                          (!nowChat[0].twoID.ava)? nullUser : getImage(nowChat[0].twoID.ava) :
                            (!nowChat[0].oneID.ava)? nullUser : getImage(nowChat[0].oneID.ava)} alt=""/>
                    </NavLink>
                    <NavLink to={"/messages"}>
                        <span className="nameMessager">{isSecond? nowChat[0].twoID.name : nowChat[0].oneID.name}</span>

                    </NavLink>
                </div>
                <div
                    ref={scrollRef}
                    style={
                    (nowChat[0].fontsMessage === [])? {}
                        : {backgroundImage: `url(${"http://localhost:5000/" + nowChat[0].fontsMessage[0].photo_font})`}}
                     className="message_text_container">
                    {nowChat[0].messages.map((e, index) => {
                        let flag;
                        if (localStorage.getItem('dateMess') !== e.createdAt.slice(4,10)) {
                            localStorage.setItem('dateMess', e.createdAt.slice(4,10));
                            flag = true;
                            console.log(flag)
                        } else flag = false;
                           return <MessageList isDate={flag} utc={utc} e={e} id={activeUser} index={index}/>
                    }
                        )}
                </div>
                <div className="fixed_test_edit">
                    <textarea ref={textMessRef} type="text" className="text_edit"/>
                    <button onClick={() => {
                        dispatch(pushMess(nowChat[0].id, activeUser, textMessRef.current.value));
                        // dispatch(setMessageLoading(true));
                        textMessRef.current.value = "";
                    }} href="" className="send_button">
                        <img src={message_send_icon} alt=""/>
                    </button>
                </div>
            </div>
        </>
            :
            <>
            <PreloaderLogin img={loaderImg}/>
                <div ref={scrollRef}></div>
            </>
    )
}

export default Messager

