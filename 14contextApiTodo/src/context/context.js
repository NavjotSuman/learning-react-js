import { createContext, useContext } from 'react'

export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            message: "Hello World",
            toogle: false,
        }
    ],
    addTodo: (message) => { },
    updateTodo: (id, message) => { },
    deleteTodo: (id) => { },
    toogleTodo: (id) => { },

})


export const TodoProvider = TodoContext.Provider


export const useTodo = () => {
    return useContext(TodoContext)
}