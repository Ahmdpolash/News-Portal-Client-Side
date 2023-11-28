import React from "react";
import { FaEdit, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FiCornerLeftUp } from "react-icons/fi";
import logo from "../assets/logo.png";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import "./Dash.css";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-64 ">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#docs-sidebar"
            aria-controls="docs-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-10 h-10 ml-3 mt-3"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div
            id="docs-sidebar"
            className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="px-6  ">
              <Link to="/">
                <div className="flex items-center bg-gray-200 justify-center rounded-lg">
                  <FiCornerLeftUp className="text-xl" />
                  <button className=" px-4 py-2">Go Home</button>
                </div>
              </Link>
            </div>
            <nav
              className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul className="space-y-1.5">
                <li id="nav">
                  <NavLink
                    className="flex w-full items-center font-semibold gap-x-3.5 py-2 px-2.5  text-sm rounded-lg hover:bg-gray-100 "
                    to="/dashboard/adminHome"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </NavLink>
                </li>

                <li id="nav" className="hs-accordion">
                  <NavLink
                    to="/dashboard/allUsers"
                    className="flex w-full items-center font-semibold gap-x-3.5 py-2 px-2.5  text-sm rounded-lg hover:bg-gray-100 "
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    All Users
                  </NavLink>
                </li>
                <li id="nav" className="hs-accordion">
                  <NavLink
                    to="/dashboard/adminArticle"
                    className="flex w-full items-center font-semibold gap-x-3.5 py-2 px-2.5  text-sm rounded-lg hover:bg-gray-100 "
                  >
                    <FaEdit />
                    All Article
                  </NavLink>
                </li>

                <li className="hs-accordion" id="nav">
                  <NavLink
                    className="flex w-full items-center font-semibold gap-x-3.5 py-2 px-2.5  text-sm rounded-lg hover:bg-gray-100 "
                    to="/dashboard/publisher"
                  >
                    <FaUser />
                    Add Publisher
                  </NavLink>
                </li>

                <button
                  onClick={handleLogOut}
                  className="absolute bg-black text-white px-4 font-bold py-2 rounded-md bottom-5 flex items-center gap-3"
                >
                  Sign Out <FaArrowRightFromBracket />{" "}
                </button>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex-1 px-4 py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
