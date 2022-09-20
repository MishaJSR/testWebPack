import React, {useEffect} from "react";
import classes from './Messager.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/auth";
import photo1 from  '../../icons/11photo.jpg'
import {useLocation, useMatch} from "react-router";
import {useParams} from "react-router-dom";

const Messager = (props) => {
    const dispatch = useDispatch();

    return (
        <div className='messageInfo'>
                <a className='messBlock'>
                    <a className='mess_ava '>
                        <img className="round" src={photo1}></img>
                    </a>
                    <div className='mess_userInfo'>
                        <div className='mess_textInfo'>
                            <div className='mess_userName'>
                                Василий
                            </div>
                            <div className='mess_LastMessage'>
                                Привет
                            </div>
                        </div>
                    </div>
                </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>
            <a className='messBlock'>
                <a className='mess_ava '>
                    <img className="round" src={photo1}></img>
                </a>
                <div className='mess_userInfo'>
                    <div className='mess_textInfo'>
                        <div className='mess_userName'>
                            Василий
                        </div>
                        <div className='mess_LastMessage'>
                            Привет
                        </div>
                    </div>
                </div>
            </a>


        </div>
    )
}

export default Messager