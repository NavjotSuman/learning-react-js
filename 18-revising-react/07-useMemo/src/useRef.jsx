import React, { useEffect, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef('');
  console.log("rendering...");
  let data;
  const logInput = () => {
    console.log(inputRef.current.value);
    data = inputRef.current.value
  };

  setTimeout(() => {
    console.log(inputRef.current.value);
  }, 2000);

  return (
    <>
      <h1>{data}</h1>
      <input type="text" ref={inputRef} />
      <button onClick={logInput}>Submit</button>
    </>
  );
}
