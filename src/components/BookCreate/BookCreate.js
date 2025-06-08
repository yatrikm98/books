import {useState } from 'react';
import './BookCreate.css'
import useBooksContext from '../../hooks/use-books-context';
const BookCreate=()=>{
const [title,setTitle]=useState('')
const {onCreate}=useBooksContext()

const handleChange=(event)=>{
    setTitle(event.target.value)
}


const handleSubmit=(event)=>{
    event.preventDefault()
    onCreate(title)
    setTitle('')
}
    return (
        <div className="input-div">
        <form onSubmit={handleSubmit}>
        <label>Add a Book</label> <br/><br/>
        <label>Title</label><br/>
        <input type="text" 
        placeholder="Enter Here" 
        className='input'
        value={title}
        onChange={handleChange}/><br/><br/>
        <button type='submit' className='input-button'>Create!</button>
        </form>
        </div>
    )
}

export default BookCreate;