import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid'

export const BookContext = createContext()

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        { title: "Book 1", author: "Author 1", id: 1 },
        { title: "Book 2", author: "Author 2", id: 2 },
    ]);


    const addBook = (title, author) => {
        setBooks([...books, { title: title, author: author, id: uuid() }])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    };


    //props.children represents the components that the the content provider is going to wrap
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    )

}

export default BookContextProvider;