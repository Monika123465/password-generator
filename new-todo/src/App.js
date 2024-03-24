import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const[inputValue,setInputvalue]=useState('')
  const[todo,setTodo]=useState([])

function setInputvaluearr(e){
  const data=e.target.value
  //console.log(data)
  setInputvalue(data)

}
const addValue=()=>{
  if(inputValue !==''){
    setTodo([...todo,inputValue])
    setInputvalue("")
  }
  
}
const removeTodo=(index)=>{
  const todofilter=todo.filter((_,i)=>i!==index)
  setTodo(todofilter)
  
}
//console.log(todo)

return (
    < >
      <div className="input">
        <input type="text" placeholder="enter todo" value={inputValue} onChange={setInputvaluearr}/>
        <button onClick={addValue}>ADD</button>
      </div>
      <ul>
        {todo.map((todo,index)=>(
          <li key={index}>{todo}  <button onClick={()=>removeTodo(index)}>Remove</button></li>
          
        ))}
       
      </ul>
   </>
  );
}

export default App;
