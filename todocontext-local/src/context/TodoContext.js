import {createContext,useContext} from "react"
export const TodoContext = createContext({ // yaha pe hamne ek context bana diya hain TodoContext nam ka 
    todos:[
        {
            id: 1,
            todo: "todo message",
            completed: false,
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = ()=>{ 
    return useContext(TodoContext) // usContext ek hook hain jisme hmmn context dena padega
}
export const TodoProvider = TodoContext.Provider
