import React, { useMemo, useState } from 'react'
import Counts from './memeCount'

const Memo = () => {
    const [count, setCount ] = useState(0);

    const testingFunc = useMemo(()=>{
        return <h1>this is from testing Function</h1>;
    },[])

    // const newObj = {
    //   age: 20,
    //   username: "navjotsuman",
    // };
    const newObj = useMemo(()=> {return {
      age: 20,
      username: "navjotsuman",
    };},[])

    if (count == 4) {
      newObj.age = 30
    }

    console.log(newObj)
  

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
      <button onClick={() => setCount((pre) => pre - 1)}>Decrement</button>
      <Counts
        name="Navjot"
        class="16"
        setCount={setCount}
        testingFunc={testingFunc}
        obj={newObj}
      />
    </>
  );
}

export default Memo