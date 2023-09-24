import {useEffect, useState} from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [datalength, setDatalength] = useState(4);
  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
        Featured Jobs
      </h1>
      <p className="text-black opacity-50 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 ">
        {jobs.slice(0, datalength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <button
        onClick={() => setDatalength(jobs.length)}
        className={`btn btn-sm md:btn-md bg-blue-600 border-none hover:border-none text-white font-bold capitalize w-fit hover:bg-blue-800 mb-10 ${
          jobs.length === datalength ? "hidden" : ""
        }`}
      >
        see all jobs
      </button>
    </div>
  );
};

export default FeaturedJobs;
