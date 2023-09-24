import {NavLink} from "react-router-dom";
import Links from "./../Links/Links";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-5 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn bg-transparent hover:bg-transparent hover:text-blue-600 border-none mr-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-7 md:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box md:w-52"
          >
            <Links />
          </ul>
        </div>
        <NavLink to={"/"}>
          <span className="font-black text-xl md:text-3xl cursor-pointer">
            Career<span className="text-info">Hub</span>
          </span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm md:btn-md bg-blue-600 border-none hover:border-none text-white font-bold capitalize w-fit hover:bg-blue-800">
          <span className="hidden md:block">Start Applying</span>
          <span className="block md:hidden">Apply</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
