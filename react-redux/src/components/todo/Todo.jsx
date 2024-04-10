import React from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { deleteTodo } from '../../feature/todo/todoslice'

const Todo = () => {

    const todos=useSelector((state)=>state.todos)
     const dispatch=useDispatch()
  return (
    <>
    <div>TodoList</div>
    {todos.map((todo)=>(
        <li key={todo.id}>{todo.text} <button onClick={()=>dispatch(deleteTodo(todo.id))}>x</button></li>
        
    ))}
    </>
)
}

export default Todo