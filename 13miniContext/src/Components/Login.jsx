import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import UserContext from '../Context/UserContext';


const Login = () => {

    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('');


    // We will set the useContext same as we set the useState
    // setUser is came from the file 'context/userContextProvider.jsx'
    const { setUser } = useContext(UserContext);

    const btnSubmit = (e) => {
        e.preventDefault()
        setUser([ userName, Password ])
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={userName}
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
                placeholder='UserName'
            /> &nbsp; &nbsp;

            <input type="text"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />

            <button onClick={btnSubmit}>SUBMIT</button>
        </div>
    );
}

export default Login;
