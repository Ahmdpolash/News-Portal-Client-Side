import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Update = () => {
  const [Value, getValue] = useState([]);

  const articles = useLoaderData();
  console.log(articles);

  const axiosPublic = useAxiosPublic();

  const { data: publisher = [] } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publishers");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  const options = [
    { value: "Technology", label: "Technology" },
    { value: "Sport", label: "Sport" },
    { value: "Fashion", label: "Fashion" },
    { value: "Travel", label: "Travel" },
    { value: "Politics", label: "Politics" },
    { value: "Education", label: "Education" },
  ];

  const Diagnose = (e) => {
    getValue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const tag = Value;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const publisher = form.publishers.value;

    const imgFile = { image: image };

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    if (res.data.success) {
      const data = {
        tag,
        title,
        description,
        image: res.data.data.display_url,
        publisher,
      };

      const result = await axiosPublic.patch(
        `/articles/update/${articles._id}`,
        data
      );
      console.log(result.data);
      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Good job!",
          text: `${articles?.title} is updated !`,
          icon: "success",
        });
      }
    }
  };

  return (
    <div>
      <div className="bg-white p-4">
        <form
          onSubmit={handleUpdate}
          className="py-4 mt-3 px-10 lg:w-3/4 bg-gray-100  rounded-md mx-auto border-2 shadow-lg"
        >
          <h2 className="text-3xl  text-black lg:text-5xl mb-3 font-bold text-center">
            Update This Article{" "}
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
                  defaultValue={articles?.title}
                  placeholder="Title"
                  name="title"
                  required
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
                  required
                  className="input px-2 bg-white outline-red-400 w-full border-2 py-[9px] input-bordered"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:px-4 mb-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white  text-[17px] font-semibold">
                  Publisher Name
                </span>
              </label>

              <select
                className="border-2 px-2 py-2 my-1 w-full bg-white"
                name="publishers"
                defaultValue={articles?.publisher}
                required
                id=""
              >
                <option value={articles?.publisher}>
                  {articles?.publisher}
                </option>
                {publisher.map((item, index) => (
                  <option key={index} value={item?.publisher}>
                    {item?.publisher}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white text-[17px] font-semibold">
                  Tags
                </span>
              </label>

              <Select
                required
                options={options}
                isMulti
                name="publisher"
                defaultValue={
                  articles?.tag
                    ? articles.tag.map((tag) => ({ label: tag, value: tag }))
                    : []
                } // Set default selected tags
                onChange={Diagnose} // Handle onChange event
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
              defaultValue={articles?.description}
              required
              placeholder="Description"
              cols="30"
              rows="7"
            ></textarea>
          </div>

          <div className="mb-4 lg:px-4">
            <input
              className="bg-red-500 text-white font-semibold text-[18px] w-full rounded-md py-3 "
              type="submit"
              value="Update Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
