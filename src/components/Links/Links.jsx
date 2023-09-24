import {NavLink} from "react-router-dom";

const Links = () => {
  return (
    <>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/jobs"}>Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
    </>
  );
};

export default Links;
