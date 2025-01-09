import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     [
//       {
//         id: 1,
//         text: "Hello World"  
//       },
//       {
//         id: 1,
//         text: "Hello World"  
//       },
//       {
//         id: 1,
//         text: "Hello World"  
//       },
//      ]
// }



const TodoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo:(state,action)=>{
            const todo ={
                id : Date.now(),
                message: action.payload
            }
            state.push(todo)
        },
        removeTodo:(state,action)=>{
            return state.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = TodoSlice.actions
export default TodoSlice.reducer