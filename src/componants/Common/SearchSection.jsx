import React, { useCallback, useEffect, useState } from "react";
import SearchFilterTabs from "../Tabs/SearchFilterTabs";
import useAPI from "../../Hooks/USER/useAPI";
import ViewJob from "./viewJob";
import JobCard from "./JobCard";
import Cookies from "js-cookie";

const SearchSection = () => {
    const [jobType, setJobType] = useState("Remote");
    const [location, setLocation] = useState("");
    const [jobs, setJobs] = useState([]);
    const [viewJob, setViewJob] = useState("");
    const [visible, setVisible] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [length, setLength] = useState([]);
    const [searchJobs,setSearchJobs]=useState([]);
    const [originalJobs, setOriginalJobs] = useState([]);
    const api = useAPI();

    // const call = async () => {
    //     const data = await api.getREQUEST("fetchAll/jobs/0/0");
    //     setJobs(data);
    //     setOriginalJobs(data);
    //     setLength(data.length)
    // };
    useEffect(() => {
        const call = async () => {
            const data = await api.getREQUEST("fetchAll/jobs/0/0");
            setJobs(data);
            setOriginalJobs(data);
            setLength(data.length);
            filterJobs("Remote");
        };
        call();
    }, []);
    
    // useEffect(() => {
    //     call();
    //     filterJobs("Remote");
    // }, []);

    const onCardClick = (id) => {
        setViewJob(prev => {
            if (prev === id) {
                return ""
            } else {
                return id
            }
        });
    }

    const HandleSearch = useCallback( async () => {
        try {
            const items = await api.getREQUEST(`search?keyword=${keyword}&location=${location}&tbl=jobs`);
            if(items.length>0){
                setJobs(items);
                setOriginalJobs(items);
                setLength(items.length);
            }
            // console.log(jobs);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    } , [keyword , location])

    let filteredJobs = [...originalJobs];
    const filterJobs = (jobType) => {
        if (jobType) {
            filteredJobs = filteredJobs.filter(
                (job) => job.JobType === jobType
            );
            setJobType(jobType)
            setJobs(filteredJobs);
        }
    };

    const perFormSave = async (jobId) => {
        console.log(jobId);
        const userId = Cookies.get("id");
        const response = await api.postREQUEST("savedJob", JSON.stringify({ userId, jobId }))
    }

    return (
        <>
            <div className='center'>
                <div className="container border card p-5">
                    <div className="row">
                        <div className="col-md-10 ">
                            <div className="row g-2 mb-2">
                                <div className="col-md-6">
                                    <input type="text" className="form-control-default" placeholder="Job title , Keyword , Company" onChange={(e) => setKeyword(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <input list='location' className='form-control-default' placeholder='State , City ,zipcode' onChange={(e) => setLocation(e.target.value)} />
                                    <datalist id="location">
                                        {/* Render location options here */}
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-between align-items-center">
                            <button
                                className="btn bgbtn w-100"
                                onClick={() => {
                                    HandleSearch();
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ overflow: "scroll", height: "50vh" }}>
                    <h1 className="mt-4 text-center mb-4 fs-3 text-info ">{length} Result</h1>
                    <hr className="mb-4" />
                    <div className="tab-class text-center">
                        <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li className="nav-item">
                                <a className={`d-flex align-items-center text-start mx-3 ms-0 p-3 hand`} style={{ backgroundColor: jobType === "Remote" ? "#f0f0f0" : "transparent" }} onClick={() => filterJobs("Remote")}>
                                    <h6 className="mt-n1 mb-0">Remote</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`d-flex align-items-center text-start mx-3 p-3 hand `} style={{ backgroundColor: jobType === "FullTime" ? "#f0f0f0" : "transparent" }}  onClick={() => filterJobs("FullTime")}>
                                    <h6 className="mt-n1 mb-0">Full Time</h6>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className={`d-flex align-items-center text-start mx-3 me-0 p-3 hand `} style={{ backgroundColor: jobType === "PartTime" ? "#f0f0f0" : "transparent" }} onClick={() => filterJobs("PartTime")}>
                                    <h6 className="mt-n1 mb-0">Part Time</h6>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {jobs && jobs.map((e) => {
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
                                    location={`${e.company?.Address && e.company?.Address[0]?.city} , ${e.company?.Address&& e.company?.Address[0].state}`}
                                    postedtime={e.JobPostedTime.split("T")[0]}
                                    salary={e.Salary}
                                    title={e.Title}
                                    companyLogo={e.company && e.company.Logo}
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
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default SearchSection;



// import React, { useCallback, useEffect, useState } from "react";
// import SearchFilterTabs from "../Tabs/SearchFilterTabs";
// import useAPI from "../../Hooks/USER/useAPI";
// const SearchSection = () => {
//     const [keyword, setKeyWord] = useState("");
//     const [location, setLocation] = useState("");
//     const [jobs, setJobs] = useState([]);
//     const api = useAPI();
//     const HandleSearch = async () => {
//         try {
//             const items = await api.getREQUEST(search?keyword=${keyword}&location=${location}&tbl=jobs,);
//             setJobs(items && items);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
//     useEffect(() => {
//         HandleSearch();
//     }, [])

//     return (
//         <>
//             <div className='center'>
//                 <div class="container border card p-5">
//                     <div class="row">
//                         <div class="col-md-10 ">
//                             <div class="row g-2 mb-2">
//                                 <div class="col-md-6">
//                                     <input type="text" class="form-control-default " placeholder="Job title , Keyword , Company" onChange={(e) => setKeyWord(e.target.value)} />
//                                 </div>
//                                 <div class="col-md-6">
//                                     <input list='location' className='form-control-default' placeholder='State , City ,zipcode' onChange={(e) => setLocation(e.target.value)} />
//                                     <datalist id="location">
//                                         {/* {jobs.map((e) => {
//                                             return <option className='opt' value="Safari"}</option>
//                                         })} */}
//                                     </datalist>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-md-2 d-flex justify-content-between  align-items-center ">
//                             <button
//                                 class="btn bgbtn w-100"
//                                 onClick={() => {
//                                     HandleSearch();
//                                 }}
//                             >
//                                 Search
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container" style={{overflow:"scroll" , height:"50vh"}}>
//                     <h1 className="mt-4 text-center mb-4 fs-3 text-info ">Job Listing</h1>
//                     <hr className="mb-4" />
//                     <div className="tab-class text-center">
//                         <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
//                             <li className="nav-item">
//                                 <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
//                                     <h6 className="mt-n1 mb-0" onClick={() => {
//                                         setKeyWord("remote")
//                                     }}>Remote</h6>
//                                 </a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
//                                     <h6 className="mt-n1 mb-0" onClick={() => setKeyWord("fulltime")}>Full Time</h6>
//                                 </a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
//                                     <h6 className="mt-n1 mb-0" onClick={() => setKeyWord("parttime")}>Part Time</h6>
//                                 </a>
//                             </li>
//                         </ul>
//                         <div className="tab-content">
//                             {jobs.map((e) => {
//                                 return <SearchFilterTabs
//                                     title={e.Title}

//                                 />
//                             })
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SearchSection;