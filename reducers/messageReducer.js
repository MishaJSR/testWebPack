import photo1 from  '../icons/1photo.jpg'
import photo2 from  '../icons/10photo.jpg'
import photo3 from  '../icons/11photo.jpg'
import photo4 from  '../icons/8photo.jpg'
import photo5 from  '../icons/9photo.jpg'

const defaultState = {
    isFetching: false,
    errorMessage: null,
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
        }
    ]
}


export default  function messageReducer(state= defaultState, action){
    switch (action.type) {


        default:
            return state
    }
}

