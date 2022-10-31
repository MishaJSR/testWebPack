import axios from "axios";
import React from "react";
import {isEqual} from "lodash";
import {setA, setAll, setAuthError, setAuthFetch, setMe, setMyId} from "../reducers/authReducer";
import {
    pushMessage,
    setChats,
    setFirstLoadingID, setIsRender, setLoadingChat,
    setMessageLoading,
    setNowChats, setScrollBot, setUTC
} from "../reducers/messageReducer";


export const staticURL = "http://localhost:5000/"

export const getRepos = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/users")
        dispatch(setUsers(response.data))
    }
}

export const logIn = (email, password, navigate) => {
    return async (dispatch) => {
        dispatch(setAuthFetch(true))
        await axios.post("http://localhost:5000/auth/login", {email: email, password: password})
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('dateMess', "")
                dispatch(setMyId(response.data.id))
                dispatch(setA(true));
                dispatch(getMiliSeconds());
                dispatch(setAuthError(false))
                navigate(`/profile/${response.data.id}`)
            })
            .catch(err => {
                dispatch(setAuthError(err.response.data.message))
            })
            .finally(() =>  dispatch(setAuthFetch(false))
            )
    }
}



export const reg = (email, password, gender, name, navigate) => {
    return async (dispatch) => {
        dispatch(setAuthFetch(true))
        await axios.post("http://localhost:5000/auth/registration", {email: email, password: password, gender: gender, name: name})
            .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('dateMess', "")
                dispatch(setMyId(response.data.id))
                dispatch(setA(true));
                dispatch(getMiliSeconds());
                dispatch(setAuthError(false))
                navigate(`/profile/${response.data.id}`)
            })
            .catch(err => {
                dispatch(setAuthError(err.response.data.message))
            })
            .finally(() =>  dispatch(setAuthFetch(false))
            )
    }
}


export const checkAuth = () => {
    return async (dispatch) => {
        const tok = localStorage.getItem('token');
        await axios.get(`http://localhost:5000/auth/check/${tok}`)
            .then(response => {
                dispatch(setA(true));
                dispatch(setMyId(response.data.id))
            })
            .catch(err => {
                dispatch(setA(false));
            })
    }
}

export const setAllUsers = (id) => {
    return async (dispatch) => {
        await axios.get(`http://localhost:5000/users`)
            .then(response => {
                dispatch(setAll(response.data));
            })
            .catch(err => {
                console.log("error")
            })
        await axios.get(`http://localhost:5000/users/${id}`)
            .then(response => {
                dispatch(setMe(response.data))
            })
            .catch(err => {
                console.log("error")
            })
    }
}

export const getChats = (id) => {
    return async (dispatch) => {
        await axios.get(`http://localhost:5000/chats/user/${id}`)
            .then(response => {
                dispatch(setChats(response.data));
                dispatch(setLoadingChat(false))
            })
            .catch(err => {
                console.log("error")
            })
    }
}

export const checkChats = (chat, activeID) => {
    return async (dispatch) => {
        await axios.get(`http://localhost:5000/chats/user/${activeID}`)
            .then(response => {
                if (_.isEqual(response.data, chat)) {
                } else
                dispatch(setChats(response.data));
                dispatch(setLoadingChat(false))
            })
            .catch(err => {
                console.log("error")
            })
    }
}

export const getChatsById = (idChat, activeID) => {
    return async (dispatch) => {
            await axios.get(`http://localhost:5000/chats/${idChat}`)
                .then(response => {
                        if (response.data[0].one_id === activeID) dispatch(setNowChats(response.data, true));
                        else dispatch(setNowChats(response.data, false));
                        dispatch(setFirstLoadingID(idChat));
                })
                .catch(err => {
                    console.log("error")
                })
                .finally(() => {
                    dispatch(setMessageLoading(false));

                })
        }
}

export const checkNewMessage = (idChat, nowChat, activeID) => {
    return async (dispatch) => {
            await axios.get(`http://localhost:5000/chats/${idChat}`)
                .then(response => {
                    if (_.isEqual(response.data, nowChat)) dispatch(setMessageLoading(false));
                    else {
                        if (response.data[0].one_id === activeID) dispatch(setNowChats(response.data, true));
                        else dispatch(setNowChats(response.data, false));
                        dispatch(setMessageLoading(false));
                    }
                })
                .catch(err => {
                    console.log("error")
                })
    }
}

export const getImage = (str) => {
    const newStr = staticURL + str
    return newStr
}

export const pushMess = (listID, idAdder, text ) => {
    return async (dispatch) => {
        await axios.post("http://localhost:5000/messages", {id_List: listID, id_Adder: idAdder, text: text})
            .then(response => {
                dispatch(pushMessage(99999, listID, idAdder, text))
            })
            .catch(err => {
                dispatch(setAuthError(err.response.data.message))
            })
    }
}

export const getMiliSeconds = () => {
    return (dispatch) => {
        const ms = new Date().getTimezoneOffset()*600;
        dispatch(setUTC(ms))
    }
}

