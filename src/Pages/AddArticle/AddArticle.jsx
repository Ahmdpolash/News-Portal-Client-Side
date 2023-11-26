import React, { useState } from "react";
import Select from "react-select";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { colorOptions } from "../data";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticle = () => {
  const axiosPublic = useAxiosPublic();

  const [Value, getValue] = useState([]);

  const options = [
    { value: "Technology", label: "Technology" },
    { value: "Sport", label: "Sport" },
    { value: "Fashion", label: "Fashion" },
    { value: "Travel", label: "Travel" },
    { value: "Politics", label: "Politics" },
  ];

  const options2 = [
    { value: "Prothom Alo", label: "Prothom Alo" },
    { value: "The Daily News", label: "The Daily News" },
    { value: "Manobjomin", label: "Manobjomin" },
  ];

  const Diagnose = (e) => {
    getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleAddArticle = async (e) => {
    e.preventDefault();
    const form = e.target;
    const tag = Value;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const publisher = Value;
    const time = new Date();


    const imgFile = { image: image };

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      const data = {
        title,
        tag,
        description,
        publisher,
        image: res.data.data.display_url,
        time,
        status:'pending'
      };
      const result = await axiosPublic.post("/articles", data);
      console.log(result.data);
    }
  };

  return (
    <div>
      <div className="bg-white p-4">
        <form
          onSubmit={handleAddArticle}
          className="py-4 mt-3 px-10 lg:w-3/4 bg-gray-100  rounded-md mx-auto border-2 shadow-lg"
        >
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

              <Select
                multiple="multiple"
                options={options2}
                onChange={Diagnose}
                isMulti
                name="tag"
                // options={colorOptions}
                className="basic-multi-select py-2"
                classNamePrefix="select"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Tags
                </span>
              </label>

              <Select
                multiple="multiple"
                options={options}
                onChange={Diagnose}
                isMulti
                name="publisher"
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
