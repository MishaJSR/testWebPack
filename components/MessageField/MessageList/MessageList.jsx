import React, {useEffect} from "react";
import classes from './MessageList.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../../reducers/profileReducer";
import crest2 from '../../../icons/crest2.png'
import {checkNewMessage, getChatsById, getImage, getMiliSeconds} from "../../../actions/auth";
import {setMessageLoading} from "../../../reducers/messageReducer";

const MessageList = ({utc, e, id, index}) => {
    const mcs = Date.parse(e.createdAt)
    const a = new Date(mcs+utc+120000).toString()

    return (
            <span key={index} className={(e.id_Adder === id)? 'mess_textBlock_reverse message_size' : 'mess_textBlock message_size hisMessage'}>
            {e.text}
                <span className={(e.id_Adder === id)? 'mess_time_reverse' : 'mess_time'}>{a.slice(16,18) }{a.slice(18,21)}</span>
        </span>
    )

}

export default MessageList

//