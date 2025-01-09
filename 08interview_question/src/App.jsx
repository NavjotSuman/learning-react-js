import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  function addValue() {
    setCount(prevCount => prevCount +1);
    setCount(prevCount => prevCount +1);
    setCount(prevCount => prevCount +1);
    console.log("count : ",count);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
  }

  return (
    <>
    <button onClick={addValue}>Add Value: {count}</button>
    </>
  )
}

export default App
