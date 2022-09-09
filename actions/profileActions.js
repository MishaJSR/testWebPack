import axios from "axios";
import {setMyUser, setMyUserInfo, setProfileError} from "../reducers/profileReducer";

export const setProfileInfo = (id) => {
    return async (dispatch) => {
        await axios.get(`http://localhost:5000/users/${id}`)
            .then(response => {
                dispatch(setMyUser(response.data))
            })
            .catch(err => {
                dispatch(setProfileError(err.response.data.message))
            })
        await axios.get(`http://localhost:5000/info/${id}`)
            .then(response => {
                dispatch(setMyUserInfo(response.data))
            })
            .catch(err => {
                dispatch(setProfileError(err.response.data.message))
            })
    }
}
