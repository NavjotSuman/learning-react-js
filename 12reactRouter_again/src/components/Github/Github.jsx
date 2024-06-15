import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
const Github = () => {
    // const [data, setdata] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/navjotsuman")
    //         .then((res) => res.json())
    //         .then((res) => {
    //             const a = 10
    //             setdata(res)
    //         })
    // }, [data]);


    const data = useLoaderData();



    return (
        <div className='bg-gray-600'>
            <h1 className='text-center text-4xl text-white'>Your Followers: {data['followers']}</h1>
            <div className='flex item-cenetr content-center'>
                <img src={data.avatar_url} className='rounded-full m-5 pb-5' alt="Github Picture" width={350} />
                <h3>Name : &nbsp; {data.login}</h3>
            </div>
        </div>

    );
}

export default Github;



export const GithubLoaderInfo = async () => {
    const Response = await fetch("https://api.github.com/users/navjotsuman")
    return Response.json();
}
