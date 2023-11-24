import React from "react";
import Container from "../../Shared/Container/Container";
import Marquee from "react-fast-marquee";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div>
      <Container>
        <span className="flex items-center">
          <strong className="bg-red-500 px-7 py-2 rounded-md text-white">
            News:{" "}
          </strong>{" "}
          <Marquee className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            vero quam, labore at veritatis dolor laboriosam rerum error animi
            libero eum maiores molestiae voluptates et quis mollitia temporibus
            architecto est! Neque voluptatum ab, in nisi officiis tempore
            assumenda dolores doloribus?
          </Marquee>
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6 lg:h-[75vh]">
          <div className="col-span-2 w-full">
            <Carousel />
          </div>
          <div className="rounded-md p-4 bg-gray-100">
            <h1 className="mb-2 font-bold">Trending</h1>
            <div className="border-2 shadow-lg mb-3 p-4 rounded-lg">
              <div className="flex gap-2 ">
                <div className="w-[250px] h-[100px]">
                  <img className="w-full h-full rounded-lg"
                    src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vero, deleniti.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 shadow-lg mb-3 p-4 rounded-lg">
              <div className="flex gap-2 ">
                <div className="w-[250px] h-[100px]">
                  <img className="w-full h-full rounded-lg"
                    src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vero, deleniti.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 shadow-lg mb-3 p-4 rounded-lg">
              <div className="flex gap-2 ">
                <div className="w-[250px] h-[100px]">
                  <img className="w-full h-full rounded-lg"
                    src="https://tds-images.thedailystar.net/sites/default/files/styles/big_201/public/images/2023/11/20/khadijatul_kubra_finally_out_of_jail.png"
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vero, deleniti.
                  </p>
                </div>
              </div>
            </div>
           
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
