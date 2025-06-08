import { useState } from "react";
import useBooksContext from "../../hooks/use-books-context";
const BookEdit=({onlastEdit,book})=>{
    const {onEdit} = useBooksContext()
const [newTitle,setNewTitle] = useState(book.title)
const handleChange=(event)=>{
setNewTitle(event.target.value)
}

const handleSubmit=(event)=>{
event.preventDefault();
onlastEdit()
onEdit(newTitle,book.id)
}

return (
    <div>
    <form onSubmit={handleSubmit}>
    <input
     type="text" 
     onChange={handleChange}
     value={newTitle}/>
     <button type="submit">Update</button>
    </form>
    </div>
)
}

export default BookEdit;