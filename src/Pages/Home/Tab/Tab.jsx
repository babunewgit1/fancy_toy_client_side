import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../../AuthProvidor/AuthProvidor";
import Swal from "sweetalert2";

const Tab = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [catagory, setCatagory] = useState("sports car");
  const [filterData, setFilterData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://back-end-two-alpha.vercel.app/alltoy/${catagory}`)
      .then((res) => res.json())
      .then((filterToy) => {
        setFilterData(filterToy);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [catagory]);

  const handelAlert = () => {
    if (!currentUser) {
      Swal.fire({
        timer: 1000,
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
        showConfirmButton: false,
      });
    }
  };

  return (
    <section id="tab" className="py-16">
      <div className="mycontainer">
        <div className="tabwrapper">
          <div className="galleryHeading  pb-10">
            <h3 className="text-center text-4xl font-semibold">
              Shop by <span className="text-[#ED0EFD]">Category</span>
            </h3>
          </div>
          <div className="tabHeading text-center">
            <ul className="flex items-end gap-2 lg:gap-6 justify-center">
              <li>
                <button
                  onClick={() => setCatagory("sports car")}
                  className={`inline-block text-white bg-[#ED0EFD] text-sm md:text-base font-medium rounded-md px-3 lg:px-6 py-4 hover:opacity-70 ${
                    catagory === "sports car" && "activeCar"
                  }`}
                >
                  Sports car
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCatagory("truck")}
                  className={`inline-block text-white bg-[#ED0EFD] text-sm md:text-base font-medium rounded-md px-3 lg:px-6 py-4 hover:opacity-70 ${
                    catagory === "truck" && "activeCar"
                  }`}
                >
                  Truck
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCatagory("regular car")}
                  className={`inline-block text-white bg-[#ED0EFD] text-sm md:text-base font-medium rounded-md px-3 lg:px-6 py-4 hover:opacity-70 ${
                    catagory === "regular car" && "activeCar"
                  }`}
                >
                  Regular car
                </button>
              </li>
            </ul>
            <div className="filterdToyDetails grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[850px] mx-auto mt-11">
              {filterData.map((toy) => {
                return (
                  <div
                    data-aos="fade-up-left"
                    className="toyWrap shadow-xl pb-8 rounded-md overflow-hidden"
                    key={toy._id}
                  >
                    <div className="toyImg">
                      <img
                        className="w-full h-[300px] object-cover"
                        src={
                          toy?.pic_url
                            ? toy?.pic_url
                            : "https://i.ibb.co/QMPVpJ6/360-F-400243185-BOx-ON3h9av-MUX10-Rs-Dkt3p-J8i-Qx72k-S3.jpg"
                        }
                        alt="car images"
                      />
                    </div>
                    <div className="otherInfo text-left p-4 pb-0 space-y-5">
                      <h2 className="text-3xl font-medium">
                        {toy?.toy_name ? toy?.toy_name : "Name not abailable"}
                      </h2>
                      <div className="priceandrating flex items-center justify-between">
                        <div className="price text-xl font-medium">
                          {toy?.price ? (
                            <p>{toy?.price} usd</p>
                          ) : (
                            <p>Price is not abailable</p>
                          )}
                        </div>
                        <div className="price text-xl font-medium">
                          {toy?.rating ? (
                            <div className="reatingsPrice">
                              <Rating
                                readOnly
                                style={{ maxWidth: 150 }}
                                value={Math.round(toy?.rating)}
                              />
                            </div>
                          ) : (
                            <p>Rating is not abailable</p>
                          )}
                        </div>
                      </div>
                      <button className="inline-block text-white bg-[#ED0EFD] font-xl font-medium rounded-md  hover:opacity-70 activeCar">
                        <Link
                          className="px-6 py-4 inline-block"
                          onClick={handelAlert}
                          to={`/toy/${toy._id}`}
                        >
                          View Details
                        </Link>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="modal">
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tab;
