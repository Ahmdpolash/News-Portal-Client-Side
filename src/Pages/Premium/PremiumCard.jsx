import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import premiumIcon from "../../assets/premium.json";
import { Helmet } from "react-helmet";
import useUser from "../../Hooks/useUser";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const PremiumCard = ({ premium }) => {
  const { description } = premium;
  const axiosSecure = useAxios();
  const {user} = useAuth()
  const sliceDesc = description.split(" ").slice(0, 30).join(" ");

  const handleError = () => {
    toast.error("Please Take Subscription to Read This Article");
  };

  const { data: PremiumUsers = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/premiumUser/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | Premium Article</title>
      </Helmet>

      <div className="relative border-2 bg-gray-50 flex flex-col lg:flex-row w-full max-w-[48rem] lg:h-[300px] rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div className="relative w-full lg:w-2/5 m-0 overflow-hidden  text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <img
            src={premium?.image}
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <Lottie
            className="w-[60px] lg:w-[80px] absolute right-2 lg:right-3 top-0"
            animationData={premiumIcon}
          />

          <h6 className="block mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
            {premium?.publisher}
          </h6>
          <h4 className="block mb-2 font-sans text-[17px] lg:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {premium?.title}
          </h4>
          <p className="block mb-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            {sliceDesc}
            <span className="font-bold">...</span>
          </p>
          <a className="inline-block" href="#">
            {PremiumUsers?.premiumTaken ? (
               <Link to={`/details/${premium?._id}`}>
               <button
                 className=" bg-gray-100 : flex absolute bottom-4 items-center gap-2 px-2  font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
            ) : (
              <button
                onClick={handleError}
                className="opacity-20 bg-gray-100 : flex absolute bottom-4 items-center gap-2 px-2  font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PremiumCard;
