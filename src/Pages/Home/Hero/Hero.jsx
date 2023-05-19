import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/1.jpg";
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="heroSlider relative">
      <Slider {...settings}>
        <div className="slideOne">
          <img
            className="w-full h-[700px] object-cover"
            src={img1}
            alt="slide images"
          />
          <div className="innertext">
            <h2>Pick the best toy truck</h2>
            <p>
              We offer premium toy car, whether you are shopping <br /> at one
              of our actual stores or via our website!
            </p>
            <Link to="/">Discover </Link>
          </div>
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[700px] object-cover"
            src={img2}
            alt="slide images"
          />
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[700px] object-cover"
            src={img3}
            alt="slide images"
          />
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[650px] object-cover"
            src={img4}
            alt="slide images"
          />
        </div>
        <div className="slideOne">
          <img
            className="w-full h-[650px] object-cover"
            src={img5}
            alt="slide images"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
