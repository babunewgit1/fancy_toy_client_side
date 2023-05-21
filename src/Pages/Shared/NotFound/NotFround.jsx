import React from "react";
import notfound from "../../../assets/404.png";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const NotFround = () => {
  useTitle("Toy car zone | 404");
  return (
    <div className="h-screen text-center relative">
      <img
        className="w-full h-full object-cover"
        src={notfound}
        alt="not found page"
      />
      <div className="absolute w-full bottom-5">
        <Link
          className="text-white text-2xl bg-[#ED0EFD] font-semibold py-4 px-20 inline-block "
          to="/"
        >
          Go To HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFround;
