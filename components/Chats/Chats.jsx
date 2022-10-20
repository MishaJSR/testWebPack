import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from './Chats.less'
import {useDispatch, useSelector} from "react-redux";
import searchicon from  '../../icons/search.png'
import backbutton from  '../../icons/back-button.png'
import {NavLink, useNavigate} from "react-router-dom";
import {checkChats, getChats, getChatsById} from "../../actions/auth";
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import ChatList from "./ChatList/ChatList";
import {setLoadingChat, setMessageLoading} from "../../reducers/messageReducer";

const Chats = (props) => {
    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.auth.activeUserId)
    const chats = useSelector(state => state.message.chats)
    const chatLoading = useSelector(state => state.message.chatLoading)
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    }, []);

    useEffect(() => {
        if (!chats) {
            dispatch(setLoadingChat(true))
            dispatch(getChats(activeUser))
        } else {
            dispatch(setLoadingChat(false))
            dispatch(checkChats(chats, activeUser))
        }
            setTimeout(() => {
                setCount(count + 1);
            }, 4000);
    }, [count]);

    // useEffect(() => {
    //     if (lastID == idChat) dispatch(setMessageLoading(false));
    //     else dispatch(setMessageLoading(true));
    //     dispatch(getChatsById(idChat, activeUser, nowChat, idChat, lastID, ));
    //     setTimeout(() => {
    //         setCount(count + 1);
    //     }, 4000);
    // }, [count])

    return ((!chatLoading)?
        <div className="mess_area">
            <div className="message_top_nav">
                Messages
                <NavLink to={"/profile/" + activeUser}>
                <img src={backbutton} alt=""/>
                </NavLink>
            </div>
            <div className="message_search_area">
                <input placeholder="Search" type="text" />
                <img src={searchicon} alt=""/>
            </div>
        <div className='messageInfo'>
            {chats.map((e, index) => <ChatList e={e} id={activeUser} navigate={navigate} index={index}/>)}
        </div>
        </div>
            :
            <PreloaderLogin img={loaderImg}/>
    )
}

export default Chats