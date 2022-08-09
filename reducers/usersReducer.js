const SET_USERS = 'SET_USERS'
const UNAUTHIFICATE = 'UNAUTHIFICATE'
const AUTHIFICATE = 'AUTHIFICATE'
const SET_SEARCHTERM = 'SET_SEARCHTERM'


const defaultState = {
    allUsers : [],
    activeUser: {
        aUser: [],
        friendsMass: [],
        isActive: true,
        jwt: null
    },
    searchTerm: null,
    filterUsers: [],
    isFetching: true
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
                activeUser: {
                    aUser: [],
                    friendsMass: [],
                    isActive: false,
                    jwt: null
                }
            }
        case AUTHIFICATE:

            return {
                ...state,
                activeUser: {
                    aUser: state.allUsers.filter(user => {
                        return (user._id === action.payload)
                    }),
                    friendsMass: {...state.allUsers},
                    isActive: true,
                    jwt: action.payload
                }
            }


        case SET_SEARCHTERM:
            const fmass = state.allUsers.filter(user => {
                return user.username.toLowerCase().includes(action.payload.toLowerCase())
            })
            return {
                ...state,
                searchTerm: action.payload,
                filterUsers: fmass
            }
        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})

export const unAuth = () => ({type: UNAUTHIFICATE})

export const onAuth = (jwt) => ({type: AUTHIFICATE, payload: jwt})

export const setSearch = (term) => ({type: SET_SEARCHTERM, payload: term})

