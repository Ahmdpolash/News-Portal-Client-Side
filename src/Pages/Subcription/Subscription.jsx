import React, { useState } from "react";
import Container from "../Shared/Container/Container";
import { Helmet } from "react-helmet";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";


import SubscriptionCard from "./SubscriptionCard";

const Subscription = () => {



  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | Subscription</title>
      </Helmet>
      <Container>
        <div className="">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-full bg-blend-darken bg-slate-600 rounded-md lg:h-[42vh]"
                src="https://img.freepik.com/premium-vector/breaking-news-information-banner-notifies-people-with-latest-news-banners-promotional-media_101434-770.jpg?w=1380"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full rounded-md lg:h-[42vh]"
                src="https://img.freepik.com/free-vector/news-blog-banner-template_23-2148626510.jpg?w=1380&t=st=1701192110~exp=1701192710~hmac=380fda0b45b6cb10d0d59b209b55edc52a19e655f644930b33c76d3597040dea"
                alt=""
              />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 3</SwiperSlide> */}
          </Swiper>
        </div>

        <div className="mx-auto">
          <SubscriptionCard />

        </div>
        {/* <div>
         
        </div> */}
      </Container>
    </div>
  );
};

export default Subscription;
