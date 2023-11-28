import React from "react";
import TrendingCaro from "./TrendingCaro";
import useArticle from "../../../Hooks/useArticle";

const Trending = () => { 

  const [articles] = useArticle()


  return (
    <div className="my-10">
      <h1 className=" text-center text-2xl font-semibold my-2">
        Trending News & Article
      </h1>
      <div className="h-1 w-16 bg-black text-center mx-auto"></div>

      <div>
        {/* {
          articles?.slice(0,6)?.map(article => <TrendingCaro key={article._id} article={article}/>)
        } */}
        <TrendingCaro />
      </div>
    </div>
  );
};

export default Trending;
