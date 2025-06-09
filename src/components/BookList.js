import BookShow from "./BookShow/BookShow"
import './BookShow/BookShow.css'
import useBooksContext from "../hooks/use-books-context"



const BookList = () => {
    const { books, loadingBooks } = useBooksContext()
    const renderedList = books.map((book, index) => {
        return <BookShow book={book} key={index} />
    })

    return loadingBooks ? <div className="loadingBooks">Loading Books...</div> : <div className="book-list">
        {renderedList}</div>
}
export default BookList;