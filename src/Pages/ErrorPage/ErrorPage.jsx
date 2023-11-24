import React from "react";
import errorIcon from "../../../src/assets/error.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center mx-auto justify-center h-screen bg-gray-100">
        <div>
          <Link to="/">
            <button className="bg-red-400 py-3 mt-4 px-4 text-center block rounded-md font-semibold mx-auto">
              GO BACK
            </button>
          </Link>
          <Lottie className="lg:w-[660px] " animationData={errorIcon}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
