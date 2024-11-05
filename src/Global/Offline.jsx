import React from 'react'
import offline from "../assets/Offline.json"
import Lottie from 'lottie-react'
const Offline = () => {
  return (
    <>
        <div className="online">
            <Lottie 
            animationData={offline}
            style={{
                height:"50%",
                width:"50%"
            }}
            />
        </div>
    </>
    )
}

export default Offline