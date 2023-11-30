import React from "react";
import useArticle from "../../../Hooks/useArticle";
import Container from "../../Shared/Container/Container";
import { Link } from "react-router-dom";

const Latest = () => {
  const [articles] = useArticle();
  console.log(articles);

  return (
    <Container>
      <div className="mx-auto my-8 ">
        <div className="flex justify-center text-2xl md:text-3xl font-bold">
          Latest Article
        </div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 ">
          {articles?.slice(0, 6)?.map((article) => (
            <li
              key={article._id}
              className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-teal-400"
            >
              <a className="relative" href="/tool/writey-ai">
                <img
                  className="rounded relative w-full object-cover aspect-video"
                  src={article?.image}
                  loading="lazy"
                />
              </a>
              <h1 className="px-3 py-2">{article.title}</h1>
              <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                <a
                  href="/tool/writey-ai"
                  className="flex justify-center items-center text-xl font-semibold text-teal-700 hover:text-teal-800 two-lines text-ellipsis"
                ></a>
                <p className="text-gray-600 two-lines">
                  {article.description.slice(0, 75)}...
                </p>
                <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                  <li
                    title="Pricing type"
                    className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                  >
                    <span className="text-red-500 font-bold">
                      {article.Quality === "premium" ? "Premium" : "free"}
                    </span>
                  </li>
                </ul>
                <ul className="flex flex-wrap text-sm gap-2 my-1">
                  <li className="flex items-center gap-2">
                    <span>Writing</span>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <Link to='/allArticle'>
          <button className="flex justify-center mx-auto mt-3 items-center px-5 lg:px-16 py-2 rounded-md bg-red-500 text-white">
            See More
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Latest;
