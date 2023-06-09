import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="heroSlider relative">
      <Slider {...settings}>
        <div className="slideOne">
          <img
            className="w-full h-[500px] lg:h-[700px] object-cover"
            src={img1}
            alt="slide images"
          />
          <div data-aos="fade-up-left" className="innertext">
            <div className="innercontent text-white text-center space-y-8  px-16 lg:px-0">
              <h2 className="text-3xl lg:text-8xl  font-semibold">
                Pick the best toy <span className="text-[#ED0EFD]">truck</span>
              </h2>
              <p className="lg:text-2xl font-medium">
                We offer premium toy car, whether you are shopping{" "}
                <br className="hidden lg:block" /> at one of our actual stores
                or via our website!
              </p>
              <Link
                className="inline-block text-white bg-[#ED0EFD] font-xl font-medium rounded-md px-6 py-4 hover:opacity-70"
                to="/alltoy"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[500px] lg:h-[700px] object-cover"
            src={img2}
            alt="slide images"
          />
          <div data-aos="fade-down-right" className="innertext">
            <div className="innercontent text-white text-center space-y-8 px-16 lg:px-0">
              <h2 className="text-3xl lg:text-8xl  font-semibold">
                Pick the best toy <span className="text-[#ED0EFD]">Bus</span>
              </h2>
              <p className="lg:text-2xl font-medium">
                We offer premium toy car, whether you are shopping <br /> at one
                of our actual stores or via our website!
              </p>
              <Link
                className="inline-block text-white bg-[#ED0EFD] font-xl font-medium rounded-md px-6 py-4 hover:opacity-70"
                to="/alltoy"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[500px] lg:h-[700px] object-cover"
            src={img3}
            alt="slide images"
          />
          <div data-aos="fade-up-right" className="innertext">
            <div className="innercontent text-white text-center space-y-8 px-16 lg:px-0">
              <h2 className="text-3xl lg:text-8xl  font-semibold">
                Pick the best toy{" "}
                <span className="text-[#ED0EFD]">Micro Bus</span>
              </h2>
              <p className="lg:text-2xl font-medium">
                We offer premium toy car, whether you are shopping <br /> at one
                of our actual stores or via our website!
              </p>
              <Link
                className="inline-block text-white bg-[#ED0EFD] font-xl font-medium rounded-md px-6 py-4 hover:opacity-70"
                to="/alltoy"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[500px] lg:h-[700px] object-cover"
            src={img4}
            alt="slide images"
          />
          <div data-aos="fade-up-right" className="innertext">
            <div className="innercontent text-white text-center space-y-8 px-16 lg:px-0">
              <h2 className="text-3xl lg:text-8xl  font-semibold">
                Pick the best toy{" "}
                <span className="text-[#ED0EFD]">Police car</span>
              </h2>
              <p className="lg:text-2xl font-medium">
                We offer premium toy car, whether you are shopping <br /> at one
                of our actual stores or via our website!
              </p>
              <Link
                className="inline-block text-white bg-[#ED0EFD] font-xl font-medium rounded-md px-6 py-4 hover:opacity-70"
                to="/alltoy"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[500px] lg:h-[700px] object-cover"
            src={img5}
            alt="slide images"
          />
          <div data-aos="fade-up-right" className="innertext">
            <div className="innercontent text-white text-center space-y-8 px-16 lg:px-0">
              <h2 className="text-3xl lg:text-8xl  font-semibold">
                Pick the best toy <span className="text-[#ED0EFD]">Others</span>
              </h2>
              <p className="lg:text-2xl font-medium">
                We offer premium toy car, whether you are shopping <br /> at one
                of our actual stores or via our website!
              </p>
              <Link
                className="inline-block text-white bg-[#ED0EFD] font-xl font-medium rounded-md px-6 py-4 hover:opacity-70 duration-300"
                to="/alltoy"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
