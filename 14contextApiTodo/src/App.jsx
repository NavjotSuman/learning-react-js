import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { TodoProvider } from './context/context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (message) => {
    setTodos((prev) => [{ id: Date.now(), ...message }, ...prev])
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachVal) => eachVal.id !== id))
  }

  const updateTodo = (id, message) => {
    setTodos((prev) => prev.map((eachVal) => eachVal.id === id ? message : eachVal))
  }

  const toogleTodo = (id) => {
    setTodos((prev) => prev.map((eachVal) => eachVal.id === id ? { ...eachVal, toogle: !eachVal.toogle } : eachVal))
  }


  useEffect(() => {
    const fetchedTodo = JSON.parse(localStorage.getItem('Todos'));
    // console.log(fetchedTodo);
    if (fetchedTodo && fetchedTodo.length > 0) {
      setTodos(fetchedTodo)
    }
  }, [])



  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  }, [Todos])



  return (
    <TodoProvider value={{ Todos, addTodo, deleteTodo, updateTodo, toogleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {/* <TodoItem /> */}
            {
              Todos.map((eachTodo) => (
                <div key={eachTodo.id}>
                  <TodoItem todo={eachTodo} />
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
