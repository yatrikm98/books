import { createContext, useCallback, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback( async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    },[])


    const onCreate = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });
        setBooks([...books, response.data])
    }

    const onDelete = async (newId) => {
        await axios.delete(`http://localhost:3001/books/${newId}`)
        const updatedBooks = books.filter((book) => {
            return (!(book.id === newId))
        })
        setBooks(updatedBooks)
    }

    const onEdit = async (newTitle, id) => {
        const response = await axios.put('http://localhost:3001/books/' + id, {
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
        onEdit
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;