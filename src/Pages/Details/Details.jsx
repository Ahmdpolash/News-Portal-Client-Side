import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { FaEye } from "react-icons/fa6";
import useArticle from "../../Hooks/useArticle";

const Details = () => {
  const data = useLoaderData();
  console.log(data);

  const [articles] = useArticle();

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

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="w-full shadow-lg bg-gray-50 my-6 col-span-2">
            <img
              className="w-full rounded-lg h-[420px]"
              src={data?.image}
              alt=""
            />
            <p className="mr-10 mt-2 font-bold text-right">Total views : </p>
            <p className="py-3 text-[16px] font-semibold text-gray-600 leading-8">
              {data.description}
            </p>
          </div>

          <div className=" ">
            <h1 className="font-bold text-[17px] text-red-500 mb-2">
              More Related Article
            </h1>
            {articles?.slice(0, 2).map((article) => (
              <div className="relative flex border-2 mb-6 shadow-lg flex-col rounded-xl bg-white bg-clip-border text-gray-700 ">
                <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                  <img
                    className="rounded-lg"
                    src={article?.image}
                    alt="ui/ux review check"
                  />
                </div>
                <div className="p-6">
                  <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {article?.title}
                  </h4>
                  <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                  {
                    article.description.split(' ').slice(0,15).join(' ')
                  } .....
                  </p>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center -space-x-3">
                    <Link to={`/details/${article?._id}`}>
                      <button className="bg-red-700 text-white px-3 py-2 rounded-md">Read More</button>
                    </Link>
                  </div>
                  <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                     {
                        article?.tag
                     }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
