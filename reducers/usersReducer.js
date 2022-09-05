const SET_USERS = 'SET_USERS'
const UNAUTHIFICATE = 'UNAUTHIFICATE'
const AUTHIFICATE = 'AUTHIFICATE'
const SET_SEARCHTERM = 'SET_SEARCHTERM'

const LOGIN = 'LOGIN'
const SET_AUTH = 'SET_AUTH'
const SET_MYUSER = 'SET_MYUSER'
const SET_FETCH = 'SET_FETCH'
const SET_ERROR = 'SET_ERROR'




const defaultState = {
    allUsers : [],
    activeUser: {
        aUser: [],
        friendsMass: [],
        isActive: true,
        jwt: null
    },
    isAuth: false,
    loginUser:[],
    myUser:[],
    searchTerm: null,
    filterUsers: [],
    isFetching: false,
    errorMessage: null,
    genderCh: ['Men', 'Women', 'Gey', 'Lesbi']
}


export default  function usersReducer(state= defaultState, action){
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case UNAUTHIFICATE:
            return {
                ...state,
                isAuth: false
            }

        case LOGIN:
            return {
                ...state,
                loginUser: action.payload

            }

        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload

            }

        case SET_MYUSER:
            return {
                ...state,
                myUser: action.payload
            }

        case SET_FETCH:
            return {
                ...state,
                isFetching: action.payload
            }

        case SET_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }




        case AUTHIFICATE:
         let myUser = state.allUsers.filter(user => {
                 return (user._id === action.payload)
             });
         let frList = [];
         let frMass = []
         myUser[0].friends.map(el => frList.push(el.id_friend))
            frList.map(el => {
                state.allUsers.map(user => {
                    if (user._id === el) frMass.push(user)
                });
            })
            return {
                ...state,
                activeUser: {
                    aUser: [...myUser],
                    friendsMass: [...frMass],
                    isActive: true,
                    jwt: action.payload
                }
            }


        case SET_SEARCHTERM:
            if (action.payload === '') {
                return {
                    ...state,
                    searchTerm: action.payload,
                    filterUsers: []
                }
            } else {
                const fmass = state.allUsers.filter(user => {
                    return user.username.toLowerCase().includes(action.payload.toLowerCase())
                })
                return {
                    ...state,
                    searchTerm: action.payload,
                    filterUsers: fmass
                }
            }


        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})



export const onAuth = (jwt) => ({type: AUTHIFICATE, payload: jwt})

export const setSearch = (term) => ({type: SET_SEARCHTERM, payload: term})


export const login = (term) => ({type: LOGIN, payload: term})

export const setA = (bool) => ({type: SET_AUTH, payload: bool})

export const unAuth = () => ({type: UNAUTHIFICATE})

export const setMyUser = (user) => ({type: SET_MYUSER, payload: user})

export const setFetch = (bool) => ({type: SET_FETCH, payload: bool})

export const setError = (err) => ({type: SET_ERROR, payload: err})