import React from "react";
import TrendingCaro from "./TrendingCaro";

const Trending = () => {
  return (
    <div className="my-10">
      <h1 className=" text-center text-2xl font-semibold my-2">
        Trending News & Article
      </h1>
      <div className="h-1 w-16 bg-black text-center mx-auto"></div>

      <div>
        <TrendingCaro />
      </div>
    </div>
  );
};

export default Trending;
