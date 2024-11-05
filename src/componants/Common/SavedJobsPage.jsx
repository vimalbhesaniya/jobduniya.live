import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const SavedJobsPage = () => {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        async function fetchSavedJobs() {
            try {
                const response = await fetch('http://localhost:5500/ListJob/true', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ userId: '65dd7d29cfa458000b182d10' })
                });

                if (!response) {
                    throw new Error('Failed to fetch saved jobs');
                }

                const data = await response.json();
                setSavedJobs(data);
            } catch (error) {
                console.error('Error Fetching Jobs : ', error);
            }
        }
        fetchSavedJobs();
    }, []);
    console.log(savedJobs);
    
    return (
        <div>
            <h1>Saved Jobs</h1>
            {/* {savedJobs.length === 0 ? (
                <p>No saved jobs found.</p>
            ) : (
                <ul>
                    {savedJobs.map(job => (
                        <li key={job._id}>
                            <h3>{job.title}</h3>
                            <p>{job.company.Name}</p> 
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
}

export default SavedJobsPage;
