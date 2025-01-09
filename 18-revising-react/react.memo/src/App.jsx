import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useMemo } from 'react'

const Data = React.memo(({userData})=>{
  return (
    <div>
      {userData && userData.name}
    </div>
  )
})

function App() {
  const [count, setCount] = useState(0)
  const [decrement, setDecrement] = useState(10)

  const optimizedObj = useMemo(()=>({name:"Navjot"}),[decrement])

  return (
   <>
    <Data userData={optimizedObj} />
    <button onClick={()=>setCount(prev=>prev+1)}> Increment : {count}</button>
    <button onClick={()=>setDecrement(prev=>prev-1)}> Decrement : {decrement}</button>
   </>
  )
}

export default App
