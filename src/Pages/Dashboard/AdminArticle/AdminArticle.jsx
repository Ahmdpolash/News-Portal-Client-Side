import React from "react";
import useArticle from "../../../Hooks/useArticle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AdminArticle = () => {
  const axiosPublic = useAxiosPublic();
  const [articles, refetch] = useArticle();

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

  return (
    <div>
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
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Approval
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
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
                  {article?.status}
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
                  Approve
                </a>
                <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                  Decline
                </a>
              </td>

              <td className="px-6  py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Premium
                </a>
                <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                 <button>Delete</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminArticle;
