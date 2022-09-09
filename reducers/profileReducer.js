const SET_USERS = 'SET_USERS'
const SET_MY_USER = 'SET_MY_USER'
const SET_MY_USER_INFO = 'SET_MY_USER_INFO'
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'

const defaultState = {
    allUsers : [],
    myUser:[],
    myUserInfo:[],
    errorMessage: null
}


export default  function profileReducer(state= defaultState, action){
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                allUsers: action.payload
            }

        case SET_MY_USER:
            return {
                ...state,
                myUser: action.payload
            }

        case SET_MY_USER_INFO:
            return {
                ...state,
                myUserInfo: action.payload
            }
        case SET_PROFILE_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }


        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})
export const setMyUser = (us) => ({type: SET_MY_USER, payload: us})
export const setMyUserInfo = (us) => ({type: SET_MY_USER_INFO, payload: us})
export const setProfileError = (err) => ({type: SET_PROFILE_ERROR, payload: err})