import React from "react";
import ipic1 from "../../../assets/i1.webp";
import ipic2 from "../../../assets/i2.webp";
import ipic3 from "../../../assets/i3.webp";
import ipic4 from "../../../assets/i4.webp";

const Aboutus = () => {
  return (
    <section id="aboutus" className="bg-[#F5F6F7] py-24">
      <div className="mycontainer">
        <div className="aboutusWrapper">
          <div className="galleryHeading  pb-10">
            <h3 className="text-center text-4xl font-semibold">
              About <span className="text-[#ED0EFD]">us</span>
            </h3>
            <p className="text-center text-xl font-medium mt-3">
              We make your children happier <br /> with the best toys
            </p>
          </div>
          <div className="gelleryWrapper grid grid-cols-4 gap-8">
            <div className="gellerybox bg-white rounded-2xl p-12 shadow-sm text-center">
              <img
                className="block w-[80px] h-[80px] object-cover mx-auto"
                src={ipic1}
                alt="icon pic"
              />
              <h4 className="text-2xl font-medium mt-6">Big Selection</h4>
              <p className="text-base mt-1 opacity-50">The widest toy range.</p>
            </div>
            <div className="gellerybox bg-white rounded-2xl p-12 shadow-sm text-center">
              <img
                className="block w-[80px] h-[80px] object-cover mx-auto"
                src={ipic2}
                alt="icon pic"
              />
              <h4 className="text-2xl font-medium mt-6">Online Store</h4>
              <p className="text-base mt-1 opacity-50">
                Easiest online shopping.
              </p>
            </div>
            <div className="gellerybox bg-white rounded-2xl p-12 shadow-sm text-center">
              <img
                className="block w-[80px] h-[80px] object-cover mx-auto"
                src={ipic3}
                alt="icon pic"
              />
              <h4 className="text-2xl font-medium mt-6">Delivery</h4>
              <p className="text-base mt-1 opacity-50">
                Fast and easy delivery.
              </p>
            </div>
            <div className="gellerybox bg-white rounded-2xl p-12 shadow-sm text-center">
              <img
                className="block w-[80px] h-[80px] object-cover mx-auto"
                src={ipic4}
                alt="icon pic"
              />
              <h4 className="text-2xl font-medium mt-6">Support</h4>
              <p className="text-base mt-1 opacity-50">
                Call our awesome team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
