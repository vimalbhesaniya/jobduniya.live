import React, { useEffect, useMemo, useState } from "react";
import ViewJob from "../componants/Common/viewJob";
import "../Style/jobview.css";
import JobCard from "../componants/Common/JobCard";
import useAPI from "../Hooks/USER/useAPI";
import Apply from "../componants/Profile/Apply";
import Cookies from "js-cookie";
import JobsNotFound from "../assets/JobsNotFound.json";
import Lottie from "lottie-react";
import { useDebounceValue } from "usehooks-ts";
const JobsList = () => {
  const [viewJob, setViewJob] = useState("");
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState();
  const [length, setLength] = useState("");
  const [originalJobs, setOriginalJobs] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const { useGetRequest, usePostREQUEST } = useAPI();

  const { data: jobs, refetch } = useGetRequest({
    key: ["jobs"],
    enabled: true,
    PATH: `jobs?title=${keyword}`,
    initialData: [],
  });

  const  [searchInput] = useDebounceValue(keyword , 3000)

  useEffect(() => {
    refetch();
  }, [searchInput]);

  const onCardClick = (id) => {
    setViewJob((prev) => {
      if (prev === id) {
        return "";
      } else {
        return id;
      }
    });
  };

  const userId = Cookies.get("id");

  const { mutate } = usePostREQUEST({
    PATH: "savedJob",
  });

  const perFormSave = async (jobId) => {
    mutate(JSON.stringify({ userId, jobId }));
  };

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row-jobList">
          <div className="col-jobList d-flex flex-column">
            <span className="fs-3">Find your Future...</span>
            <p>{jobs?.length ?? 0} Jobs found</p>
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
              <select className="form-select h-80 w-100" id="">
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
