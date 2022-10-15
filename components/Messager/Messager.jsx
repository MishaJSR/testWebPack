import React, {useEffect} from "react";
import classes from './Messager.less'
import {useDispatch, useSelector} from "react-redux";
import searchicon from  '../../icons/search.png'
import backbutton from  '../../icons/back-button.png'
import {NavLink, Link, useParams, useNavigate} from "react-router-dom";
import {findNameMessageSlected} from "../../reducers/messageReducer";
import {checkAuth, getChats, setAllUsers} from "../../actions/auth";
import loaderImg from "../../icons/loading_app.png";
import PreloaderLogin from "../Preloaders/PreloaderLogin";
import MessageList from "../MessageList/MessageList";

const Messager = (props) => {
    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.auth.activeUserId)
    const messageFriends = useSelector(state => state.message.friendsMass)
    const myUser = useSelector(state => state.auth.myUser);
    const chats = useSelector(state => state.message.chats)
    const navigate = useNavigate();



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
            {chats.map((e, index) => <MessageList e={e} id={activeUser} navigate={navigate} index={index}/>)}
        </div>
        </div>
            :
            <PreloaderLogin img={loaderImg}/>
    )
}

export default Messager