import React from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { deleteTodo } from '../../feature/todo/todoslice'


const todos = [
    {
        id: 1,
        title: "hello world",
        description: "this one is todo of hello world",
    },
    {
        id: 1,
        title: "hello world 2",
        description: "this one is todo of hello world",
    },
    {
        id: 1,
        title: "hello world 3",
        description: "this one is todo of hello world",
    },
    {
        id: 1,
        title: "hello world 4",
        description: "this one is todo of hello world",
    },
    {
        id: 1,
        title: "hello world 5",
        description: "this one is todo of hello world",
    },
]


const Todo = () => {

    //const todos=useSelector((state)=>state.todos)
    // const dispatch=useDispatch()
  return (
    <>
    <div>TodoList</div>
    
        <table >
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
            </tr>
            {todos.map((todo)=>(
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                </tr>
       

        // <li key={todo.id}>{todo.text} <button onClick={()=>dispatch(deleteTodo(todo.id))}>x</button></li>
        
    ))}
     </table>
    </>
)
}

export default Todo