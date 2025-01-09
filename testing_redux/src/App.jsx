import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useSelector, useDispatch} from "react-redux"
import { addTodo } from './components/todo/TodoSlice'

function App() {
  const [count, setCount] = useState(0)
  const todos = useSelector(state=> state.todo)
  const dispatch = useDispatch()
  
  console.log(todos);
  const handleClick = ()=>{
    dispatch(addTodo("this is first message"))
  }

  return (
    <>
        <h1>Hello World</h1>
        <button onClick={handleClick}>Click me</button>
    </>

  )
}

export default App
