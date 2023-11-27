import React from "react";
import useUser from "../../../Hooks/useUser";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = useUser();
  const axiosPublic = useAxiosPublic();

  const handleMakeAdmin = (user) => {
    const result = axiosPublic.patch(`/users/admin/${user._id}`);
    console.log(result);
    if (result.data.modifiedCount > 0) {
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
      <div className="bg-red-200 rounded-md">
        <h3 className="text-black font-semibold text-[15px] px-4">
          Total {users?.length} User Found
        </h3>
      </div>

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
            {users?.map((user, index) => (
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
      </div>
    </div>
  );
};

export default AllUsers;
