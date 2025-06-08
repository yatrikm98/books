 import { useContext, useEffect } from "react";
import BookCreate from "./context/components/BookCreate/BookCreate";
import BookList from "./context/components/BookList";
import BooksContext from "./context/books";
const App = () => {
    const {fetchBooks}=useContext(BooksContext)

    useEffect(() => {
        fetchBooks()
    },[fetchBooks])

   
    return (
        <div>
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}

export default App;