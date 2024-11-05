import React, { useEffect, useState } from 'react';
import useAPI from '../../Hooks/USER/useAPI';
import ViewJob from '../../componants/Common/viewJob';
import JobCard from '../../componants/Common/JobCard';
import Cookies from 'js-cookie';
    
const JobsCard = () => {
    const [jobs, setJobs] = useState([]);
    const [viewJob, setViewJob] = useState("");
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState("");
    const api =useAPI()
    const call = async () => {
        const data = await api.getREQUEST("fetchAll/jobs/0/0");
        setJobs(data);
    };
    const  onCardClick =(id) =>{
        setViewJob(prev=>{
            if(prev === id){
                return ""
            }else {
                return id
            }
        });
    }

    useEffect(() => {
        call();
    }, []);

    
    const perFormSave = async (jobId) => {
        console.log(jobId);
        const userId= Cookies.get("id");
        const response = await api.postREQUEST("savedJob" ,  JSON.stringify({userId , jobId}))
        
    }
    return (
        <div className="container allJobs"> 
                <div className="jobCard mt-5 gap-2 d-flex flex-column ">
                    {jobs?.map((e) => {
                        return (
                            <>
                                <JobCard
                                    onCardClick={onCardClick}
                                    setVisible={setVisible}
                                    visible={visible}
                                    viewJob={viewJob}
                                    jobtype={e.JobType}
                                    id={e._id}
                                    hidden={true}
                                    perFormSave={perFormSave}
                                    location={`${e.company && e.company?.Address[0].city
                                        } , ${e.company && e.company?.Address[0].state
                                        }`}
                                    postedtime={e.JobPostedTime.split("T")[0]}
                                    salary={e.Salary}
                                    title={e.Title}
                                    companyLogo={e.company && e.company.Logo}
                                />
                                {viewJob == e._id && (
                                    <div className="viewjobList">
                                        <ViewJob
                                            setViewJob={setViewJob}
                                            viewJob={viewJob}
                                            visible={visible}
                                            data={e}
                                        />
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
    );
};

export default JobsCard;
