import React, {useEffect} from "react";
import classes from './MessageList.less'
import {useDispatch, useSelector} from "react-redux";
import {setFullScreen, setSliderActive} from "../../reducers/profileReducer";
import crest2 from '../../icons/crest2.png'
import {getImage} from "../../actions/auth";

const MessageList = ({e, id, navigate, index}) => {

    return ( (e.one_id === id)?
        <a onClick={() => {
            navigate(`/messages/${e.id}`)
        }} key={index} className='messBlock'>
            <a className='mess_ava '>
                <img className="round" src={getImage(e.twoID.ava)}></img>
            </a>
            <div className='mess_userInfo'>
                <div className='mess_textInfo'>
                    <div className='mess_userName'>
                        {e.twoID.name}
                    </div>
                    <div className='mess_LastMessage'>
                        {e.twoID.name}
                    </div>
                </div>
            </div>
        </a>
            :
            <a onClick={() => {
                navigate(`/messages/${e.id}`)
            }} key={index} className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={getImage(e.oneID.ava)}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            {e.oneID.name}
                        </div>
                        <div className='mess_LastMessage'>
                            {e.oneID.name}
                        </div>
                    </div>
                </div>
            </a>
    )

}

export default MessageList