import React, {useEffect, useState} from "react";
import classes from './FindFr.less'
import {NavLink} from "react-router-dom";
import {setSearch, unAuth} from "../../reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import List from "../main/List/List";
import {getRepos} from "../../actions/inq";

const FindFr = () => {

    const dispatch = useDispatch()

    const filterUsers = useSelector(state => state.users.filterUsers)


    useEffect(() => {
        dispatch(getRepos());
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 center">
                    <input onChange={(e) => dispatch(setSearch(e.target.value))} className="text-field__input" type="text" name="login" id="login"  placeholder="Search Friend"/>
                </div>
                {(filterUsers.length === 0) ?
                    <div>
                        Пустой
                    </div>
                     :
                        <div className="col-10 center">
                            {filterUsers.map((el) => <List user={el}/>)}
                        </div>
                }

            </div>
        </div>
    )
}

export default FindFr