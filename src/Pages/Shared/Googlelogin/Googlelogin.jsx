import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvidor/AuthProvidor";
import { FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Googlelogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handelgoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("User login successfull!!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="or text-center mt-12">
      <p className="inline-block bg-white px-5 relative z-20">
        Or Sign Up Using
      </p>
      <span className="w-full h-[1px] bg-[#B825E2] block relative -z-1"></span>
      <button onClick={handelgoogleLogin} className="mt-10">
        <span className="mx-auto h-11 w-11 rounded-full bg-[#EA4235] flex items-center justify-center text-white duration-300 hover:bg-[#00DBDE]">
          <FaGoogle></FaGoogle>
        </span>
      </button>
      <Toaster></Toaster>
    </div>
  );
};

export default Googlelogin;
