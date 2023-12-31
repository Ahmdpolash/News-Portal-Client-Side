import React, { useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Container from "../Shared/Container/Container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import premium from "../../assets/premium.json";
import Lottie from "lottie-react";

const AllArticle = () => {
  const [dataSource, setDataSource] = useState(Array.from({ length: 4 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
    if (dataSource.length < articles.length) {
      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 4 })));
      }, 300);
    } else {
      setHasMore(false);
    }
  };

  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [tag, setTag] = useState("");
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/article/approve");

      console.log(res.data);
      return res.data; // Add this line to return the data
    },
  });

  return (
    <div>
      <Container className="bg-gray-50">
        <Helmet>
          <title>Daily News | All Article</title>
        </Helmet>

        <div className="flex flex-col md:flex-row lg:flex-row flex-wrap justify-between lg:items-center gap-2">
          {/* <h3>Sort By</h3> */}
          <div>
            <select
              className="border-2 rounded-md border-red-400 text-red-600 py-1 lg:px-4"
              name="tags"
              id=""
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort by Publisher</option>
              <option value="Alokito Bangladesh">Alokito Bangladesh</option>
              <option value="The Daily Star">The Daily Star</option>
              <option value="Manab Zamin">Manab Zamin</option>
              <option value="Prothom Alo">Prothom Alo</option>
              <option value="Shamakal">Shamakal</option>
            </select>
          </div>

          <div className="w-full flex md:w-[60%] lg:w-[30%] ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="border-2 w-[80%] lg:w-72 border-red-400 outline-none px-3 lg:px-16 py-2 rounded-none lg:rounded-l-md"
              placeholder="Search Title Here.."
              type="text"
            />
            <button className="bg-red-400 text-white py-[10px] px-[21px]  lg:px-5 rounded-r-md">
              Search
            </button>
          </div>

          <div>
            <select
              onChange={(e) => setTag(e.target.value)}
              className="border-2 hidden lg:block border-red-400 text-red-600 rounded-md py-1 px-4"
              name="tags"
              id=""
            >
              <option value="">Filter by Tag</option>
              <option value="Sport">Sport</option>
              <option value="Technology">Technology</option>
              <option value="Fashion">Fashion</option>
              <option value="Travel">Travel</option>
              <option value="Politics">Education</option>
            </select>
          </div>
        </div>

        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchData}
          hasMore={hasMore}
          style={{ overflow: "hidden" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4">
            {articles
              .filter((article) => {
                // Filter articles based on the selected publisher
                return !tag ||  article.tag.includes(tag)
              })
              .filter((article) => {
                // Filter articles based on the selected publisher
                return !sort || article.publisher === sort;
              })

              .filter((article) => {
                return !search
                  ? article
                  : article.title.toLowerCase().includes(search.toLowerCase());
              })
              .slice(0, dataSource.length)
              .map((article) => (
                <ArticleCard article={article} />
              ))}
          </div>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default AllArticle;
