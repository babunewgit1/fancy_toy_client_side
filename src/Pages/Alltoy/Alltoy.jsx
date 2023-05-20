import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Alltoy = () => {
  useTitle("Toy car | All toy");
  const [fullToyData, setFullToyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/kidstoy")
      .then((res) => res.json())
      .then((allData) => setFullToyData(allData));
  }, []);

  const handelSubmit = (event) => {
    event.preventDefault();
    const inputext = event.target.search.value;

    if (inputext) {
      fetch(`http://localhost:5000/search/${inputext}`)
        .then((res) => res.json())
        .then((searchData) => setFullToyData(searchData));
    } else {
      fetch("http://localhost:5000/kidstoy")
        .then((res) => res.json())
        .then((allData) => setFullToyData(allData));
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
                        <td>{index + 1}</td>
                        <td>{items?.seller_name}</td>
                        <td>{items?.toy_name}</td>
                        <td>{items?.sub_cata}</td>
                        <td>{items?.price}</td>
                        <td>{items?.quentity}</td>
                        <td>
                          <button className="btn">
                            <Link to={`/toy/${items._id}`}>View Details</Link>
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
