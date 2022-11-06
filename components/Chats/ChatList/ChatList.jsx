import React, {useEffect, useState} from "react";
import classes from './ChatList.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../../reducers/profileReducer";
import crest2 from '../../../icons/crest2.png'
import nullUser from '../../../icons/user.png'
import {getImage} from "../../../actions/auth";
import axios from "axios";
import {setFirstLoadingID, setMessageLoading, setNowChats} from "../../../reducers/messageReducer";

const ChatList = ({e,idChat, id, navigate, index}) => {
    const [count, setCount] = useState(0);

    async function getUnread (idChat, id) {
        await axios.post(`http://localhost:5000/messages/unread`, {id_List: idChat, id_Adder: id})
            .then(response => {
                setCount(response.data)
            })
            .catch(err => {
                console.log("error")
            })
    }

    useEffect(() => {
        getUnread(idChat, id);
    })

    return ( (e.one_id === id)?
        <a onClick={() => {
            navigate(`/messages/${e.id}`)
        }} key={index} className='messBlock'>
            <a className='mess_ava '>
                <img className="round" src={(!e.twoID.ava)? nullUser : getImage(e.twoID.ava)}></img>
            </a>
            <div className='mess_userInfo'>
                <div className='mess_textInfo'>
                    <div className='mess_userName'>
                        {e.twoID.name}
                    </div>
                    <div className='mess_LastMessage'>
                        {(e.messages[0])? e.messages[0].text: null}
                    </div>
                    {(count !== 0) && <div className='unread'>
                        {count}
                    </div>}
                </div>
            </div>
        </a>
            :
            <a onClick={() => {
                navigate(`/messages/${e.id}`)
            }} key={index} className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={(!e.oneID.ava)? nullUser : getImage(e.oneID.ava)}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            {e.oneID.name}
                        </div>
                        <div className='mess_LastMessage'>
                            {(e.messages[0])? e.messages[0].text: null}
                        </div>
                        {(count !== 0) && <div className='unread'>
                            {count}
                        </div>}
                    </div>
                </div>
            </a>
    )

}

export default ChatList