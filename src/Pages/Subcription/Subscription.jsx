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

const Subscription = () => {

  const [payment, setPayment] = useState();

  console.log(payment);

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
                className="w-full rounded-md lg:h-[42vh]"
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

        <div>
          <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="bg-gray-100 rounded-lg shadow-lg p-16">
              <h1 className="text-2xl font-bold mb-6">Make Payment</h1>

              <select
                className="w-full"
                onChange={(e) => setPayment(e.target.value)}
                name="payment"
                id=""
              >
                <option value="15">1 Minute - $15</option>
                <option value="50">1 Days -$50</option>
                <option value="100">3 Days -$100</option>
              </select>

              <div className="flex justify-center mt-6">
                {payment && (
                  <Link to={`/payment/${payment}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Checkout
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
