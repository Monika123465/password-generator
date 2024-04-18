import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {removeTodo} from "./Todoslice"

const Todo = () => {
   const todos=useSelector(state=>state.todos)
   const dispatch=useDispatch()
  return (
    <div>Todo
      {todos.map(el=><li key='el.id'>{el.text}
      <button onClick={()=>dispatch(removeTodo(el.id ))}  >x</button>
      </li>
    
    
    )}

    </div>
  )
}

export default Todo