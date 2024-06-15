import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {




  const [count, setCount] = useState(10);

  function incrValue() {
    // because varible will reflect same as the 'a++' operator
    if (count < 20) {
      setCount(count + 1);
    }
    console.log(count)
  }

  function decValue() {
    // because varible will reflect same as the 'a++' operator
    if (count > 0) {
      setCount(count - 1)
    }
    console.log(count)

  }



  /*
  // these function will not reflect the current value in the active variable 
  // let count = 10;
    function incrValue() {
      count = count + 1;
      console.log(count);
    }
  
    function decValue() {
      count = count - 1;
      console.log(count);
    }

  */
  return (
    <>
      <h1>Hello World</h1>
      <p>your Count Value is: {count}</p>

      <button onClick={incrValue}>Increment : {count}</button>
      <br />
      <button onClick={decValue}>Decrement : {count}</button>

      <p>the value is {count}</p>
    </>
  )
}

export default App
