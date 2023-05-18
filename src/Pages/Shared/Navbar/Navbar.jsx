import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);
  return (
    <section id="navbar" className="py-4">
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
              <li className="mt-3 lg:mt-0">
                <Link to="/">My Toys</Link>
              </li>
              <li className="mt-3 lg:mt-0">
                <Link to="/">Add A Toy</Link>
              </li>
              <li className="mt-3 lg:mt-0">
                <Link to="/">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
