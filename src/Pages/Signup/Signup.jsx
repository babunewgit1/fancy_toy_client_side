import React, { useContext } from "react";
import {
  FaLock,
  FaGoogle,
  FaRegUserCircle,
  FaEnvelopeOpen,
  FaPhotoVideo,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import Googlelogin from "../Shared/Googlelogin/Googlelogin";
import useTitle from "../../hooks/useTitle";

const Signup = () => {
  useTitle("Toy car zone | Sign Up");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm();
  const { customLogin } = useContext(AuthContext);

  const onSubmit = (data, event) => {
    if (!data.email || !data.password) {
      toast.error("email or password can't be empty");
      return;
    }

    if (!/(?=.*[A-Z])/.test(data.password)) {
      return toast.error("Password must have 1 uppercase character");
    } else if (data.password.length < 6) {
      return toast.error("Password must have 6 character");
    }

    customLogin(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: data.name,
          photoURL: data.photo_url,
        });
        toast.success("User signup completed!!!!!");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section id="login" className="login py-16">
      <div className="loginWrapper max-w-[555px] px-3 mx-auto">
        <div className="loginContent bg-white rounded-md p-4 md:p-10">
          <div className="loginHeading">
            <h3 className="text-4xl font-semibold text-center mb-5">Signup</h3>
          </div>
          <div className="loginForm">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="loginFromWrapper">
                <div className="loginInput ">
                  <div className="inputbox relative mt-2">
                    <input
                      {...register("name")}
                      className="block w-full  border-b-2 border-[#B825E2] outline-0 px-8 py-3"
                      type="text"
                      placeholder="Enter your name"
                    />
                    <span className="text-[#B825E2]">
                      <FaRegUserCircle className="absolute left-0 top-[31%]"></FaRegUserCircle>
                    </span>
                  </div>
                </div>
                <div className="loginInput mt-4">
                  <div className="inputbox relative mt-2">
                    <input
                      required
                      {...register("email")}
                      className="block w-full  border-b-2 border-[#B825E2] outline-0 px-8 py-3"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                    <span className="text-[#B825E2]">
                      <FaEnvelopeOpen className="absolute  left-0 top-[31%]"></FaEnvelopeOpen>
                    </span>
                  </div>
                </div>
                <div className="loginInput mt-4">
                  <div className="inputbox relative mt-2">
                    <input
                      autoComplete="off"
                      {...register("password")}
                      className="block w-full  border-b-2 border-[#B825E2] outline-0 px-8 py-3"
                      type="password"
                      placeholder="Enter Your Password"
                    />
                    <span className="text-[#B825E2]">
                      <FaLock className="absolute  left-0 top-[31%]"></FaLock>
                    </span>
                  </div>
                </div>
                <div className="loginInput mt-4">
                  <div className="inputbox relative mt-2">
                    <input
                      {...register("photo_url")}
                      className="block w-full  border-b-2 border-[#B825E2] outline-0 px-8 py-3"
                      type="url"
                      placeholder="Enter Your Photo Url"
                    />
                    <span className="text-[#B825E2]">
                      <FaPhotoVideo className="absolute  left-0 top-[31%]"></FaPhotoVideo>
                    </span>
                  </div>
                </div>
                <div className="submitbutton mt-10">
                  <button
                    className="text-white text-xl py-3 block w-full rounded-full font-medium"
                    type="submit"
                  >
                    Signup
                  </button>
                </div>
              </div>
            </form>

            <div className="haveAccount mt-8">
              <p className="font-medium text-center">
                Already have an account? Please
                <Link to="/login">
                  <span className="text-[#B825E2]"> logIn.</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </section>
  );
};

export default Signup;
