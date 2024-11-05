import React from 'react'
import "../../Style/profile.css"
const DataContainer = ({university,school,institution_name,degreelevel,SDOS,EDOS,GPA,certificates,onlinecourses}) => {
    return (
        <>
            <div class="dataContainer">
                <div class="data-item">
                    <p className="data-title">University</p>
                    <p className="data-item-info">{university}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">School</p>
                    <p className="data-item-info">{school}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Institution Name</p>
                    <p className="data-item-info">{institution_name}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Degree Level </p>
                    <p className="data-item-info">{degreelevel}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Start Date of School </p>
                    <p className="data-item-info">{SDOS}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">End Date of School </p>
                    <p className="data-item-info">{EDOS}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">GPA</p>
                    <p className="data-item-info">{GPA}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Certifications </p>
                    <p className="data-item-info">{certificates}</p>
                </div>
                <div class="data-item">
                    <p className="data-title">Online Courses</p>
                    <p className="data-item-info">{onlinecourses}</p>
                </div>
            </div>
        </>
    )
}

export default DataContainer