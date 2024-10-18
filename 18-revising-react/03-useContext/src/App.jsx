import { useState } from 'react'
import './App.css'
import Login from './Login'
import Profile from './Profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App
