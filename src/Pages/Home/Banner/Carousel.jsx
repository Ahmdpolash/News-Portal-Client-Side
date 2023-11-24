import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../../assets/img1.jpg";

const Carousel = () => {
  return (
    <div>
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
        <SwiperSlide className="relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30">
          <img
            className="rounded-lg  lg:h-full h-[350px] w-full "
            src="https://media.cnn.com/api/v1/images/stellar/prod/231122093931-05-argentina-brazil-112123.jpg?c=16x9&q=h_720,w_1280,c_fill"
            alt=""
          />
          <div className="absolute bottom-0 bg-[#100f0f] z-10 py-2 left-0 px-4">
            <p className=" font-semibold text-[14px] lg:text-2xl text-2xl text-white">
              Brazil vs. Argentina: Historic World Cup qualifier is overshadowed
              by violence and chaos at the Maracanã Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ad magnam itaque !
            </p>
            <p className="font-bold text-white my-2">Date: Nov 20,2023</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative  w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30">
          <img
            className="rounded-lg w-full lg:h-full h-[350px]"
            src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
            alt=""
          />
          <div className="absolute bottom-0 bg-[#100f0f] z-10 py-2 left-0 px-4">
            <p className=" font-semibold text-[14px] lg:text-2xl text-white">
            Will Khadija’s ordeal end with her release?We are relieved to know that, after an excruciatingly long wait, Jagannath University student Khadijatul Kubra has been finally released from jail on bail.
            </p>
            <p className="font-bold text-white my-2">Date: Nov 20,2023</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative w-max before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-blue-950 before:opacity-30">
          <img
            className="rounded-lg w-full lg:h-full h-[350px]"
            src="https://tds-images-bn.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/24/palestine.jpg"
            alt=""
          />
          <div className="absolute bottom-0 bg-[#100f0f] z-10 py-2 left-0 px-4">
            <p className=" font-semibold text-[14px] lg:text-2xl text-2xl text-white">
              Israel released 39 Palestinian prisoners as a result of the
              four-day ceasefire agreement. According to Al-Jazeera, Qatar's
              Ministry of Foreign Affairs spokesman Majed Al-Ansari confirmed
              the matter.
            </p>
            <p className="font-bold text-white my-2">Date: Nov 20,2023</p>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default Carousel;
