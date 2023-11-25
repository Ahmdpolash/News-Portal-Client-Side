import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Container from "../../Shared/Container/Container";
import { Link } from "react-router-dom";

const TrendingCaro = () => {
  return (
    <Container>
      <div className="my-10">
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
          classNameName="mySwiper"
        >
          <SwiperSlide>
            <div className="relative border flex w-full  lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h1 className="font-bold">Top 10 way to Earn Money</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente eligendi ad porro ullam ipsam ratione!
                </p>
                <p className="font-semibold my-2">Publisher : Polash</p>
                <Link>
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    View Details..
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative border flex w-full lg:h-[210px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                <img
                  src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
                  alt="image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h1 className="font-bold">Top 10 way to Earn Money</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente eligendi ad porro ullam ipsam ratione!
                </p>
                <p className="font-semibold my-2">Publisher : Polash</p>
                <Link>
                  <button className="bg-black text-white py-2 px-4 rounded-md">
                    View Details..
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          {/* <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide> */}
        </Swiper>
      </div>
    </Container>
  );
};

export default TrendingCaro;
