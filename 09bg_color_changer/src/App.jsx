import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("green")

  return (
    <>
      <div className=" w-screen h-screen duration-200 flex justify-center items-end  pb-7" style={{backgroundColor:color}}>
        <div className="flex bg-white p-2 rounded-xl gap-4">
          <div className="box bg-red-600 rounded-lg p-2"  onClick={()=>
            setColor("red")
          }>Red</div>
          <div onClick={()=>{
            setColor("purple")
          }} className="box bg-purple-600 rounded-lg p-2">purple</div>
          <div onClick={()=>{
            setColor("yellow")
          }} className="box bg-yellow-600 rounded-lg p-2">Yellow</div>
          <div onClick={()=>{
            setColor("blue")
          }} className="box bg-blue-600 rounded-lg p-2">Blue</div>
          <div onClick={()=>{
            setColor("green")
          }} className="box bg-green-600 rounded-lg p-2">Green</div>
          <div onClick={()=>{
            setColor("orange")
          }} className="box bg-orange-600 rounded-lg p-2">Orange</div>
          <div onClick={()=>{
            setColor("white")
          }} className="box bg-white rounded-lg p-2 text-black">white</div>
          <div onClick={()=>{
            setColor("black")
          }} className="box bg-black rounded-lg p-2">black</div>
        </div>
      </div>
      console.log(color);
    </>
  )
}

export default App
