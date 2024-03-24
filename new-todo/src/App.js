import logo from './logo.svg';
import './App.css';
import { useState } from "react"

function App() {
  const [todo, setTodo] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value;
  setInputValue(value);
}
const AddTodo=()=>{
  setTodo([...todo,inputValue])
  setInputValue('')
}
return (
    < >
      <div className="input">
        <input type="text" placeholder="enter todo" value={inputValue} onChange={handleInputChange} />
        <button onClick={AddTodo} >ADD</button>
      </div>
    <ul>
      {todo.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
      
    </ul>
      
      

    </>
  );
}

export default App;
