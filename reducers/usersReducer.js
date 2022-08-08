const SET_USERS = 'SET_USERS'
const UNAUTHIFICATE = 'UNAUTHIFICATE'
const AUTHIFICATE = 'AUTHIFICATE'
const SET_SEARCHTERM = 'SET_SEARCHTERM'


const defaultState = {
    allUsers : [],
    activeUser: {
        aUser: [],
        isActive: true
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
                    ...state.activeUser,
                    isActive: false
                }
            }
        case AUTHIFICATE:
            return {
                ...state,
                activeUser: {
                    ...state.activeUser,
                    isActive: true
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

export const onAuth = () => ({type: AUTHIFICATE})

export const setSearch = (term) => ({type: SET_SEARCHTERM, payload: term})
