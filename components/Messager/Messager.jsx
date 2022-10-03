import React, {useEffect} from "react";
import classes from './Messager.less'
import {useDispatch, useSelector} from "react-redux";
import searchicon from  '../../icons/search.png'
import backbutton from  '../../icons/back-button.png'
import {NavLink, Link, useParams, useNavigate} from "react-router-dom";

const Messager = (props) => {
    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.auth.activeUserId)
    const messageFriends = useSelector(state => state.message.friendsMass)
    const navigate = useNavigate();


    const messageList = messageFriends.map((e, index) =>
        <a onClick={() => navigate(`/messages/${e.id}`)} key={index} className='messBlock'>
            <a className='mess_ava '>
                <img className="round" src={e.photo}></img>
            </a>
            <div className='mess_userInfo'>
                <div className='mess_textInfo'>
                    <div className='mess_userName'>
                        {e.name}
                    </div>
                    <div className='mess_LastMessage'>
                        {e.lastMess}
                    </div>
                </div>
            </div>
        </a>
    );

    return (
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
            {messageList}
        </div>
        </div>
    )
}

export default Messager