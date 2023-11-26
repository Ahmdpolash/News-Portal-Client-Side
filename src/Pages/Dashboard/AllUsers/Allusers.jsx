import React from "react";

const AllUsers = () => {
  return (
    <div>
      <div className="bg-red-200 rounded-md">
        <h3 className="text-black font-semibold text-[15px] px-4">
          Total User Found
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
                className="px-6  py-3 text-centertext-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Make Admin
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 text-center py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex justify-center items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                </div>
              </td>

              <td className="px-6  text-center py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td className="px-6 text-center py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
