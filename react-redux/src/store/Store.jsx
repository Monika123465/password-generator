import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from '../feature/todo/todoslice'

export const Store=configureStore({
    reducer:todoReducer
})