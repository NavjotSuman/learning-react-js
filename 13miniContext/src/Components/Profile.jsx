import React, { useContext } from "react";
import UserContext from "../Context/UserContext";


const Profile = () => {

    const { user } = useContext(UserContext);

    if (!user || user =="") return (<div>Please Login First</div>)
    else {
        return (
            <h3>Welcome {user}</h3>
        )
    }
}

export default Profile;
