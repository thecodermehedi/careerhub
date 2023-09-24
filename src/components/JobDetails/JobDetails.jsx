import {useLoaderData, useParams} from "react-router-dom";
import {AiOutlineDollarCircle} from "react-icons/ai";
import {MdTitle} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {GrLocation} from "react-icons/gr";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {saveJobApplication} from "../../utility/localstorage";
import {useNavigate} from "react-router-dom";
const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const handleApplyJob = () => {
    const isExists = saveJobApplication(idInt);
    !isExists
      ? toast.success("You have applied successfully")
      : toast.warning("You have already applied to this");
  };
  const navigate = useNavigate();
  return (
    <div className="p-20 text-center">
      <h1 className="text-center font-bold text-2xl">Job Details</h1>
      <h2 className=" text-center font-bold text-xl opacity-80">
        {job?.job_title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center g-4 p-10">
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-bold text-black">Job Description:</span>{" "}
            {job?.job_description}
          </p>
          <p>
            <span className="font-bold text-black">Job Responsibility:</span>{" "}
            {job?.job_responsibility}
          </p>
          <p className="font-bold text-black">Educational Requirements:</p>
          <p>{job?.educational_requirements}</p>
          <p className="font-bold text-black">Experiences:</p>
          <p>{job?.experiences}</p>
        </div>
        <div>
          <div className="bg-blue-500 bg-opacity-20 p-8 rounded-xl">
            <p className="font-bold text-black">Job Details</p>
            <hr className="border-blue-500 border-opacity-20 w-full my-5" />
            <p className="flex items-center gap-2 ">
              <span className="text-blue-600 font-bold">
                <AiOutlineDollarCircle />
              </span>
              <span className="font-bold text-opacity-8s0">Salary :</span>
              <span>{job?.salary} (Per Month)</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-blue-600 font-bold">
                <MdTitle />
              </span>
              <span className="font-bold text-opacity-8s0">Job Title :</span>
              <span>{job?.job_title}</span>
            </p>
            <p className="font-bold text-black pt-5">Contact Information</p>
            <hr className="border-blue-500 border-opacity-20 w-full my-5" />
            <p className="flex items-center gap-2 ">
              <span className="text-blue-600 font-bold">
                <BsTelephone />
              </span>
              <span className="font-bold text-opacity-8s0">Phone :</span>
              <span>{job?.contact_information?.phone}</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-blue-600 font-bold">
                <HiOutlineMail />
              </span>
              <span className="font-bold text-opacity-8s0">Email :</span>
              <span>{job?.contact_information?.email}</span>
            </p>
            <p className="flex items-center gap-2 ">
              <span className="text-blue-600 font-bold">
                <GrLocation />
              </span>
              <span className="font-bold text-opacity-8s0">Address :</span>
              <span>{job?.contact_information?.address}</span>
            </p>
          </div>
          <button
            onClick={handleApplyJob}
            className="btn mt-5 w-full capitalize btn-md  bg-blue-600 border-none hover:border-none text-white font-bold hover:bg-blue-800"
          >
            Apply Now
          </button>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm mt-5 btn-outline btn-success"
      >
        Back
      </button>
      <ToastContainer autoClose={1000} theme="dark" closeOnClick />
    </div>
  );
};

export default JobDetails;
