import React, { useState, useEffect } from 'react';
import useAPI from "../../Hooks/USER/useAPI";
// import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const SavedJobsPage = () => {
  const api = useAPI();

  const { mutate, data: savedJobs = [] } = api.usePostREQUEST({
    PATH: "ListJob/true",
  });

  useEffect(() => {
    mutate(JSON.stringify({ userId: "65dd7d29cfa458000b182d10" }));
  }, []);

  console.log(savedJobs);

  return (
    <div>
      <h1>Saved Jobs</h1>
      {savedJobs.length === 0 ? (
        <p>No saved jobs found.</p>
      ) : (
        <ul>
          {savedJobs?.map((job) => (
            <li key={job._id}>
              <h3>{job.title}</h3>
              <p>{job.company.Name}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedJobsPage;
