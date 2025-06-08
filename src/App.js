import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
import {useState} from 'react'

const App = () => {
    const { fetchBooks } = useContext(BooksContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchBooks()
        setLoading(false)
    }, [fetchBooks])

    if (loading) {
        return <div className="loading">Loading...</div>
    } else {
        return (
            <div>
                <h1>Reading List</h1>
                <BookList />
                <BookCreate />
            </div>
        )
    }


}

export default App;