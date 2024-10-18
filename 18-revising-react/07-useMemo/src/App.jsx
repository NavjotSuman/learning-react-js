import { useState } from "react";
import "./App.css";



function App() {
  const [counter, setCounter] = useState(0);
  function ExpensiveCalculation() {
    console.log("rendreing expensive ");
    const sum = () => {
      console.log("calculating sum...");
      let i = 0;
      for (i = 0; i < 1000000; i++) {
        i = i + 2;
      }
      return i;
    };

    const total = sum();

    return <p>sum : {total}</p>;
  }
  return (
    <>
      <ExpensiveCalculation />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h1>{counter}</h1>
    </>
  );
}

export default App;
