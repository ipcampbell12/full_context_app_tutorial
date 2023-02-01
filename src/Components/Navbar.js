import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext'

function Navbar(props) {

    const { books } = useContext(BookContext)

    return (
        <div className="navbar">
            <h1> Ninja Reding List</h1>
            <p> You currently have {books.length} in your list to get through . . .</p>
        </div>
    );
}

export default Navbar;