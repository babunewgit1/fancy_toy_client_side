import React, { useState } from "react";
import Bannar from "../Shared/Bannar/Bannar";
import CreatableSelect from "react-select/creatable";
const options = [
  { value: "sports car", label: "sports car" },
  { value: "truck", label: "truck" },
  { value: "regular car", label: "regular car" },
  { value: "mini fire truck", label: "mini fire truck" },
  { value: "mini fire truck", label: "mini fire truck" },
  { value: "mini police car", label: "mini police car" },
  { value: "Others", label: "Others" },
];

const Addtoy = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <section id="addtoy">
      <Bannar bannar={"Add Toy"}></Bannar>
      <div className="toyform py-14">
        <div className="mycontainer">
          <div className="addToyFull">
            <div className="addToy-form text-center">
              <h2 className="text-3xl font-semibold border-b-2 border-gray-950 pb-6">
                Add Toy Form
              </h2>
            </div>
            <div className="addToysInput mt-8">
              <form>
                <div className="toyFormWrapper grid grid-cols-2 gap-5">
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Picture URL
                    </label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Picture URL"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">Name</label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Seller name
                    </label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Seller name"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Seller email
                    </label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Seller email"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Seller email
                    </label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Seller email"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Sub-category
                    </label>
                    <CreatableSelect
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">Price</label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">Rating</label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Available quantity
                    </label>
                    <input
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Available quantity"
                    />
                  </div>
                  <div className="houseInput col-span-2">
                    <label className="font-semibold mb-2 block">
                      Detail description
                    </label>
                    <textarea
                      placeholder="Detail description"
                      className="block h-[120px] resize-none w-full border border-gray-900 px-5 py-2 outline-none"
                    ></textarea>
                  </div>
                  <div className="submitButton">
                    <button
                      className="text-white bg-gray-900 px-8 py-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addtoy;
