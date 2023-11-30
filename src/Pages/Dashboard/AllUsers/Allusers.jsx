import React, { useState } from "react";
import useUser from "../../../Hooks/useUser";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loader from "../../../assets/loaders.json";
import { Helmet } from "react-helmet";

const AllUsers = () => {

  const [users, refetch, isLoading] = useUser();
  const axiosPublic = useAxiosPublic();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // You can adjust this number based on your preference

  const indexOfLastUser = (currentPage + 1) * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleMakeAdmin = async (user) => {
    const result = await axiosPublic.patch(`/users/admin/${user._id}`);
    console.log(result);
    if (result.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is Admin Now`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | All Users</title>
      </Helmet>
      <div className="bg-red-200 rounded-md">
        <h3 className="text-black font-semibold text-[15px] px-4">
          Total {users?.length} User Found
        </h3>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-[80vh]">
          <Lottie className="w-[210px]" animationData={loader} />
        </div>
      ) : (
        <div>
          <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-centert text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-centert text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Account Created
                </th>
                <th
                  scope="col"
                  className="px-6  py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {currentUsers?.map((user, index) => (
                <tr key={user._id}>
                  <td className="px-6 text-center py-4 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex justify-center items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user?.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-6  text-center py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {user?.name}
                    </span>
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                    {user?.email}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                    {user?.date}
                  </td>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                    {user?.role === "admin" ? (
                      <>
                        <span className="px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Admin
                        </span>
                      </>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="bg-red-600 text-[13px] shadow-md text-white font-bold py-2 rounded-md px-4"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
            {[...Array(Math.ceil(users.length / itemsPerPage)).keys()].map(
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
              disabled={indexOfLastUser >= users.length}
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
      )}
    </div>
  );
};

export default AllUsers;
