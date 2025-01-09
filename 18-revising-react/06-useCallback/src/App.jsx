import { useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { memo } from "react";

const Button = memo(({ onClick, children }) => {
  console.log("Rendreing Button...", children);
  return <button onClick={onClick}>{children}</button>;
});


function App() {
  const [counter, setCounter] = useState(0);

  
  const handleIncrement = useCallback(() => {
    console.log("inside Increment");
    setCounter((pre) => pre + 1);
  },[])

  const handleDecrement = useCallback(() => {
    console.log("inside Decrement");
    setCounter((pre) => pre - 1);
  },[])

  return (
    <>
      <h1>{counter}</h1>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </>
  );
}

export default App;
