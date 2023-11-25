import React from "react";
import Container from "../../Shared/Container/Container";

const Plans = () => {
  return (
    <div className="bg-gray-50">
      <h1 className="font-bold text-3xl text-center py-3 mt-5">
        Our Pricing and Plans
      </h1>
      <div className="h-1 w-20 bg-black text-center mx-auto"></div>

      <Container>
        <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col hover:-translate-y-2 duration-200 hover:shadow-red-200 rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                id="tier-hobby"
              >
                Free
              </h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                $0
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Free For 1 Month.
              </p>
              <p className="font-semibold">Free </p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Bookmark Favorites
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      1 Premium account
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Cancel anytime
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Private Bookmarks (via DMs) 🚧{" "}
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      15 hours/month of listening time from our audiobooks
                      subscriber catalog
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="/login"
                    className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                    aria-describedby="tier-team"
                  >
                    Get started today
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex hover:-translate-y-2 duration-200 hover:shadow-red-200 flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                id="tier-team"
              >
                Pro
              </h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                $16
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                For those who expect more.
              </p>
              <p className="font-bold "> Pro</p>
            </div>

            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Bookmark Favorites
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      2 Premium account
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Cancel Anytime
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Private Bookmarks (via DMs) 🚧
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      15 hours/month of listening time from our audiobooks
                      subscriber catalog
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="/billing"
                    className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                    aria-describedby="tier-team"
                  >
                    Get started today
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex hover:-translate-y-2 duration-200 hover:shadow-red-200 flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                id="tier-team"
              >
                Advance
              </h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                $25
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                For those who expect more(3x).
              </p>
              <p className="font-bold "> Advanced</p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Bookmark Favorites
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Up to premium 6 Accounts
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Cancel Anytime
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Access to spotify kids
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      72 hours/month of listening time from our audiobooks
                      subscriber catalog
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="/billing"
                    className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                    aria-describedby="tier-team"
                  >
                    Get started today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Plans;
