import {useState } from 'react';
import './BookShow.css'
import BookEdit from '../BookEdit';

import useBooksContext from '../../../hooks/use-books-context';
const BookShow=({book})=>{

const [showEdit,setShowEdit]=useState(false)
const {onDelete}=useBooksContext()
const handleEdit=()=>{
    setShowEdit(!showEdit)
}

const onHandleEdit=()=>{
setShowEdit(!showEdit)
}


const handleDelete=()=>{
onDelete(book.id)
}

let content=book.title;
if(showEdit){
 content=<BookEdit book={book} onlastEdit={onHandleEdit} />
}


return (    
    <div className="book-show">    
    <div className='book-buttons'>
    <button className='edit' onClick={handleEdit}>✏️</button> 
    <button className='delete' onClick={handleDelete}>❌</button>
    </div>
    <div className='book-image'>
    <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt='No Pics'/>
    </div>
    {content}
    </div>    
)
}

export default BookShow;