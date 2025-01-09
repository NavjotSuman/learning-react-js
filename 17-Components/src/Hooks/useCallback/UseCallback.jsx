import Button from "@/components/Button/Button";
import React, { useCallback, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  //   const IncreHandle = () => {
  //     console.log("inside Increment");
  //     setCount((pre) => pre + 1);
  //   };

  const IncreHandle = useCallback(()=>{
      console.log("inside Increment");
      setCount((pre) => pre + 1);
  },[])

    const DecrHandle = useCallback(() => {
      console.log("inside Decrement");
      setCount((pre) => pre - 1);
    }, []);
  return (
    <>
      <h1>{count}</h1>
      <Button onClick={IncreHandle}>Increment</Button>
      <Button
        onClick={
          DecrHandle
        }
      >
        Decrement
      </Button>
    </>
  );
};

export default UseCallback;
