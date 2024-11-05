import React, { useEffect, useState } from 'react'
import useAPI from '../../Hooks/USER/useAPI'
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const ProtectedRoute = ({ childeren }) => {
    const api = useAPI();
    const [status , setStatus] = useState();
    useEffect(() => {
        const call = async () => {
            const data = await api.getREQUEST("authenitcation",)
            console.log(data);
            setStatus(data.status);
        }
        call()
    }, [])
    if (status) {
        return childeren
    }
    else{
        return <Navigate to={"/loginascompany"} />
    }
}

export default ProtectedRoute