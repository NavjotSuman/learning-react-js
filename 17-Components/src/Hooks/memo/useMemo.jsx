import React, { useMemo, useState } from 'react'

const ExpensiveCoponent = () => {
    const sum =()=>{
        console.log("calculating...")
        let i=0
        for (i = 0; i < 1000000000; i++) {
          i = i + 1;
        }
        return i;
    }

    const total = useMemo(()=>sum(),[])
    // const total = sum()
    return <h2>SUM : {total}</h2>
};

const MemoParentComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <>
    <ExpensiveCoponent />
      <button className='p-4 bg-red-400' onClick={() => setCount(count + 1)}>re-render parent</button>
      <p>parent re-render count: {count}</p>
    </>
  );
}

export default MemoParentComponent