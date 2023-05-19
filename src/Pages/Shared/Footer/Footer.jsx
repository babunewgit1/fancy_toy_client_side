import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/fl.png";
import {
  FaEnvelope,
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-[#172B4D]">
      <div className="mycontainer">
        <div className="footer-wrapper flex justify-between py-12">
          <div className="footerLogo">
            <Link to="/">
              <img src={logo} alt="footer logo" />
            </Link>
            <ul className="flex items-center gap-4 mt-5">
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaFacebookF></FaFacebookF>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaTwitter></FaTwitter>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaInstagram></FaInstagram>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="w-10 h-10 bg-white hover:bg-[#FF3300] hover:text-white rounded-full flex items-center justify-center">
                    <FaLinkedinIn></FaLinkedinIn>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2 className="text-2xl font-medium text-white mb-5">
              Contact Info
            </h2>
            <ul className="text-white">
              <li className="flex gap-5">
                <span className="mt-[5px]">
                  <FaEnvelope></FaEnvelope>
                </span>
                <div className="mail">
                  <p>xyz@gmail.com</p>
                  <p>zxr@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-5 mt-5">
                <span className="mt-[5px]">
                  <FaPhoneSquareAlt></FaPhoneSquareAlt>
                </span>
                <div className="mail">
                  <p>+8801000000000</p>
                  <p>+8802222222000</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2 className="text-2xl font-medium text-white mb-5">Address</h2>
            <ul>
              <li className="flex gap-5 text-white">
                <span className="mt-[5px]">
                  <FaMapMarkerAlt></FaMapMarkerAlt>
                </span>
                <div className="mail">
                  <p className="mb-2">Head offce</p>
                  <p>
                    3101 Chestnut Street <br />
                    Tampa, FL 33610
                  </p>
                </div>
              </li>
              <li className="flex gap-5 text-white">
                <span className="mt-[5px]">
                  <FaMapMarkerAlt></FaMapMarkerAlt>
                </span>
                <div className="mail mt-5">
                  <p className="mb-2">Sub offce</p>
                  <p>
                    1045 Stockert Hollow Road <br />
                    Redmond, WA 98052
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
