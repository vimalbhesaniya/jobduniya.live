import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import JobCard from './JobCard';
import css from "../../Style/modal.module.css"
import "../../Style/saved.css"
import notfound from "../../assets/notfound.json"
import useAPI from '../../Hooks/USER/useAPI';
import Body from './Body';
import Cookies from 'js-cookie';

const Nearbyusers = () => {
    const api = useAPI();
    const [saved, setSaved] = useState([]);
    const [isDeleted , setIsDelete] = useState("");
    useEffect(() => {
        const id = Cookies.get("id");
        const apiCall = async () => {
            const data = await api.getREQUEST(`ListJob/${id}`)
            if (data) {
                setSaved(data)
            }
            else {
                setSaved([]);
            }
        }
        apiCall();
    }, [isDeleted])

    const perFormUnSave =async(id)=>{
        const res = api.deleteREQUEST("delete" , "savedjobs" , {
            _id : id
        })
        setIsDelete(res);
        
    }
    return (
        <>
            <Body style={css.modalBodyTable} hidden={true} />
        </>
    );
};

export default Nearbyusers;
