import React, { useContext } from "react";
import UserContext from "../Context/UserContext";


const Profile = () => {

    const { user } = useContext(UserContext);

    if (!user || user =="") return (<div>Please Login First</div>)
        else {
        // console.log(user)
        return (
            <>
            <h3>Welcome {user}</h3>
            {user}
            </>
        )
    }
}

export default Profile;
