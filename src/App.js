import React from 'react';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

//by default, state is only stored in memory

//localStorage.setItem(key, value)  -> save an item to local storage 
//localStorage.getItem(key, value)  -> retrieve a saved item from local storage 
//JSON.stringify() to turn object into a string
// localStorage.setItem('mybook',JSON.stringify(book))
// localStorage.getItem('mybook',JSON.parse(book))
