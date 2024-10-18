import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useReducer } from "react";


const initialstate = { username: "", password: "" }; 

function fnReducer(state, action) {
  switch (action.type) {
    case "update_username":
      return { ...state, username: action.payload };

    case "update_password":
      return { ...state, password: action.payload };

    default:
      break;
  }
}

function App() {
  const [user, dispatch] = useReducer(fnReducer,initialstate);

  

  // console.log(counter);
  return (
    <>
      <h1>Username : { user.username}</h1>
      <h1>Password : {user.password}</h1>
      <input
        placeholder="Username"
        onChange={(e) =>
          dispatch({ type: "update_username", payload: e.target.value })
        }
        value={user.username}
      />
      <input
        value={user.password}
        placeholder="Password"
        onChange={(e) =>
          dispatch({ type: "update_password", payload: e.target.value })
        }
      />
    </>
  );
}

export default App;
