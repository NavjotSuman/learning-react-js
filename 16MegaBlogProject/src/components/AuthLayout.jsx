import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AuthLayout = ({ children, authentication = true }) => {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.status)

    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //      navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //let authValue = authStatus === true ? true : false


        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }
        // only if the authStatus('real user') is true only then it will be true
        else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading....</h1> : <>{children}</>
}

export default AuthLayout;
