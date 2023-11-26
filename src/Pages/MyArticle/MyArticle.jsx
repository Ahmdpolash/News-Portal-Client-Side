import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Shared/Container/Container";

const MyArticle = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | My Article</title>
      </Helmet>
      <Container>
        <table className="w-full overflow-x-auto">
          <thead className="bg-black h-10 text-white">
            <tr className="w-full">
              <th>No</th>
              <th>Article Title</th>
              <th>IsPremium</th>
              <th>Status</th>
              <th>Details</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody className="overflow-x-auto text-center bg-gray-200">
            <tr>
              <td>1</td>
              <td>
                <p className="text-left">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, saepe.
                </p>
              </td>
              <td>Premium</td>
              <td>pending</td>
              <td>details</td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="overflow-x-auto w-full lg:h-[60vh] my-4 mx-auto text-white">
          <table className="table  w-full">
            <thead>
              <tr className="text-center overflow-auto font-semibold text-[16px] h-[45px] py-3 text-white bg-[#111]">
                <th className=" ">No</th>
                <th className=" ">Service Image</th>
                <th>Service Name</th>
                <th>Provider Name</th>
                <th>Price</th>
                <th>Area </th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <>
                <tr className=" text-center bg-gray-300">
                  <td className="text-black text-[16px] font-semibold "></td>
                  <td className="">
                    <div className="flex items-center space-x-3">
                      
                    </div>
                  </td>

                  <td className="text-black bg- font-semibold"></td>
                  <td className="text-black font-semibold"></td>
                  <td className="flex items-center justify-center">
                    <h2 className="text-black font-semibold mt-4"></h2>
                  </td>

                  <td className="text-black font-bold"></td>

                  <th>
                    <button
                      type="submit"
                      className="btn btn-ghost mr-2 bg-red-500 py-2 lg:py-3 px-3 text-white "
                    >
                      <AiOutlineDelete className="text-2xl"></AiOutlineDelete>
                    </button>
                    <Link>
                      <button
                        type="submit"
                        className="btn btn-ghost bg-[#2E856E] py-2 lg:py-3 px-3 text-white "
                      >
                        <AiOutlineEdit className="text-2xl"></AiOutlineEdit>
                      </button>
                    </Link>
                  </th>
                </tr>
              </>
            </tbody>
          </table>
        </div> */}
      </Container>
    </div>
  );
};

export default MyArticle;
