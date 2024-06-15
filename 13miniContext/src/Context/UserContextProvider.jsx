import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    return (
        // .Provider is must with the userContext
        // value Attribute ttakes the values that we want o pass through it.... we are passing multiple values with the help of the opject

        <UserContext.Provider value={{ user, setUser }}>
            {/* passing the data 'children' as it is */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;