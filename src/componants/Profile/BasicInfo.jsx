import React from 'react'

const BasicInfo = ({firstName , lastName , profession , city , state , description , profileImage}) => {
    return (
        <div className="card mb-4">
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img src={profileImage} alt="avatar" className="rounded-circle img-fluid" 
                onError={(e)=> e.target.src= "https://avatar.iran.liara.run/public/boy?username=Ash"}
                
                style={{ width: '150px' }} />
                <h5 className="my-3 ">{firstName} {lastName}</h5>
                <p className="text-muted mb-1">{profession}</p>
                <p className="text-muted mb-4">{state}, {city}</p>
                <p className="text-muted text-center ">{description}</p>
            </div>
        </div>
    )
}

export default BasicInfo