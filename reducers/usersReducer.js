const SET_USERS = 'SET_USERS'
const UNAUTHIFICATE = 'UNAUTHIFICATE'
const AUTHIFICATE = 'AUTHIFICATE'


const defaultState = {
    allUsers : [],
    activeUser: {
        aUser: [],
        isActive: true
    },
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
        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})

export const unAuth = () => ({type: UNAUTHIFICATE})

export const onAuth = () => ({type: AUTHIFICATE})
