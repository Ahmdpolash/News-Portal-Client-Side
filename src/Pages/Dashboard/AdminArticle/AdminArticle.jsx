import React from "react";
import useArticle from "../../../Hooks/useArticle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";
import Lottie from "lottie-react";
import loader from "../../../assets/loaders.json";

import Modals from "../../../Components/Modal/Modal";

const AdminArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [articles, refetch, isLoading] = useArticle();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
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
    axiosPublic.patch(`/articles/${id}`).then((res) => {
      console.log(res.data);
    });
  };

  const handlePremium = (id) => {
    axiosPublic.patch(`/articles/premium/${id}`).then((res) => {
      console.log(res.data);
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
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
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
            {articles?.map((article) => (
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
                    <button onClick={() => handleApprove(article?._id)}>
                      Approve
                    </button>
                  </a>
                  <a
                    href="#"
                    className="ml-2 text-red-600 text-center hover:text-red-900"
                  >
                    <button onClick={() => handleOpen()}>Decline</button>
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
              </tr>
            ))}
          </tbody>

          <Modals open={open} handleClose={handleClose} />
        </table>
      )}
    </div>
  );
};

export default AdminArticle;
