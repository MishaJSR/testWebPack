const SET_USERS = 'SET_USERS'


const defaultState = {
    users : [],
    isFetching: true
}


export default  function reposReducer(state= defaultState, action){
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export const setUsers = (us) => ({type: SET_USERS, payload: us})
