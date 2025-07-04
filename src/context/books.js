import { createContext, useCallback, useState } from "react";
import axios from "axios";
const BooksContext = createContext();


const BASE_URL = 'https://books-mnhx.onrender.com/books';

function Provider({ children }) {
    const [books, setBooks] = useState([]);
    const [loadingBooks, setLoadingBooks] = useState(false

    )
    const fetchBooks = useCallback(async () => {
        setLoadingBooks(true)
        const response = await axios.get(BASE_URL)
        setLoadingBooks(false)
        setBooks(response.data)
    }, [])


    const onCreate = async (title) => {
        const response = await axios.post(BASE_URL, {
            title,
        });
        setBooks([...books, response.data])
    }

    const onDelete = async (newId) => {
        await axios.delete(`${BASE_URL}/${newId}`)
        const updatedBooks = books.filter((book) => {
            return (!(book.id === newId))
        })
        setBooks(updatedBooks)
    }

    const onEdit = async (newTitle, id) => {
        const response = await axios.put(`${BASE_URL}/${id}`, {
            title: newTitle
        })
        const EditedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
            }
            return book;
        })
        setBooks(EditedBooks);
    }



    const valueToShare = {
        books,
        fetchBooks,
        onCreate,
        onDelete,
        onEdit,
        loadingBooks
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;