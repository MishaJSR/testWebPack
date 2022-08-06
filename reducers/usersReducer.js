const SET_USERS = 'SET_USERS'


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
        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})
