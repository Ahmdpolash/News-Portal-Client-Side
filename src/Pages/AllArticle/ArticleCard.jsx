import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article, isLoading }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row flex-wrap justify-between lg:items-center gap-2">
        {/* <h3>Sort By</h3> */}
        <div>
          <select
            className="border-2 rounded-md border-red-400 text-red-600 py-1 lg:px-4"
            name="tags"
            id=""
          >
            <option value="Sport">Sport</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Travel">Travel</option>
            <option value="Politics">Politics</option>
          </select>
        </div>

        <div className="w-full flex md:w-[60%] lg:w-[30%] ">
          <input
            className="border-2 w-[80%] lg:w-72 border-red-400 outline-none px-3 lg:px-16 py-2 rounded-none lg:rounded-l-md"
            placeholder="Search Title Here.."
            type="text"
          />
          <button className="bg-red-400 text-white py-[10px] px-[21px]  lg:px-5 rounded-r-md">
            Search
          </button>
        </div>

        <div>
          <select
            className="border-2 hidden lg:block border-red-400 text-red-600 rounded-md py-1 px-4"
            name="tags"
            id=""
          >
            <option value="Sport">Sport</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Travel">Travel</option>
            <option value="Politics">Politics</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 my-10 ">
        {article?.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      
    </div>
  );
};

export default ArticleCard;
