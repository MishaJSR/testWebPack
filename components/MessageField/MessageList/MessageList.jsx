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
        </span>
    )

}

export default MessageList