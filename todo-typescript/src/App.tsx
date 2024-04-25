import { useState } from 'react'
import Inputfield from './Component/Inputfield.tsx'
import { Todo } from './model.ts';


const App:React.FC=() =>{
  const [todo,setTodo]=useState<string>('');
  const[todos,setTodos]=useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
   e.preventDefault();
   if(todo){
    setTodos([...todos,{id:Date.now() ,todo:todo,isDone:false}])
    setTodo('')
   }
    
  

  }
  console.log(todos)

  return (
    <div>
      <span>Task</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  )
}

export default App
