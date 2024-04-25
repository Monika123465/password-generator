interface props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void;
}

const Inputfield = ({todo,setTodo,handleAdd}:props) => {
  //console.log(todo)
  return (
    <form  onSubmit={handleAdd}>
   <input type="text" placeholder="enter a Task" value={todo}
    onChange={(e)=>setTodo(e.target.value)}/>
   <button type="submit">Todo</button>

    </form>
  )
}

export default Inputfield