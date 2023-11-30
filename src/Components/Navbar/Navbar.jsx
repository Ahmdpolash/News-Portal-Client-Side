import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import useAdmin from "../../Hooks/useAdmin";
import loader from "../../assets/loaders.json";
import Lottie from "lottie-react";
import "../../Layout/Dash.css";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const { isAdmin, isLoading } = useAdmin();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div>
      {/* {isLoading && (
        <div className="flex items-center h-[4vh] justify-center">
          <Lottie className="w-[140px]" animationData={loader} />
        </div>
      )} */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="relative max-w-8xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-16"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to="/">
              <img className="w-[120px] lg:w-[140px]" src={logo} alt="" />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex text-[16px] flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 lg:gap-x-7 sm:gap-x-3 sm:mt-0 sm:ps-7">
              <NavLink id="nav" to="/">
                <a
                  className=" font-bold sm:py-6 dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </NavLink>
              {!user ? (
                ""
              ) : (
                <>
                  <Link
                    to="/addArticle"
                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    href="#"
                  >
                    Add Article
                  </Link>
                  <Link
                    to="/allArticle"
                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    href="#"
                  >
                    All Article
                  </Link>
                  <Link
                    to="/subscription"
                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    href="#"
                  >
                    Subscription
                  </Link>
                  <Link
                    to="/premium"
                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    href="#"
                  >
                    Premium Articles
                  </Link>
                  <Link
                    to="/myArticle"
                    className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                    href="#"
                  >
                    My Article
                  </Link>
                </>
              )}

              {isAdmin && (
                <Link
                  to="/dashboard/adminHome"
                  className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="#"
                >
                  Dashboard
                </Link>
              )}

              {user ? (
                <>
                  <Link to="/profile">
                    <span className="inline-block h-[2.875rem] w-[2.875rem] bg-gray-100 rounded-full overflow-hidden">
                      <img className="" src={user?.photoURL} alt="" />
                    </span>
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                    href="#"
                  >
                    Sign Out
                    <FaSignOutAlt />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button
                      className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
                      href="#"
                    >
                      <svg
                        className="flex-shrink-0 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Log in
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
