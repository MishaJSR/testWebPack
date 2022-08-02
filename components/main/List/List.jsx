import React from "react";
import classes from './List.less'

const List = (props) => {
const user =  props.user

    return (
        <div>
            <div>{user.username}</div>
        </div>

    )
}

export default List