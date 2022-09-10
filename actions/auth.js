import axios from "axios";
import { setUsers} from "../reducers/profileReducer";
import React from "react";
import {setA, setAuthError, setAuthFetch, setMyId} from "../reducers/authReducer";

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


