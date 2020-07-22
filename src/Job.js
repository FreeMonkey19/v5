import React, { useEffect, useState } from "react";
import './Job.css';
import { JobList } from "./JobList";

function Job() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}api/job_listings`).then((response) =>
      response.json().then((data) => {
        setJobs(data.jobs);
      })
    );
  }, []);

  console.log(jobs)

  return (
    <div className="job">
      <JobList jobs={jobs} />
    </div>
  );
}

export default Job;