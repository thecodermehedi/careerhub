import {useNavigate, useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-5xl font-black">{error.status} </h1>
      <p className="text-xl py-5">{error.data}</p>
      <p className="text-lg underline text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm mt-5 btn-outline btn-success "
      >
        Back
      </button>
    </div>
  );
};

export default ErrorPage;
