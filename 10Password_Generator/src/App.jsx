import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("");

  // use ref Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    // variables 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // conditions 
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_+-{}[]|\?/><.,;:"

    // loop for setting the password into the variable password
    for (let i = 1; i <= length; i++) {
      let strnum = parseInt(Math.random() * str.length)
      pass += str.charAt(strnum);
    }
    console.log(pass);
    setPassword(pass);

  }, [length, numberAllowed, characterAllowed, setPassword])

  // password copy to clipboard
  const copytoClipboard = useCallback(() => {
    passwordRef.current?.select();
    // for select the range of selection
    // passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, setPassword])



  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>

        {/* it it geting the upper side of the project */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copytoClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>




        {/* ================================== for the bottom side of the project ============================= */}
        <div className='flex text-sm gap-x-2'>



          {/* chnages of :-   range input */}
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={12}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>



          {/* number Allowd or not */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>



          {/* Character Allowed or Not */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
