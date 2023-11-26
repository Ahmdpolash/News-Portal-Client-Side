import React from "react";

const Publisher = () => {
  return (
    <div className="my-8">
      <h1 className="font-semibold text-3xl my-2 text-center">
        Our Article Publisher
      </h1>
      <div className="h-1 w-20 bg-black text-center mx-auto"></div>

      <div className="flex justify-around flex-col lg:flex-row">
        <img
          className="w-[250px]"
          src="https://i.ibb.co/y0Yv1Wd/daily-1.png"
          alt=""
        />
        <img
          className="w-[250px]"
          src="https://i.ibb.co/9yFMbXc/daily-2-1.png"
          alt=""
        />
        <img
          className="w-[250px]"
          src="https://i.ibb.co/kS2hcCH/daily-3-1.png"
          alt=""
        />
        <img
          className="w-[250px]"
          src="https://i.ibb.co/vsbxWwd/daily-4-1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Publisher;
