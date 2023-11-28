import React from "react";
import TrendingCaro from "./TrendingCaro";
import useArticle from "../../../Hooks/useArticle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// import required modules
import { Pagination } from "swiper/modules";
import Container from "../../Shared/Container/Container";

const Trending = () => {
  const [articles] = useArticle();

  return (
    <Container>
      <div className="my-10 mt-6">
        <h1 className=" text-center text-2xl font-semibold my-2">
          Trending News & Article
        </h1>
        <div className="h-1 w-16 bg-black text-center mx-auto"></div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {articles?.slice(0, 6)?.map((article) => (
            <SwiperSlide key={article._id}>
              <div className="relative mt-6 border flex w-full  lg:h-[235px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                  <img
                    src={article?.image}
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h1 className="font-bold">{article?.title}</h1>
                  <p>
                    {article?.description.split(" ").slice(0, 15).join(" ")}{" "}
                    .....
                  </p>
                  <p className="font-semibold my-2">Publisher : {article?.publisher}</p>
                  <Link to={`/update/${article?._id}`}>
                    <button className="bg-black absolute bottom-3 text-white py-2 px-4 rounded-md">
                      View Details..
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Trending;
