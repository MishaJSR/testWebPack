import React, {useEffect} from "react";
import classes from './Main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/inq";
import List from "./List/List";

const Main = () => {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.allUsers)

useEffect(() => {
    dispatch(getRepos())
}, [])


    return (
            <div>
                Yeaas
                {users.map((el) => <List user={el}/>)}
            </div>
    )
}

export default Main