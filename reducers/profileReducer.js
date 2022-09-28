const SET_USERS = 'SET_USERS'
const SET_MY_USER = 'SET_MY_USER'
const SET_MY_USER_INFO = 'SET_MY_USER_INFO'
const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
const SET_FULL_SCREEN = 'SET_FULL_SCREEN'
const SET_SLIDER_ACTIVE = 'SET_SLIDER_ACTIVE'
const SET_SLIDER_POSITION = 'SET_SLIDER_POSITION'

import photo1 from  '../icons/7photo.jpg'
import photo2 from  '../icons/8photo.jpg'
import photo3 from  '../icons/9photo.jpg'
import photo4 from  '../icons/10photo.jpg'
import photo6 from  '../icons/12photo.jpg'

const defaultState = {
    allUsers : [],
    nowUser:[],
    nowUserInfo:[],
    errorMessage: null,
    fullScreen: null,
    photo: [photo1, photo2, photo3, photo4, photo6],
    sliderPosition: 0
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
                nowUser: action.payload
            }

        case SET_MY_USER_INFO:
            return {
                ...state,
                nowUserInfo: action.payload
            }
        case SET_PROFILE_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        case SET_FULL_SCREEN:
            return {
                ...state,
                fullScreen: action.payload
            }
        case SET_SLIDER_ACTIVE:
            if (action.payload < 0) return {
                ...state,
                sliderPosition: state.photo.length - 1
            };
            if (action.payload >= state.photo.length) return {
                ...state,
                sliderPosition: 0
            }; else
            return {
                ...state,
                sliderPosition: action.payload
            }

        case SET_SLIDER_POSITION:
            return {
                ...state,
                sliderPosition: action.payload
            }


        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})
export const setMyUser = (us) => ({type: SET_MY_USER, payload: us})
export const setMyUserInfo = (us) => ({type: SET_MY_USER_INFO, payload: us})
export const setProfileError = (err) => ({type: SET_PROFILE_ERROR, payload: err})
export const setFullScreen = (bool) => ({type: SET_FULL_SCREEN, payload: bool})
export const setSliderActive = (num) => ({type: SET_SLIDER_ACTIVE, payload: num})
export const setSliderPosition = (num) => ({type: SET_SLIDER_POSITION, payload: num})