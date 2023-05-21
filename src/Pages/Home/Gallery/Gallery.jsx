import React, { useEffect } from "react";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";
import car4 from "../../../assets/car4.png";
import car5 from "../../../assets/car5.png";
import car6 from "../../../assets/car6.png";
import car7 from "../../../assets/car7.png";
import car8 from "../../../assets/car8.png";
import car9 from "../../../assets/car9.png";
import car10 from "../../../assets/car10.png";
import car11 from "../../../assets/car11.png";
import car12 from "../../../assets/car12.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="Gallery">
      <div className="mycontainer">
        <div className="galleryHeading pt-10 lg:pt-20 pb-10">
          <h3 className="text-center text-4xl font-semibold">
            Toy <span className="text-[#ED0EFD]">Gallery</span>
          </h3>
        </div>
      </div>
      <div className="gellaryBody">
        <div className="mycontainer">
          <div className="toygWrapper grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              data-aos="fade-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car1}
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car2}
                alt=""
              />
            </div>
            <div
              data-aos="fade-up-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car3}
                alt=""
              />
            </div>
            <div
              data-aos="fade-up-left"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car4}
                alt=""
              />
            </div>
            <div
              data-aos="fade-down-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car5}
                alt=""
              />
            </div>
            <div
              data-aos="fade-down-left"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car6}
                alt=""
              />
            </div>
            <div
              data-aos="fade-up-left"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car7}
                alt=""
              />
            </div>
            <div
              data-aos="fade-up-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car8}
                alt=""
              />
            </div>
            <div
              data-aos="fade-left"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car9}
                alt=""
              />
            </div>
            <div
              data-aos="fade-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car10}
                alt=""
              />
            </div>
            <div
              data-aos="fade-down-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car11}
                alt=""
              />
            </div>
            <div
              data-aos="fade-up-right"
              className="toyImg border-4 border-[#12CCE1] overflow-hidden"
            >
              <img
                className="w-full h-full object-cover block hover:scale-150 duration-300"
                src={car12}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
