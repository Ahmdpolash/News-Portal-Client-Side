import React from "react";
import { Link } from "react-router-dom";
import premium from "../../assets/premium.json";
import Lottie from "lottie-react";

const ArticleCard = ({ article, isLoading }) => {
  const { description } = article;

  const sliceDesc = description.split(" ").slice(0, 30).join(" ");

  return (
    <div>
      <div className="relative border-2 flex flex-col lg:flex-row w-full max-w-[48rem] lg:h-[300px] rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative w-full lg:w-2/5 m-0 overflow-hidden  text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={article?.image}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-4">
          {article?.Quality === "premium" && (
            <Lottie
              className="w-[60px] lg:w-[80px] absolute right-2 lg:right-3 top-0"
              animationData={premium}
            />
          )}
          <h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {article?.publisher}
          </h6>
          <h4 className="block mb-2 font-sans text-[17px] lg:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {article?.title}
          </h4>
          <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {sliceDesc}
            <span className="font-bold">...</span>
          </p>
          <a className="inline-block" href="#">
            <Link to={`/details/${article?._id}`}>
              <button
                className="flex absolute bottom-4 items-center gap-2 px-2  font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
