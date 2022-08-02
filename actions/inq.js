import axios from "axios";
import {setUsers} from "../reducers/reposReducer";

export const getRepos = () => {
    return async (dispatch) => {
        const response = await axios.get("http://localhost:5000/users")
        dispatch(setUsers(response.data))
    }
}