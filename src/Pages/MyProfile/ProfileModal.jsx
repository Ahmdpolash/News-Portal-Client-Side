import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const ProfileModal = ({ my_modal_3, user, filter, showModal, dialog }) => {
  const handleUpdate = async (e) => {
    const axiosPublic = useAxiosPublic();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const names = {
      name,
    };

    const result = await axiosPublic.patch(
      `/user/profile/${user?.email}`,
      names
    );
    console.log(result.data);
    if (result.data.modifiedCount > 0) {
      toast.success("Profile updated successfully");
    }
  };

  const handleCloseModal = () => {
    // Toggle the modal visibility using the showModal state or any other mechanism
    // For example, if you have a state variable named setShowModal, you can do setShowModal(false);
    console.log("Close modal logic here");
    window.location.reload();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <button
            onClick={handleCloseModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <form onSubmit={handleUpdate} method="dialog">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-left font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="name"
                  placeholder="Edit User Name"
                  type="text"
                  required=""
                  defaultValue={filter?.name}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              <label
                htmlFor="password"
                className="block text-sm text-left font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="email"
                  type="email"
                  required=""
                  defaultValue={filter?.email}
                  disabled
                  className="hover:cursor-not-allowed appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-left font-medium leading-5 text-gray-700"
              >
                Image
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="image"
                  type="file"
                  disabled
                  required=""
                  className="appearance-none hover:cursor-not-allowed block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ProfileModal;
