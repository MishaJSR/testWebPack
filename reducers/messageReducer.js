const SET_CHATS = 'SET_CHATS'
const SET_NOW_CHAT = 'SET_NOW_CHAT'
const SET_LOADING = 'SET_LOADING'
const PUSH_MESSAGE = 'PUSH_MESSAGE'
const SET_FIRST_LOADING = 'SET_FIRST_LOADING'
const PUSH_LAST_MESSAGE = 'PUSH_LAST_MESSAGE'
const SET_LOADING_CHAT = 'SET_LOADING_CHAT'


const defaultState = {
    isFetching: false,
    nameSelected: null,
    photoSelected: null,
    errorMessage: null,
    anotherId: null,
    chats: null,
    nowChat: null,
    isSecond: null,
    messageLoading: true,
    firstLoadingID: null,
   chatLoading: true,
}


export default  function messageReducer(state= defaultState, action){
    switch (action.type) {
        case SET_CHATS:
            return {
                ...state,
                chats: action.payload
            }
        case SET_NOW_CHAT:
            return {
                ...state,
                nowChat: action.payload,
                isSecond: action.bool
            }
        case SET_LOADING:
            return {
                ...state,
                messageLoading: action.payload
            }
        case SET_FIRST_LOADING:
            return {
                ...state,
                firstLoadingID: action.payload
            }

        case PUSH_MESSAGE:
            const full = [...state.nowChat]
            full[0].messages.push(action.payload);
            return {
                ...state,
               nowChat: full
            }

        case PUSH_LAST_MESSAGE:
            const chat = [...state.chats]
            const needChat = chat.find(chat => chat.id === action.idChat)
            needChat.messages.push(action.payload);
            return {
                ...state,
                chats: chat
            }

        case SET_LOADING_CHAT:
            return {
                ...state,
                chatLoading: action.payload
            }



        default:
            return state
    }
}

export const setChats = (us) => ({type: SET_CHATS, payload: us})
export const setNowChats = (us, isSecond) => ({type: SET_NOW_CHAT, payload: us, bool: isSecond})
export const setMessageLoading = (us) => ({type: SET_LOADING, payload: us})
export const pushMessage = (id, id_List, id_Adder, text) => ({type: PUSH_MESSAGE, payload: {id: id, id_List: id_List, id_Adder: id_Adder, text: text}})
export const setFirstLoadingID = (us) => ({type: SET_FIRST_LOADING, payload: us})
export const pushLastMessChats = (idChat, adder, text) => ({type: PUSH_LAST_MESSAGE, idChat: id, payload: {id: 999999, id_List: id, id_Adder: adder, text: text}})
export const setLoadingChat = (us) => ({type: SET_LOADING_CHAT, payload: us})