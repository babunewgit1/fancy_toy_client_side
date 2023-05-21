import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";

const Alltoy = () => {
  useTitle("Toy car zone | All toy");
  const [fullToyData, setFullToyData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://back-end-two-alpha.vercel.app/kidstoy")
      .then((res) => res.json())
      .then((allData) => setFullToyData(allData));
  }, []);

  const handelSubmit = (event) => {
    event.preventDefault();
    const inputext = event.target.search.value;

    if (inputext) {
      fetch(`https://back-end-two-alpha.vercel.app/search/${inputext}`)
        .then((res) => res.json())
        .then((searchData) => setFullToyData(searchData));
    } else {
      fetch("https://back-end-two-alpha.vercel.app/kidstoy")
        .then((res) => res.json())
        .then((allData) => setFullToyData(allData));
    }
  };

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
    <section id="allToy" className="py-20">
      <div className="mycontainer">
        <div className="allToyWrapper">
          <div className="detailsHeading mb-10">
            <h3 className="text-center text-4xl font-semibold">
              All
              <span className="text-[#ED0EFD]"> Toys</span>
            </h3>
          </div>
          <div className="search mb-9">
            <form onSubmit={handelSubmit}>
              <div className="formInput flex items-center justify-center gap-5">
                <input
                  className="block w-1/2 border border-gray-900 px-5 py-3 outline-none"
                  name="search"
                  type="text"
                  placeholder="toy name"
                />
                <button className="btn">Search</button>
              </div>
            </form>
          </div>
          <div className="mytoysTable">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="text-base">Sl No</th>
                    <th className="text-base">Seller</th>
                    <th className="text-base">Toy Name</th>
                    <th className="text-base">Sub-category</th>
                    <th className="text-base">Price</th>
                    <th className="text-base">Available Quantity</th>
                    <th className="text-base">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fullToyData.map((items, index) => {
                    return (
                      <tr key={items._id}>
                        <th>{index + 1}</th>
                        <td>{items?.seller_name}</td>
                        <td>{items?.toy_name}</td>
                        <td>{items?.sub_cata}</td>
                        <td>{items?.price}</td>
                        <td>{items?.quentity}</td>
                        <td>
                          <button onClick={handelAlert}>
                            <Link className="btn" to={`/toy/${items._id}`}>
                              View Details
                            </Link>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alltoy;
