import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Container from "../Shared/Container/Container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const AllArticle = () => {
  const axiosPublic = useAxiosPublic();

  const { data: articles = [] } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  return (
    <div className="bg-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | All Article</title>
      </Helmet>
      <Container>
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
          {articles?.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllArticle;

// <div className="relative border flex w-full lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
// <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
//   <img
//     src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
//     alt="image"
//     className="object-cover w-full h-full"
//   />
// </div>
// <div className="p-6">
//   <h1 className="font-bold">Top 10 way to Earn Money</h1>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Sapiente eligendi ad porro ullam ipsam ratione!
//   </p>
//   <p className="font-semibold my-2">Publisher : Polash</p>
//   <Link>
//     <button className="bg-black text-white py-2 px-4 rounded-md">
//       View Details..
//     </button>
//   </Link>
// </div>
// </div>
// <div className="relative border flex w-full lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
// <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
//   <img
//     src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
//     alt="image"
//     className="object-cover w-full h-full"
//   />
// </div>
// <div className="p-6">
//   <h1 className="font-bold">Top 10 way to Earn Money</h1>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Sapiente eligendi ad porro ullam ipsam ratione!
//   </p>
//   <p className="font-semibold my-2">Publisher : Polash</p>
//   <Link>
//     <button className="bg-black text-white py-2 px-4 rounded-md">
//       View Details..
//     </button>
//   </Link>
// </div>
// </div>
// <div className="relative border flex w-full lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
// <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
//   <img
//     src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
//     alt="image"
//     className="object-cover w-full h-full"
//   />
// </div>
// <div className="p-6">
//   <h1 className="font-bold">Top 10 way to Earn Money</h1>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Sapiente eligendi ad porro ullam ipsam ratione!
//   </p>
//   <p className="font-semibold my-2">Publisher : Polash</p>
//   <Link>
//     <button className="bg-black text-white py-2 px-4 rounded-md">
//       View Details..
//     </button>
//   </Link>
// </div>
// </div>
// <div className="relative border flex w-full lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
// <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
//   <img
//     src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
//     alt="image"
//     className="object-cover w-full h-full"
//   />
// </div>
// <div className="p-6">
//   <h1 className="font-bold">Top 10 way to Earn Money</h1>
//   <p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Sapiente eligendi ad porro ullam ipsam ratione!
//   </p>
//   <p className="font-semibold my-2">Publisher : Polash</p>
//   <Link>
//     <button className="bg-black text-white py-2 px-4 rounded-md">
//       View Details..
//     </button>
//   </Link>
// </div>
// </div>