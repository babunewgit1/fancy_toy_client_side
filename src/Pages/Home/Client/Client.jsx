import React from "react";
import Marquee from "react-fast-marquee";
import c1 from "../../../assets/c1.webp";
import c2 from "../../../assets/c2.webp";
import c3 from "../../../assets/c3.webp";
import c4 from "../../../assets/c4.webp";
import c5 from "../../../assets/c5.webp";

const Client = () => {
  return (
    <section id="client" className="py-16 lg:py-24">
      <div className="mycontainer">
        <div className="clientWrapper">
          <div className="galleryHeading  pb-10">
            <h3 className="text-center text-4xl font-semibold">
              Our <span className="text-[#ED0EFD]">client</span>
            </h3>
            <p className="text-center text-xl font-medium mt-3">
              Meet our top <br /> clients & partners
            </p>
          </div>
          <div className="reactslide">
            <Marquee>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c1} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c2} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c3} alt="" />
              </div>
              <div className="marelemen w-[200px]t">
                <img className="block w-[80px] mx-auto" src={c4} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c5} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c1} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c2} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c3} alt="" />
              </div>
              <div className="marelemen w-[200px]t">
                <img className="block w-[80px] mx-auto" src={c4} alt="" />
              </div>
              <div className="marelement w-[200px]">
                <img className="block w-[80px] mx-auto" src={c5} alt="" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
