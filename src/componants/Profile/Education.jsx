import React from 'react'
import "../../Style/profile.css"
const Education = ({univercity,school,institutionName,degreeLevel,startDateSchool,endDateSchool,gpa,certifications}) => {
    return (
        <>
            <div class="dataContainer">
                <div class="data-item">
                    <span className="data-title">University</span>
                    <span className="data-item-info">{univercity}</span>
                </div>
                <div class="data-item">
                    <span className="data-title">School</span>
                    <span className="data-item-info">{school}</span>
                </div>
                <div class="data-item">
                    <span className="data-title">Institution Name</span>
                    <span className="data-item-info">{institutionName}</span>
                </div>
                <div class="data-item">
                    <span className="data-title">Degree Level </span>
                    {degreeLevel&&degreeLevel.map((e)=>
                        <li className="data-item-info">{e}</li>
                    )}
                </div>
                <div class="data-item">
                    <span className="data-title">Start Date of School </span>
                    <span className="data-item-info">{startDateSchool}</span>
                </div>
                <div class="data-item">
                    <span className="data-title">End Date of School </span>
                    <span className="data-item-info">{endDateSchool}</span>
                </div>
                <div class="data-item">
                    <span className="data-title">GPA</span>
                    <span className="data-item-info">{gpa}</span>
                </div>
                <div class="data-item">
                    <span className="data-title">Certifications </span>
                    {certifications&&certifications.map((e)=>
                        <li className="data-item-info">{e}</li>
                    )}
                </div>
                {/* <div class="data-item">
                    <p className="data-title">Online Courses</p>
                    <p className="data-item-info">{onlinecourses}</p>
                </div> */}
            </div>
        </>
    )
}

export default Education