import React, { useState } from 'react'
import "../../Style/login.css"
const Saved = ({ array  , setArray}) => {
    const perfromDelete = (index) => {
        array = array.filter((e , i) => {
            return i !== index
        }) 
        setArray(array)
    }
    return (
        <>
            {
                array?.map((e , i) => {
                    return <div className="--formData ">
                        <div className="skillsss animate__animated animate__jackInTheBox   "> {e} <i className="fa fa-close targetToClose" onClick={() => {
                            perfromDelete(i)
                        }}></i></div>
                    </div>
                })
            }
        </>
    )
}

export default Saved