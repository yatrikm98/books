import BookShow from "./BookShow/BookShow"
import './BookShow/BookShow.css'
import useBooksContext from "../../hooks/use-books-context"



const BookList=()=>{
    const {books}=useBooksContext()
    const renderedList=books.map((book,index)=>{
    return <BookShow book={book} key={index}/>
    })

return <div className="book-list">
{renderedList}</div>
}
export default BookList;