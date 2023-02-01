import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';


export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], () => {

        //set book as initial value, instead of empty array as an initial value
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    //save books data to local storage every time it gets updated
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;