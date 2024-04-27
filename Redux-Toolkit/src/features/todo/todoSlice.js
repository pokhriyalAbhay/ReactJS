import { createSlice,nanoid } from "@reduxjs/toolkit";
const  initialState = {
    todos: [{id:1,text:"hello world"}]

} // yeh code yeh show karta hian store starting mai kaisa hoga empty hoga ki  koe value hogi 
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            const todo = {
                id: nanoid(), // yeh random id genrate karke dega 
                text: action.payload  // payload ek object app . laga ke uski or porperty  access kar skate ho 

            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{ 
            state.todos = state.todos.filter((todo)=>todo.id!== action.payload)
        }, // context api mai hmm srif method likh rahe the or uski functionality kahi or likh rahe the lekin reduxtoolkit mai
          // yahi par functionality declear karte hain jab bhi hm reducer ke ander function likte hain toh usme 2 chije milti hain
          // state or action --- state jo varible wo hamesa initialState ke under jo bhi hain uska access dega ----action jaise hamre 
          // pass kuch value aaye 
       
    
    }

}) //yeh bhi function hain reducers ka bada version hain 
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer
