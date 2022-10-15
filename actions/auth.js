import axios from "axios";
import React from "react";
import {setA, setAll, setAuthError, setAuthFetch, setMe, setMyId} from "../reducers/authReducer";
import {setChats} from "../reducers/messageReducer";

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
                dispatch(setMyId(response.data.id))
                dispatch(setA(true));
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
                dispatch(setMyId(response.data.id))
                dispatch(setA(true));
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
        await axios.get(`http://localhost:5000/chats/${id}`)
            .then(response => {
                dispatch(setChats(response.data))
            })
            .catch(err => {
                console.log("error")
            })

    }
}

export const getChats = (id) => {
    return async (dispatch) => {
        await axios.get(`http://localhost:5000/chats/${id}`)
            .then(response => {
                dispatch(setChats(response.data))
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

