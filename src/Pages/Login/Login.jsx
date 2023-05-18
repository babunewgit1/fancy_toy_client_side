import React, { useContext } from "react";
import { FaLock, FaEnvelopeOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";
import Googlelogin from "../Shared/Googlelogin/Googlelogin";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { customSignIn } = useContext(AuthContext);

  const onSubmit = (data, event) => {
    if (!data.email || !data.password) {
      toast.error("email or password can't be empty");
      return;
    }

    customSignIn(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User login successfull!!!");
        event.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section id="login" className="login py-28">
      <div className="loginWrapper max-w-[555px] px-3 mx-auto">
        <div className="loginContent bg-white rounded-md p-10">
          <div className="loginHeading">
            <h3 className="text-4xl font-semibold text-center mb-5">Login</h3>
          </div>
          <div className="loginForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="loginFromWrapper">
                <div className="loginInput ">
                  <div className="inputbox relative mt-2">
                    <input
                      {...register("email")}
                      className="block w-full  border-b-2 border-[#B825E2] outline-0 px-8 py-3"
                      type="email"
                      placeholder="Enter your email"
                    />
                    <span className="text-[#B825E2]">
                      <FaEnvelopeOpen className="absolute left-0 top-[31%]"></FaEnvelopeOpen>
                    </span>
                  </div>
                </div>
                <div className="loginInput mt-4">
                  <div className="inputbox relative mt-2">
                    <input
                      {...register("password")}
                      autoComplete="off"
                      className="block w-full  border-b-2 border-[#B825E2] outline-0 px-8 py-3"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    <span className="text-[#B825E2]">
                      <FaLock className="absolute  left-0 top-[31%]"></FaLock>
                    </span>
                  </div>
                </div>
                <div className="submitbutton mt-10">
                  <button
                    className="text-white text-xl py-3 block w-full rounded-full font-medium"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
            <Googlelogin></Googlelogin>
            <div className="haveAccount mt-8">
              <p className="font-medium text-center">
                Have not account yet ? Please{" "}
                <Link to="/signup">
                  <span className="text-[#B825E2]">signUp.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
