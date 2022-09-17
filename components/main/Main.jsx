import React, {useEffect} from "react";
import classes from './Main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../../actions/auth";
import List from "./List/List";

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
            <div>
                Yeaas
            </div>
    )
}

export default Main