import axios from "axios";
import {onAuth, setUsersFriends, setUsers} from "../reducers/usersReducer";

export const getRepos = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/users")
        dispatch(setUsers(response.data))
    }
}

export const setAuth = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/users")
        dispatch(setUsers(response.data))
        dispatch(onAuth("62c98d3952c7810524f0f5ba"))
    }
}

