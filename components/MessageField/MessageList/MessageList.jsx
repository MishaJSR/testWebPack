import React, {useEffect} from "react";
import classes from './MessageList.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../../reducers/profileReducer";
import crest2 from '../../../icons/crest2.png'
import {getImage} from "../../../actions/auth";

const MessageList = ({e, id, index}) => {


    return (
            <span key={index} className={(e.id_Adder === id)? 'mess_textBlock_reverse message_size' : 'mess_textBlock message_size hisMessage'}>
            {e.text}
                <span className={(e.id_Adder === id)? 'mess_time_reverse' : 'mess_time'}>{e.createdAt.slice(11,13)}:{e.createdAt.slice(14,16)}</span>
                <span className={(e.id_Adder === id)? 'month_time_reverse' : 'month_time'}>{e.createdAt.slice(11,13)}:{e.createdAt.slice(14,16)}</span>
        </span>
    )

}

export default MessageList