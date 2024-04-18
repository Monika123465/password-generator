import React from 'react'
import { configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../Pages/Todoslice'



export const store=configureStore({
  reducer:TodoReducer
})