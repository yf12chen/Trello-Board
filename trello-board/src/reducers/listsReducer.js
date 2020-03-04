import { CONSTANTS } from '../actions/index'

const initialState = [
    {
        title: 'Last Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'this is the 1st card  of Last Episode',
            },
            {
                id: 1,
                text: 'this is the 2nd card  of Last Episode',
            },
        ]
    },
    {
        title: 'This Episode',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'this is the 1st card  of This Episode',
            },
            {
                id: 1,
                text: 'this is the 2nd card  of This Episode',
            },
            {
                id: 2,
                text: 'this is the 3rd card  of This Episode',
            },
            {
                id: 3,
                text: 'this is the 4th card  of This Episode',
            },
        ]
    },
    {
        title: 'Next Episode',
        id: 2,
        cards: [
            {
                id: 0,
                text: 'this is the 1st card  of Next Episode',
            },
            {
                id: 1,
                text: 'this is the 2nd card  of Next Episode',
            },
        ]
    },
]

let listID = 2;

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:

            const newList = {
                title: action.payload,
                id: listID,
                cards: [],
            }
            listID += 1;
            return [...state, newList];

        default:
            return state;
    }
}

export default listsReducer;