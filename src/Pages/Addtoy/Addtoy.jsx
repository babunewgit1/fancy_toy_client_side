import React, { useState } from "react";
import Bannar from "../Shared/Bannar/Bannar";
import CreatableSelect from "react-select/creatable";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    if (isNaN(event.target.price.value)) {
      return toast.error("Pirce must be number!!!");
    }
    if (isNaN(event.target.rating.value)) {
      return toast.error("Rating must be number!!!");
    }
    if (isNaN(event.target.quentity.value)) {
      return toast.error("Quentity must be number!!!");
    }

    data.sub_cata = selectedOption;
    console.log(data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="toyFormWrapper grid grid-cols-2 gap-5">
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Picture URL
                    </label>
                    <input
                      {...register("pic_url")}
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="url"
                      placeholder="Picture URL"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">Toy Name</label>
                    <input
                      {...register("toy_name")}
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
                      {...register("seller_name")}
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
                      {...register("seller_email")}
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="email"
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
                      {...register("price")}
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Price"
                      name="price"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">Rating</label>
                    <input
                      {...register("rating")}
                      className="block w-full border border-gray-900 px-5 py-2 outline-none"
                      type="text"
                      placeholder="Rating"
                    />
                  </div>
                  <div className="houseInput">
                    <label className="font-semibold mb-2 block">
                      Available quantity
                    </label>
                    <input
                      {...register("quentity")}
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
                      {...register("discription")}
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
        <Toaster></Toaster>
      </div>
    </section>
  );
};

export default Addtoy;
