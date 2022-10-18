import React, {useEffect, useLayoutEffect, useRef} from "react";
import classes from './Chats.less'
import {useDispatch, useSelector} from "react-redux";
import searchicon from  '../../icons/search.png'
import backbutton from  '../../icons/back-button.png'
import {NavLink, useNavigate} from "react-router-dom";
import {getChats} from "../../actions/auth";
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import ChatList from "./ChatList/ChatList";

const Chats = (props) => {
    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.auth.activeUserId)
    const chats = useSelector(state => state.message.chats)
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo(0,0)
    }, []);

    useEffect(() => {
        if (!chats) dispatch(getChats(activeUser))
    }, []);

    return ((chats)?
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