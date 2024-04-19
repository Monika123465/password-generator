import React from 'react'
import { useRef } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {removeTodo} from "./Todoslice"

const Todo = () => {
   const todos=useSelector(state=>state.todos)
   const dispatch=useDispatch()
 return (
    <div  style={{width:'800px', textAlign:'center',marginTop:'20'}}>Todo
      {todos.map(el=><div key='el.id' style={{ marginLeft:'40px',marginBottom:'5px'}} >{el.text}
     <button onClick={()=>dispatch(removeTodo(el.id ))} style={{marginLeft:'15px'}} >x</button>
      </div>
    
    
    )}

    </div>
  )
}

export default Todo