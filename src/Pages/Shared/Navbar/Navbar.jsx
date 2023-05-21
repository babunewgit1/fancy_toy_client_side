import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvidor/AuthProvidor";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  const { currentUser, logOut } = useContext(AuthContext);
  console.log(currentUser);

  const handelSignOut = () => {
    return logOut()
      .then(() => {
        toast.success("User signout successfull!!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section id="navbar" className="py-3 sticky top-0 z-[999] bg-white">
      <div className="mycontainer">
        <div className="navbarWrapper lg:flex items-center justify-between">
          <div className="logo flex items-center justify-between">
            <div className="logosection">
              <NavLink to="/">
                <img
                  className="block w-[140px] sm:w-[180px] lg:w-[200px]"
                  src={logo}
                  alt="logo images"
                />
              </NavLink>
            </div>
            <div className="bar flex items-center gap-2 lg:hidden">
              <div className="extraitems">
                <ul className="flex items-center gap-3">
                  {!currentUser && (
                    <li className="lg:mt-0 loginbuton">
                      <NavLink
                        className="text-white  px-3 py-2 sm:px-5 sm:py-3 rounded-full bg-button inline-block "
                        to="/login"
                      >
                        Login
                      </NavLink>
                    </li>
                  )}
                  {currentUser && (
                    <li className="relative profilePic">
                      <img
                        className="w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 border-red-500"
                        src={currentUser.photoURL}
                        alt=""
                      />
                      <span className="absolute text-sm whitespace-nowrap bg-red-500 text-white font-medium rounded-md px-2 py-2">
                        {currentUser.displayName && currentUser.displayName}
                      </span>
                    </li>
                  )}

                  {currentUser && (
                    <li className="lg:mt-0 ">
                      <button
                        className=" text-white  sm:px-5 sm:py-3 px-3 py-2 rounded-full bg-button"
                        onClick={handelSignOut}
                      >
                        Logout
                      </button>
                    </li>
                  )}
                </ul>
              </div>
              <FaBars
                onClick={() => setNavbar(!navbar)}
                className="w-7 h-7 text-[#186CCC] cursor-pointer"
              ></FaBars>
            </div>
          </div>
          <div
            className={`menuItems  lg:block  ml-7 lg:ml-0 ${
              navbar && "hidden"
            }`}
          >
            <ul className="lg:flex  items-center gap-5  font-medium">
              <li className="mt-3 lg:mt-0">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="mt-3 lg:mt-0">
                <NavLink to="/alltoy">All Toys</NavLink>
              </li>
              <li className="mt-3 lg:mt-0">
                <NavLink to="/mytoys">My Toys</NavLink>
              </li>
              <li className="mt-3 lg:mt-0">
                <NavLink to="/addtoy">Add A Toy</NavLink>
              </li>
              <li className="mt-3 lg:mt-0">
                <NavLink to="/blog">Blogs</NavLink>
              </li>
              {!currentUser && (
                <li className="mt-3 lg:mt-0 loginbuton hidden lg:block">
                  <NavLink
                    className="text-white px-6 py-3 rounded-full bg-button inline-block "
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {currentUser && (
                <li className="relative profilePic hidden lg:block">
                  <img
                    className="w-11 h-11 rounded-full border-2 border-red-500"
                    src={currentUser.photoURL}
                    alt="profile pic"
                  />
                  <span className="absolute whitespace-nowrap bg-red-500 text-white font-medium rounded-md px-4 py-2">
                    {currentUser.displayName && currentUser.displayName}
                  </span>
                </li>
              )}

              {currentUser && (
                <li className="mt-3 lg:mt-0 hidden lg:block">
                  <button
                    className=" text-white px-6 py-3 rounded-full bg-button"
                    onClick={handelSignOut}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </section>
  );
};

export default Navbar;
