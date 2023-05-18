import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <img className="block w-[280px]" src={logo} alt="logo images" />
            </Link>
            <div onClick={() => setNavbar(!navbar)} className="bar lg:hidden">
              <FaBars className="w-7 h-7 text-[#186CCC] cursor-pointer"></FaBars>
            </div>
          </div>
          <div
            className={`menuItems  lg:block  ml-7 lg:ml-0 ${
              navbar && "hidden"
            }`}
          >
            <ul className="lg:flex  items-center gap-5  font-medium">
              <li className="mt-3 lg:mt-0">
                <Link to="/">Home</Link>
              </li>
              <li className="mt-3 lg:mt-0">
                <Link to="/">All Toys</Link>
              </li>
              {currentUser && (
                <li className="mt-3 lg:mt-0">
                  <Link to="/">My Toys</Link>
                </li>
              )}
              {currentUser && (
                <li className="mt-3 lg:mt-0">
                  <Link to="/">Add A Toy</Link>
                </li>
              )}
              <li className="mt-3 lg:mt-0">
                <Link to="/">Blogs</Link>
              </li>
              {!currentUser && (
                <li className="mt-3 lg:mt-0">
                  <Link to="/login">Login</Link>
                </li>
              )}
              {currentUser && (
                <li className="relative profilePic">
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
                <li className="mt-3 lg:mt-0">
                  <button onClick={handelSignOut}>Logout</button>
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
