import { v4 as uuid } from 'uuid'

export const bookReducer = (state, action) => {
    //need to check the type of the action before we manipulate the state
    //convetion is to have types be all capps

    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }

}