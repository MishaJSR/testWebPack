import photo1 from  '../icons/1photo.jpg'
import photo2 from  '../icons/10photo.jpg'
import photo3 from  '../icons/11photo.jpg'
import photo4 from  '../icons/8photo.jpg'
import photo5 from  '../icons/9photo.jpg'

const FIND_NAME_SELECTED = 'FIND_NAME_SELECTED'
const SET_CHATS = 'SET_CHATS'
const SET_NOW_CHAT = 'SET_NOW_CHAT'
const SET_LOADING = 'SET_LOADING'

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
    friendsMass: [
        {
            id: 3,
            name: "Andrey",
            photo: photo1,
            lastMess: "What are you doing"
        },
        {
            id: 4,
            name: "Mike",
            photo: photo2,
            lastMess: "Nice to meet you"
        },
        {
            id: 5,
            name: "Jim",
            photo: photo3,
            lastMess: "Happy birthday"
        },
        {
            id: 6,
            name: "Flint",
            photo: photo4,
            lastMess: "Im fine"
        },
        {
            id: 7,
            name: "Stray",
            photo: photo5,
            lastMess: "Listen to u heart "
        }
    ],
    messageMass: [
        {
            id: 1,
            idAdder: 3,
            text: "Hello"
        },
        {
            id: 2,
            idAdder: 37,
            text: "Hi Bro"
        },
        {
            id: 3,
            idAdder: 3,
            text: "Hello"
        },
        {
            id: 4,
            idAdder: 3,
            text: "Hi Bro"
        },
        {
            id: 5,
            idAdder: 37,
            text: "Hello"
        },
        {
            id: 6,
            idAdder: 37,
            text: "Hi Bro"
        },
        {
            id: 1,
            idAdder: 3,
            text: "Hello"
        },
        {
            id: 2,
            idAdder: 37,
            text: "Hi Bro"
        },
        {
            id: 3,
            idAdder: 3,
            text: "Hello"
        },
        {
            id: 4,
            idAdder: 3,
            text: "Hi Bro"
        },
        {
            id: 5,
            idAdder: 37,
            text: "Hello"
        },
        {
            id: 6,
            idAdder: 37,
            text: "Hi Bro"
        },
        {
            id: 4,
            idAdder: 3,
            text: "Hi Bro"
        },
        {
            id: 5,
            idAdder: 37,
            text: "Hello"
        },
        {
            id: 6,
            idAdder: 37,
            text: "Hi Bro"
        },
        {
            id: 4,
            idAdder: 3,
            text: "Hi Bro"
        },
        {
            id: 5,
            idAdder: 37,
            text: "Hello"
        },
        {
            id: 6,
            idAdder: 37,
            text: "Hi Bro"
        }
        ,
        {
            id: 4,
            idAdder: 3,
            text: "Hi Bro"
        },
        {
            id: 5,
            idAdder: 37,
            text: "Hello"
        },
        {
            id: 6,
            idAdder: 37,
            text: "Hi Bro"
        }
    ]
}


export default  function messageReducer(state= defaultState, action){
    switch (action.type) {
        case FIND_NAME_SELECTED:
            let findName;
            let findphotoSelected;
            state.friendsMass.map((e) => {
                if (e.id === action.payload) {
                    findName = e.name;
                    findphotoSelected = e.photo;
                }
            });
            return {
                ...state,
                nameSelected: findName,
                photoSelected: findphotoSelected
            }
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


        default:
            return state
    }
}

export const findNameMessageSlected = (id) => ({type: FIND_NAME_SELECTED, payload: id})
export const setChats = (us) => ({type: SET_CHATS, payload: us})
export const setNowChats = (us, isSecond) => ({type: SET_NOW_CHAT, payload: us, bool: isSecond})
export const setMessageLoading = (us) => ({type: SET_LOADING, payload: us})