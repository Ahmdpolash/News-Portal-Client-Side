import React from "react";

const AddArticle = () => {
  return (
    <div>

      
      <div className="bg-gray-100 p-4">
        <form className="py-4 mt-3 px-10 lg:w-3/4 bg-white rounded-md mx-auto border-2 shadow-lg">
          <h2 className="text-3xl  text-[#2E856E] lg:text-5xl mb-3 font-bold text-center">
            Add New Article{" "}
          </h2>
          <div className="flex flex-col lg:flex-row gap-3 lg:lg:px-4 mb-2">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-[17px] dark:text-white font-semibold">
                  Title
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="input w-full border py-3 px-2 rounded-md input-bordered"
                />
              </label>
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Image
                </span>
              </label>
              <label className="input-group w-full">
                <input
                  type="file"
                  name="image"
                  className="input px-2 outline-red-400 w-full border py-3 input-bordered"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:px-4 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Publisher Name
                </span>
              </label>

              <input
                type="text"
                placeholder="Publisher Name"
                name="publisher"
                className="input border px-2 py-3 rounded-md outline-red-400 w-full input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Tags
                </span>
              </label>

              <input
                type="email"
                placeholder="Your Email"
                name="yourEmail"
                disabled
                className="input outline-red-400 w-full input-bordered"
              />
            </div>
          </div>

          <div className="form-control w-full lg:px-4 mb-4">
            <label className="label">
              <span className="label-text dark:text-white text-[17px] font-semibold">
                Description
              </span>
            </label>{" "}
            <br />
            <textarea
              name="description"
              className="w-full border-2 p-4"
              id=""
              placeholder="Description"
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <div className="mb-4 lg:px-4">
            <input
              className="bg-[#2E856E] text-white font-semibold text-[18px] w-full rounded-md py-3 "
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArticle;
