import React, {useEffect, useState} from "react";
import classes from './FindFr.less'
import {NavLink} from "react-router-dom";
import {setSearch} from "../../reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import List from "../main/List/List";
import {getRepos} from "../../actions/auth";

const FindFr = () => {

    return (
        <div className="cont pt-vh2">

        </div>
    )
}

export default FindFr

// <div className="row">
// const dispatch = useDispatch()
//
// const filterUsers = useSelector(state => state.users.filterUsers)
//
// const friendsMass = useSelector(state => state.users.activeUser.friendsMass)
//
//
// useEffect(() => {
//     dispatch(getRepos());
// }, [])
//     <div className="col-12 center pb-vh2">
//     <input onChange={(e) => dispatch(setSearch(e.target.value))} className="text-field__input" type="text" name="login" id="login"  placeholder="Search Friend"/>
//     </div>
// {(filterUsers.length === 0) ?
//
//     <div className="col-12 center">
//         {friendsMass.map((el) => <List user={el}/>)}
//     </div>
//     :
//     <div className="col-12 center">
//         {filterUsers.map((el) => <List user={el}/>)}
//     </div>
// }
//
// </div>