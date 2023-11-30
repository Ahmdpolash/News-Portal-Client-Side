import React, { useState } from "react";
import useArticle from "../../../Hooks/useArticle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import loader from "../../../assets/loaders.json";

import Modals from "../../../Components/Modal/Modal";
import toast from "react-hot-toast";

const AdminArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [articles, refetch, isLoading] = useArticle();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // You can adjust this number based on your preference

  const indexOfLastUser = (currentPage + 1) * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = articles.slice(indexOfFirstUser, indexOfLastUser);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/articles/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User Deleted Successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleApprove = (id) => {
    axiosPublic.patch(`/articles/${id}`, { status: "approve" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
      }
      console.log(res.data);
    });
  };

  const handlePremium = (id) => {
    axiosPublic.patch(`/articles/premium/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("This Article is now Premium");
      }
    });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | All Article</title>
      </Helmet>

      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Lottie className="w-[210px]" animationData={loader} />
        </div>
      ) : (
        <table className="ml-52 min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Author
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Article Title
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Publisher
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Approval
              </th>

              <th
                scope="col"
                className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Make Premium
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers?.map((article) => (
              <tr key={article?._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={article?.authors_image}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">
                    {article?.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {article?.status ? article.status : "pending"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {article?.time}
                </td>
                <td className="px-6 py-4 font-semibold whitespace-nowrap text-sm text-gray-500">
                  {article?.publisher}
                </td>

                <td className="px-6  py-4 whitespace-nowrap text-sm text-gray-500">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    {article?.status === "approve" ? (
                      "approved"
                    ) : (
                      <button onClick={() => handleApprove(article?._id)}>
                        Approve
                      </button>
                    )}
                  </a>
                  <a
                    href="#"
                    className="ml-2 text-red-600 text-center hover:text-red-900"
                  >
                    {article?.decline_message ? (
                      <p>Declined</p>
                    ) : (
                      <button onClick={() => handleOpen()}>Decline</button>
                    )}
                  </a>
                </td>

                <td className="px-6 flex items-center justify-center mt-2 gap-3 py-4 whitespace-nowrap text-center  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    {article?.Quality === "premium" ? (
                      <p className="text-[23px]">
                        <IoCheckmarkCircleSharp />
                      </p>
                    ) : (
                      <button onClick={() => handlePremium(article?._id)}>
                        Premium
                      </button>
                    )}
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    <button onClick={() => handleDelete(article?._id)}>
                      Delete
                    </button>
                  </a>
                </td>
                <Modals
                  open={open}
                  article={article}
                  handleClose={handleClose}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav className="flex items-center justify-center ml- py-20 -space-x-px">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 0}
        >
          <svg
            className="flex-shrink-0 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="hidden sm:block">Previous</span>
        </button>
        {[...Array(Math.ceil(articles.length / itemsPerPage)).keys()].map(
          (page) => (
            <button
              key={page}
              type="button"
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                currentPage === page
                  ? "bg-gray-200 text-gray-800"
                  : "border border-gray-200 text-gray-800 hover:bg-gray-100"
              } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          )
        )}
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={indexOfLastUser >= articles.length}
        >
          <span className="hidden sm:block">Next</span>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default AdminArticle;
