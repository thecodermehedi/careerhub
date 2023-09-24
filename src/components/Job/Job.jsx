import PropTypes from "prop-types";
import {CiLocationOn} from "react-icons/ci";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
const Job = ({job}) => {
  const {
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    id,
  } = job;
  return (
    <div className="card card-compact w-fit lg:w-96 bg-black bg-opacity-10 shadow-xl">
      <div className="card-body">
        <h2 className="card-title font-bold text-black text-opacity-80">
          {job_title}
        </h2>
        <p className="font-bold text-black text-opacity-60">{company_name}</p>
        <div className="card-actions ">
          <button className="btn btn-xs btn-outline text-blue-600 font-bold capitalize hover:bg-transparent hover:text-blue-600">
            {remote_or_onsite}
          </button>
          <button className="btn btn-xs btn-outline text-blue-600 font-bold capitalize hover:bg-transparent hover:text-blue-600">
            {job_type}
          </button>
        </div>
        <p className="flex items-center">
          <span className="mr-5 md:mr-10 flex items-center gap-2">
            <CiLocationOn /> {location}
          </span>
          <span className="flex items-center gap-2">
            <AiOutlineDollarCircle /> {salary}
          </span>
        </p>
        <Link to={`/job/${id}`}>
          <button className="btn btn-sm  bg-blue-600 border-none hover:border-none text-white font-bold capitalize w-fit hover:bg-blue-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
