import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import {getStoredJobApplication} from "../../utility/localstorage";
import Job from "../Job/Job";
import {AiOutlineDown} from "react-icons/ai";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        job ? jobsApplied.push(job) : "";
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-5 md:px-10 lg:px-20">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl my-10">
        Applied Jobs : {appliedJobs.length}
      </h1>
      <div className="text-right">
        <div className="dropdown dropdown-bottom dropdown-end mr-16">
          <label tabIndex={0} className="btn btn-sm m-1 capitalize">
            Filter By <AiOutlineDown />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleJobsFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 p-5 m-10 border border-solid border-gray-400 rounded-xl">
          {displayJobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
