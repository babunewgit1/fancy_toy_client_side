import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const Mytoys = () => {
  useTitle("Toy car zone | MY Toy");
  const { currentUser } = useContext(AuthContext);
  const [mytoy, setMytoy] = useState([]);
  const [edit, setEdit] = useState(null);
  const [reload, setReload] = useState(true);
  const [sort, setSort] = useState(1);

  const updateItems = (items) => {
    setEdit(items);
  };

  const handelSort = () => {
    setSort((prevSort) => (prevSort === 1 ? -1 : 1));
  };

  console.log(sort);

  const { register, handleSubmit } = useForm();
  const onSubmit = (updateData, event) => {
    fetch(`https://back-end-two-alpha.vercel.app/update/${edit._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReload(!reload);
        if (data.modifiedCount > 0) {
          toast.success("Data updated successfull!!!");
          event.target.reset();
        } else {
          toast.error("Data not updated!!!");
        }
      });
  };

  useEffect(() => {
    fetch(
      `https://back-end-two-alpha.vercel.app/mytoy/${currentUser?.email}?sort=${sort}`
    )
      .then((res) => res.json())
      .then((myData) => setMytoy(myData));
  }, [currentUser, reload, sort]);

  const deleteItems = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://back-end-two-alpha.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((deletedData) => {
            console.log(deletedData);
            setReload(!reload);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <section id="mytoy" className="py-20">
      <div className="mycontainer">
        <div className="mytoyWrapper">
          <div className="detailsHeading mb-10">
            <h3 className="text-center text-4xl font-semibold">
              My
              <span className="text-[#ED0EFD]"> Toys</span>
            </h3>
          </div>
          <button className="btn my-8" onClick={handelSort}>
            Sort by price
          </button>
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
                  {mytoy.map((items, index) => {
                    return (
                      <tr key={items._id}>
                        <td>{index + 1}</td>
                        <td>{items?.seller_name}</td>
                        <td>{items?.toy_name}</td>
                        <td>{items?.sub_cata}</td>
                        <td>{items?.price}</td>
                        <td>{items?.quentity}</td>
                        <td>
                          <ul className="flex items-center gap-4 text-[#ED0EFD]">
                            <li>
                              <label
                                onClick={() => updateItems(items)}
                                htmlFor="my-modal-3"
                              >
                                <FaRegEdit></FaRegEdit>
                              </label>
                            </li>
                            <li>
                              <button onClick={() => deleteItems(items._id)}>
                                <FaTrashAlt></FaTrashAlt>
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <div className="updateForm">
                    <h2 className="text-2xl font-medium text-center">
                      Update Data Form
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="updateFormWrapper">
                        <div className="houseInput mt-4">
                          <label className="font-semibold mb-2 block">
                            Price
                          </label>
                          <input
                            {...register("price")}
                            className="block w-full border border-gray-900 px-5 py-2 outline-none"
                            type="text"
                            defaultValue={edit?.price}
                          />
                        </div>
                        <div className="houseInput mt-4">
                          <label className="font-semibold mb-2 block">
                            Available quantity
                          </label>
                          <input
                            {...register("quentity")}
                            className="block w-full border border-gray-900 px-5 py-2 outline-none"
                            type="text"
                            defaultValue={edit?.quentity}
                          />
                        </div>
                        <div className="houseInput mt-4">
                          <label className="font-semibold mb-2 block">
                            Detail description
                          </label>
                          <textarea
                            {...register("discription")}
                            defaultValue={edit?.discription}
                            className="block h-[80px] resize-none w-full border border-gray-900 px-5 py-2 outline-none"
                          ></textarea>
                        </div>
                        <button className="btn mt-6" type="submit">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mytoys;
