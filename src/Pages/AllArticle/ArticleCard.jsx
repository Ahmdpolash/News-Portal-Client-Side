import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <div className="relative border flex w-full lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h1 className="font-bold">{article?.title}</h1>
          <p>
           {article?.description}
          </p>
          <p className="font-semibold my-2 ">Publisher : {article?.publisher }</p>
          <Link>
            <button className="bg-black text-white py-2 px-4 rounded-md">
              View Details..
            </button>
          </Link>
        </div>
      </div>
      
     
    
    </div>
  );
};

export default ArticleCard;
