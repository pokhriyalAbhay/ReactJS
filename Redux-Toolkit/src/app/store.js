import {configureStore} from '@reduxjs/toolkit'; // is line of code se store banaya hian 
import todoReducer from '../features/todo/todoSlice';
export const store = configureStore({
    reducer: todoReducer
})  // store ko bus reducer ka knowledage chaiye