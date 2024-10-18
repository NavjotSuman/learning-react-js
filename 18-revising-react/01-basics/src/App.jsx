import { useState } from 'react'
import './App.css'
import Name from "./input"
import Button from './button'

function App() {
 const [count , setcCount] = useState(0)
 console.log(count)

function incrFunc() {
  if (count < 20 ) {
    setcCount(count + 1)
    setcCount(count + 1)
    setcCount(count => count + 1)
    setcCount(count => count + 1)
  }
}
function decrFunc() {
  if (count > 0) {
    setcCount(count -1 )
    setcCount(count -1 )
    setcCount(count -1 )
    setcCount(count -1 )
    setcCount(count -1 )
  }
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrFunc}>Increment</button>
      <button onClick={decrFunc}>Decrement</button>
    </>
  );
}

export default App
