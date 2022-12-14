import React, {useEffect, useState} from "react";
import classes from './MessageList.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../../reducers/profileReducer";
import crest2 from '../../../icons/crest2.png'
import {checkNewMessage, getChatsById, getImage, getMiliSeconds} from "../../../actions/auth";
import {isDisplayData, setDateMessage, setMessageLoading} from "../../../reducers/messageReducer";

const MessageList = ({isDate, utc, e, id, index}) => {

    const mcs = Date.parse(e.createdAt)
    const a = new Date(mcs+utc+15000).toString();


    return (
        <>
            {isDate && <span className={'mess_data_center'}>{a.slice(4,10)}</span>}
            <span key={index} className={(e.id_Adder === id)? 'mess_textBlock_reverse message_size' : 'mess_textBlock message_size hisMessage'}>
               {(e.photo_mess)? <img className="img_mess" src={getImage(e.photo_mess)} alt=""/> : null}
            <span className="text_left">{e.text}</span>
                <span className={(e.id_Adder === id)? 'mess_time_reverse' : 'mess_time'}>{a.slice(16,18) }{a.slice(18,21)}</span>


        </span>
        </>
    )

}

export default MessageList

//