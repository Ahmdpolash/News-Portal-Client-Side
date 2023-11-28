import React from "react";
import Container from "../../Shared/Container/Container";
import Marquee from "react-fast-marquee";
import Carousel from "./Carousel";
import useArticle from "../../../Hooks/useArticle";

const Banner = () => {
  const [articles] = useArticle();

  return (
    <div>
      <Container>
        <span className="flex items-center">
          <strong className="bg-red-500 px-7 py-2 rounded-md text-white">
            Update:{" "}
          </strong>{" "}
          <Marquee className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            vero quam, labore at veritatis dolor laboriosam rerum error animi
            libero eum maiores molestiae voluptates et quis mollitia temporibus
            architecto est! Neque voluptatum ab, in nisi officiis tempore
            assumenda dolores doloribus?
          </Marquee>
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6 justify-center lg:h-[75vh]">
          <div className="col-span-2 w-full">
            <Carousel />
          </div>
          <div className="rounded-md p-4 bg-gray-100">
            <h1 className="mb-2 font-bold">Trending</h1>

            {articles?.slice(0, 3).map((article) => (
              <div className="border-2 shadow-lg mb-3 relative p-4 rounded-lg">
                <div className="flex gap-2 ">
                  <img
                    className="w-[180px] rounded-lg"
                    src={article?.image}
                    alt=""
                  />

                  <div>
                    <p>{article?.title}.</p>
                    <p className="absolute bottom-2 font-semibold text-gray-500"> {article?.publisher}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
