
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './Todoslice'
import { useNavigate } from 'react-router-dom'


const AddTodos = () => {
const[input,setInput]=useState('')

const dispatch=useDispatch()
const navigate=useNavigate()

const addTodoHandler=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
  setInput('')
  navigate('../todo')
}
   
  

  return (
    <>
    <div>
        <form onSubmit={addTodoHandler}>
        <input type='text' placeholder='Enter Todo' value={input} onChange={el=>setInput(el.target.value)} />
        <button >Add Todo</button>
        </form>
       
    </div>

    </>
  )
}

export default AddTodos