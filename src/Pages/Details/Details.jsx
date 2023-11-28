import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { FaEye } from "react-icons/fa6";

const Details = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | {data.title}</title>
      </Helmet>

      <Container>
        <p className="text-[17px] font-bold text-gray-500 my-4">
          Published by : <span className="text-black">{data.publisher}</span>
        </p>
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <div className="w-full my-6 col-span-2">
            <img
              className="w-full rounded-lg h-[420px]"
              src={data?.image}
              alt=""
            />
            <p className=" font-bold text-right">Total views :  </p>
            <p className="py-3 text-[16px] font-semibold text-gray-600 leading-8">{data.description}</p>
          </div>
          <div className="my-6 bg-red-500"></div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
