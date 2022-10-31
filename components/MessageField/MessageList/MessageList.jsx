import React, {useEffect, useState} from "react";
import classes from './MessageList.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../../reducers/profileReducer";
import crest2 from '../../../icons/crest2.png'
import {checkNewMessage, getChatsById, getImage, getMiliSeconds} from "../../../actions/auth";
import {isDisplayData, setDateMessage, setMessageLoading} from "../../../reducers/messageReducer";

const MessageList = ({isDate, utc, e, id, index}) => {
    const dispatch = useDispatch();
    const mcs = Date.parse(e.createdAt)
    const a = new Date(mcs+utc+120000).toString();

    const displayData = useSelector(state => state.message.isDisplayData);
    console.log(a.slice(4,10))

    // useEffect(() => {
    //     if ((a.slice(4,10) != dateMessage)){
    //         dispatch(setDateMessage(a.slice(4,10)));
    //         dispatch(isDisplayData(true));
    //     } else dispatch(isDisplayData(false))
    // }, [])


    return (
        <>
            <span className={isDate? 'mess_data_center': 'data_none'}>{a.slice(4,10)}</span>
            <span key={index} className={(e.id_Adder === id)? 'mess_textBlock_reverse message_size' : 'mess_textBlock message_size hisMessage'}>
            {e.text}
                <span className={(e.id_Adder === id)? 'mess_time_reverse' : 'mess_time'}>{a.slice(16,18) }{a.slice(18,21)}</span>

        </span>
        </>
    )

}

export default MessageList

//