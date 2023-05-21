import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  const detailsData = useLoaderData();
  useTitle("Toy car zone | Toy Details");

  return (
    <section id="toyDetails" className="py-20">
      <div className="mycontainer">
        <div className="detailsHeading">
          <h3 className="text-center text-4xl font-semibold">
            Details for
            <span className="text-[#ED0EFD]">
              <span> {detailsData?.toy_name}</span>
            </span>
          </h3>
        </div>
        <div className="toyDetailswrapper mt-10 grid grid-cols-2 gap-7 items-center shadow-lg rounded-lg overflow-hidden">
          <div className="toyDetailsImg h-full">
            <img
              className="w-full h-full object-cover"
              src={
                detailsData?.pic_url
                  ? detailsData?.pic_url
                  : "https://i.ibb.co/QMPVpJ6/360-F-400243185-BOx-ON3h9av-MUX10-Rs-Dkt3p-J8i-Qx72k-S3.jpg"
              }
              alt=""
            />
          </div>
          <div className="toyInfo py-5">
            <h2 className="text-4xl font-semibold mb-5">
              {detailsData?.toy_name}
            </h2>
            <p className="text-xl mt-2">
              <strong>Seller name :</strong> {detailsData?.seller_name}
            </p>
            <p className="text-xl mt-2">
              <strong>Seller email :</strong> {detailsData?.seller_email}
            </p>
            <p className="text-xl mt-2">
              <strong>Price :</strong> {detailsData?.price} USD
            </p>
            <p className="text-xl mt-2">
              <strong>Rating :</strong> {detailsData?.rating}
            </p>
            <p className="text-xl mt-2">
              <strong>Available quantity :</strong> {detailsData?.quentity}
            </p>
            <p className="text-xl mt-2">
              <strong>Description :</strong> {detailsData?.discription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
