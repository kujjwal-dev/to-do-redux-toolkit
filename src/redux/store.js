import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/counter/todoSlice'

export const store = configureStore({

  reducer: todoReducer
   
  
})