import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ContextProvider } from "../../../AuthContext/AuthProvider";
import user_avatar from "../../../assets/user.jpg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {
    const { user, logout } = useContext(ContextProvider);
    const handleLogout=()=>{
        logout()
        .then(() => {
          toast("Your are Logged Out !");
          window.location.reload()
        }).catch();
    }

    

    const list = (
      <>
        <li>
          <NavLink className="ml-6 text-xl" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="ml-6 text-xl" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="ml-6 text-xl" to="/career">
            Career
          </NavLink>
        </li>

        <li>
          <NavLink className="ml-6 text-xl" to="/Service">
            Service
          </NavLink>
        </li>

        <li>
          <NavLink className="ml-6 text-xl" to="/Contact">
            Contact Us
          </NavLink>
        </li>
      </>
    );
    return (
      <div>
        <div className="navbar bg-base-100 w-full mx-auto mt-10 shadow-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {list}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">IB Edu-Care</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{list}</ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end mr-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user_avatar} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={(handleLogout)}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              " "
            )}
            {user ? (
              ""
            ) : (
              <div className="flex ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user_avatar} />
                  </div>
                </label>
                <Link to="/login" className="btn">
                  LogIn
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;