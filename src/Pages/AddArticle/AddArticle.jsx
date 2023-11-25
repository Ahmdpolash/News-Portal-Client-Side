import React from "react";
import Select from "react-select";
// import { colorOptions } from "../data";

const AddArticle = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleAddArticle = e => {
    e.preventDefault()
    const form = e.target 
    const title = form.title.value
    const tag = Array.isArray(form.tag) ? form.tag.map((tag) => tag.value).join(', ') : form.tag.value;
    const description = form.description.value
    const image = form.image.value 
    const publisher = form.publisher.value

    const formData = {title,tag,description,publisher,image}
    console.log(formData);
  }


  return (
    <div>
      <div className="bg-white p-4">
        <form onSubmit={handleAddArticle} className="py-4 mt-3 px-10 lg:w-3/4 bg-gray-100  rounded-md mx-auto border-2 shadow-lg">
          <h2 className="text-3xl  text-black lg:text-5xl mb-3 font-bold text-center">
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
                  className="input border-gray-300 w-full border-2  py-3 px-2 rounded-md input-bordered"
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
                  className="input px-2 bg-white outline-red-400 w-full border-2 py-[9px] input-bordered"
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
                className="input border-2 border-gray-300 px-2 py-3 rounded-md outline-red-400 w-full input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Tags
                </span>
              </label>

              <Select
                options={options}
                
                // defaultValue={[colorOptions[2], colorOptions[3]]}
                isMulti
                name="tag"
                // options={colorOptions}
                className="basic-multi-select py-2"
                classNamePrefix="select"
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
              className="w-full border-gray-300 border-2 p-4"
              id=""
              placeholder="Description"
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <div className="mb-4 lg:px-4">
            <input
              className="bg-red-500 text-white font-semibold text-[18px] w-full rounded-md py-3 "
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
