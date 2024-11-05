import React, { useEffect, useMemo, useState } from "react";
import ViewJob from "../componants/Common/viewJob";
import "../Style/jobview.css";
import JobCard from "../componants/Common/JobCard";
import useAPI from "../Hooks/USER/useAPI";
import Apply from "../componants/Profile/Apply";
import Cookies from "js-cookie";
import JobsNotFound from "../assets/JobsNotFound.json"
import Lottie from "lottie-react";
const JobsList = () => {

    const [jobs, setJobs] = useState([]);
    const [viewJob, setViewJob] = useState("");
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [user, setUser] = useState();
    const [length, setLength] = useState("");
    const [originalJobs, setOriginalJobs] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");

    const api = useAPI();

    const call = async () => {
        const data = await api.getREQUEST("fetchAll/jobs/0/0");
        setJobs(data);
        setOriginalJobs(data);
        setLength(data.length)
    };

    const User = async () => {
        const id = Cookies.get("id");
        const data = await api.getREQUEST(`profile/${id}`);
        setUser(data);
    };

    const search = async (keyword) => {
        try {
            const items = await api.getREQUEST(`jobs?title=${keyword}`);
            setJobs(items && items);
            setOriginalJobs(items);
            setLength(items.length);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    let filteredJobs = [...originalJobs];
    const handleSearch = (value) => {
        const city = user && user[0].location && user[0].location[0].city;
        if (value == "All") {
            setJobs(filteredJobs);
        }
        if (value == "City") {
            filteredJobs = filteredJobs.filter(
                (job) => job.company && job.company.Address && job.company.Address[0].city === city
            );
            setJobs(filteredJobs);
            setLength(filteredJobs.length)
        }
        if (value == "Date") {
            const currentDate = Date.now();
            console.log(currentDate);
            filteredJobs = filteredJobs.filter(
                (job) => new Date(job.JobPostedTime).getTime() === currentDate
            );
            setJobs(filteredJobs);
            setLength(filteredJobs.length)
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            search(keyword);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [keyword]);

    useEffect(() => {
        call();
        User();
    }, []);

    const onCardClick = (id) => {
        setViewJob(prev => {
            if (prev === id) {
                return ""
            } else {
                return id
            }
        });
    }

    const perFormSave = async (jobId) => {
        console.log(jobId);
        const userId = Cookies.get("id");
        const response = await api.postREQUEST("savedJob", JSON.stringify({ userId, jobId }))

    }

    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row-jobList">
                    <div className="col-jobList d-flex flex-column">
                        <span className="fs-3">Find your Future...</span>
                        <p>{length} Jobs</p> 
                    </div>
                    <div className="col-jobList">
                        <div className="job--input">
                            <input
                                type="text"
                                className="form-control h-80 w-100"
                                placeholder={"type to search"}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className="job--select">
                            <select
                                className="form-select h-80 w-100"
                                id=""
                                onChange={(e) => { handleSearch(e.target.value) }}
                            >
                                <option value="All" className="">
                                    Filter Jobs
                                </option>
                                <option value="Date" className="hand">
                                    Latest
                                </option>
                                <option value="Skills" className="hand">
                                    Based on your skills
                                </option>
                                <option value="City" className="hand">
                                    Near by you
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container allJobs">
                <div className="jobCard mt-5 gap-2 d-flex flex-column ">
                    {jobs.length > 0 ? (
                        jobs.map((e) => (
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
                                    location={`${e.company?.Address?.[0]?.city}, ${e.company?.Address?.[0]?.state}`}
                                    postedtime={e.JobPostedTime.split("T")[0]}
                                    salary={e.Salary}
                                    title={e.Title}
                                    companyLogo={e.company?.Logo}
                                />
                                {viewJob === e._id && (
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
                        ))
                    ) : (
                        <div className="d-flex justify-content-center  align-content-center">
                            <Lottie
                                animationData={JobsNotFound}
                                loop={true}
                                style={{ height: "40%", width: "40%" }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default JobsList;
