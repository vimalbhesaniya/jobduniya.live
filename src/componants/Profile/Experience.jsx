import React from 'react'
import "../../Style/profile.css"
const Experience = ({userType,jobTitle,companyName,startDateWork,endDateWork,responsibilities,achievements}) => {
    return (
        <>
            <div class="dataContainer">
                <div class="data-item">
                    <p className="data-title">User Type</p>
                    <p className="data-item-info">{userType}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Job Title</p>
                    <p className="data-item-info">{jobTitle}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Company Name</p>
                    <p className="data-item-info">{companyName}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Start Date of Work </p>
                    <p className="data-item-info">{startDateWork}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">End Date of Work</p>
                    <p className="data-item-info">{endDateWork}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Responsibilities</p>
                    {responsibilities&&responsibilities.map((e)=>
                        <li className="data-item-info">{e}</li>
                    )}
                </div>
                <div class="data-item">
                    <p className="data-title">Achievements</p>
                    {achievements&&achievements.map((e)=>
                        <li className="data-item-info">{e}</li>
                    )}
                </div>
            </div>
        </>
    )
}

export default Experience