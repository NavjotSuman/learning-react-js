import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();
    return (
        <>
            <h1 className="p-8 bg-green-600 text-black weight-500 text-center text-3xl"> User Id : {userid} </h1>
        </>
    )
}

export default User