import React, { useContext } from "react";
import { ActiveModal } from "../..";    
import JobsCard from "./JobsCard";
const JobListing = () => {

    const [activeModalState ,  setActiveModalState] = useContext(ActiveModal)
    return (
        <>
            <div
                className="container  overflow-scroll vh-100 card"
                style={{ marginTop: "80px" }}
            >
                <div className="row p-3">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <span className="fs-3">My Jobs</span>
                                <span className="fs-3"> : 102</span>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end ">
                        <button className="bgPrimary btn" onClick={()=>setActiveModalState("postajob")}><i className="fa fa-plus"></i> Post a job</button>
                    </div>
                </div>
                <div className="row mb-5">
                    <JobsCard />
                </div>
                <div className="row mb-5"></div>
            </div>
        </>
    );
};

export default JobListing;


