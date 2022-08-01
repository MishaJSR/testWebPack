import React from "react";
import classes from './App.less'
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";

const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)

    function clickCount () {
        dispatch(setCount(5))

    }

    return (
        <div className={classes}>
            <h2>React Project</h2>
            <button onClick={() => clickCount()}>Push</button>
            <h3>{count}</h3>
        </div>
    )
}

export default App