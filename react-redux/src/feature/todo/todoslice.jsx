import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={
    todos:[{id:'1' ,text:'hello'}]
}

export const todoReducer=createSlice({
    initialState  : initialState,
    name:'todo',
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid() ,text:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        },
         updateTodo:(state,action)=>{
            const {id,text}=action.payload
            const textid=state.todos.find((id)=>todo.id==id)
            if(textid){
             textid.text=text
            }
            
         }
    }
})

export const {addTodo,deleteTodo,updateTodo}=todoReducer.actions


export default todoReducer.reducer