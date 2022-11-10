import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from './Messager.less'
import {NavLink, useParams} from "react-router-dom";
import {setFullScreen, setSearch, setSliderActive} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    checkNewMessage,
    getChats,
    getChatsById, getChatsUnread,
    getImage,
    getMiliSeconds,
    getRepos,
    pushMess, pushMessImg
} from "../../actions/auth";
import icon_upload from  '../../icons/icon-upload.png'
import backbutton from "../../icons/back-button.png";
import message_send_icon from  '../../icons/send.png'
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import MessageList from "./MessageList/MessageList";
import {pushLastMessChats, setFiles, setMessageLoading} from "../../reducers/messageReducer";
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
    const filesImg = useSelector(state => state.message.files)
    const utc = useSelector(state => state.message.utc);
    const scrollRef = useRef(null);
    const textMessRef = useRef(null);
    const { idChat } = useParams();
    const [count, setCount] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const [images, setImages] = useState();

    const executeScroll = () => scrollRef.current.scrollIntoView({block: "end", inline: "nearest"});

    useEffect(() => {
        if (lastID == idChat) {
            dispatch(checkNewMessage(idChat, nowChat, activeUser));
            dispatch(getChatsUnread(idChat, activeUser));
        }
        else {
            dispatch(setMessageLoading(true));
            dispatch(getChatsUnread(idChat, activeUser));
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
                <div ref={scrollRef} className="message_text_container">
                    {nowChat[0].messages.map((e, index) => {
                            try {
                                let flag;
                                if (localStorage.getItem('dateMess') !== e.createdAt.slice(4,10)) {
                                    localStorage.setItem('dateMess', e.createdAt.slice(4,10));
                                    flag = true;
                                } else flag = false;
                                return <MessageList isDate={flag} utc={utc} e={e} id={activeUser} index={index}/>
                            } catch (err) {
                                console.log("error")
                                // return <MessageList isDate={false} utc={utc} e={e} id={activeUser} index={index}/>
                            }
                        }
                        )}
                </div>
                <div className="fixed_test_edit">
                    <textarea ref={textMessRef} type="text" className="text_edit"/>
                    <div className="activity_upload">
                        <input className="custom-file-input" type="file" multiple accept="image/*" id="file-upload" onChange={(e) => dispatch(setFiles(e.target.files[0]))}/>

                    </div>


                    <button onClick={() => {
                        const data = new FormData();
                        data.append('id_List', nowChat[0].id);
                        data.append('id_Adder', activeUser);
                        data.append('text', textMessRef.current.value);
                        data.append('photo_mess', filesImg);
                        dispatch(pushMessImg(data))
                        // dispatch(pushMess(nowChat[0].id, activeUser, ));
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

