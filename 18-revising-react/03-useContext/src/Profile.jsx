import React, { useContext } from "react";
import { UserContext } from "./context/userContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (
    !user ||
    user.username == undefined ||
    user.password == undefined ||
    user.username == "" ||
    user.password == ""
  ) {
    return <h3>Login please</h3>;
  } else {
    return (
      <>
        <h1>Username is : {user.username}</h1>
        <h2>Password is : {user.password}</h2>
      </>
    );
  }
}
