import React, { useContext, useState } from 'react'
import { UserContext } from './context/userContext';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    function HandleSubmit(){
        setUser({ username, password });
        setUsername("")
        setPassword("");
    }

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={HandleSubmit}>Login</button>
    </>
  );

}
