import React, { useContext, useEffect, useState } from "react";
import job from "../../Style/jobCard.module.css";
import GlobalModel from "../../Global/GlobalModel";
import { ActiveModal } from "../..";

const JobCard = ({
    perFormSave,
    onCardClick,
    id,
    title,
    jobtype,
    location,
    setModel,
    salary,
    postedtime,
    hidden,
    viewJob,
    companyLogo,
    perFormUnSave,
    savedId
}) => {
    const [activeModalState , setActiveModalState] = useContext(ActiveModal);
    return (
        <>
            <div className={`${job.box}`} >
                <div className={job.left} onClick={() => onCardClick(id)}>
                    <div className={job.Logo}>
                        <img src={companyLogo} height={100}
                            className="rounded-3"
                            onError={(e) => e.target.src = "https://st2.depositphotos.com/1065578/7533/i/450/depositphotos_75333451-stock-photo-abstract-geometric-company-logo.jpg"} width={100} alt="" />
                    </div>
                    <div className={job.Details}>
                        <div className={job.header}>
                            <h2>{title}</h2>
                        </div>
                        <div className={job.basicdetails}>
                            <div className="d-flex gap-2 justify-content-lg-start   align-content-center ">
                                <i className="fa fa-location-dot mt-1 "></i>
                                <span>{location}</span>
                            </div>
                            <div className="d-flex gap-2 justify-content-lg-start   align-content-center ">
                                <i class="fa-regular fa-clock mt-1"></i>
                                <span>{jobtype&&jobtype}</span>
                            </div>
                            <div className="d-flex gap-2 justify-content-lg-start   align-content-center ">
                                <i class="fa-solid fa-indian-rupee-sign mt-1"></i>
                                <span>{salary}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={job.right}>
                    <div className="d-flex gap-2">
                        {hidden&&<><button className="btn bgbtn"  onClick={() => {
                            localStorage.setItem("appliedID" , id)
                            setActiveModalState("ApplyForm")
                        }}>Apply now</button>
                        <button className="btn bgbtn" onClick={() => {
                            perFormSave(id)
                        }}>save</button> </>}
                        {!hidden&&
                            <button className="btn bgbtn"  onClick={() => {
                            perFormUnSave(savedId)
                        }}> <i className="fa fa-close"></i> </button>
                        }
                    </div>
                    <div className="d-flex justify-content-end  w-100">
                        <span>posted on {postedtime}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobCard;
