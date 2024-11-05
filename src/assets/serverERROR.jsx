import React from 'react'
import "./err.css"
import Lottie from 'lottie-react'
import server from "./server.json"
const serverERROR = () => {
  return (
    <>
        <div className='main-error-page'>
            <Lottie animationData={server} width={100} height={100}></Lottie>
        </div>
    </>
    )
}

export default serverERROR