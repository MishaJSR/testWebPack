import axios from "axios";
import {onAuth, setA, setUsers, login, setMyUser, setFetch, setError} from "../reducers/usersReducer";
import React, {useEffect, useState} from "react";

export const getRepos = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/users")
        dispatch(setUsers(response.data))
    }
}

export const logIn = (email, password) => {
    return async (dispatch) => {
        dispatch(setFetch(true))
        await axios.post("http://localhost:5000/auth/login", {email: email, password: password})
            .then(response => {
                dispatch(login(response.data));
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                dispatch(setA(true));
                dispatch(setError(false))
            })
            .catch(err => {
                dispatch(setError(err.response.data.message))
            })
            .finally(() =>  dispatch(setFetch(false))
            )
    }
}


export const reg = (email, password, gender, name, e) => {
    e.preventDefault();
    return async (dispatch) => {
        dispatch(setFetch(true))
        await axios.post("http://localhost:5000/auth/registration", {email: email, password: password, gender: gender, name: name})
            .then(response => {
                dispatch(login(response.data));
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
                dispatch(setA(true));
                dispatch(setError(false))
            })
            .catch(err => {
                dispatch(setError(err.response.data.message))
            })
            .finally(() =>  dispatch(setFetch(false))
            )
    }
}


export const setAuth = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/users")
        dispatch(setUsers(response.data))
        dispatch(onAuth("62c98d3952c7810524f0f5ba"))
    }
}

