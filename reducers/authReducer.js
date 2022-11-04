const SET_AUTH = 'SET_AUTH'
const SET_AUTH_FETCH = 'SET_AUTH_FETCH'
const SET_AUTH_ERROR = 'SET_AUTH_ERROR'
const SET_ACTIVE_ID = 'SET_ACTIVE_ID'
const SET_ALL = 'SET_ALL'
const SET_ME = 'SET_ME'
const SET_AUTH_LOADING = 'SET_AUTH_LOADING'



const defaultState = {
    isAuth: false,
    isFetching: false,
    errorMessage: null,
    activeUserId: null,
    gendersPool: ['Men', 'Woomen' , 'Gey', 'Lesbi'],
    all: null,
    myUser: null,
    authLoadind: null
}


export default  function authReducer(state= defaultState, action){
    switch (action.type) {

        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }

        case SET_AUTH_LOADING:
            return {
                ...state,
                authLoadind: action.payload
            }

        case SET_AUTH_FETCH:
            return {
                ...state,
                isFetching: action.payload
            }

        case SET_ACTIVE_ID:
            return {
                ...state,
                activeUserId: action.payload
            }

        case SET_AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }

        case SET_ALL:
            return {
                ...state,
                all: action.payload
            }

        case SET_ME:
            return {
                ...state,
                myUser: action.payload
            }




        default:
            return state
    }
}


export const setA = (bool) => ({type: SET_AUTH, payload: bool})

export const setAuthFetch = (bool) => ({type: SET_AUTH_FETCH, payload: bool})

export const setAuthError = (err) => ({type: SET_AUTH_ERROR, payload: err})

export const setMyId = (id) => ({type: SET_ACTIVE_ID, payload: id})

export const setAll = (us) => ({type: SET_ALL, payload: us})

export const setMe = (us) => ({type: SET_ME, payload: us})

export const setAuthLoading = (us) => ({type: SET_AUTH_LOADING, payload: us})

