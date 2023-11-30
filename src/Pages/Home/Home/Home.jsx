import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Trending from "../Trending/Trending";
import Statistic from "../Statistic/Statistic";
import { Link } from "react-router-dom";
import Plans from "../Plans/Plans";
import ContactUs from "../Contact/ContactUs";
import Footer from "../Footer/Footer";
import Publisher from "../Publisher/Publisher";
import { Helmet } from "react-helmet";
import Latest from "../Latest/Latest";
import Story from "../Latest/Story";
import Container from "../../Shared/Container/Container";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Show the modal after 10 seconds
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News |Home</title>
      </Helmet>
      {showModal && (
        <Container>
          <div className=" bottom-0 px-4 lg:px-16 lg:left-[45%] fixed  z-40 right-0 w-full">
            <div className="relative py-6 px-8 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 w-full md:w-6/12 mt-6 md:mb-0">
              <button onClick={handleCancel} className="absolute text-2xl -right-2 bg-red-600 text-white w-[35px] h-[35px] rounded-full -top-4">
                X
              </button>
              <div className="flex justify-between">
                <div className="w-full">
                  <div className="text-white text-lg font-medium mb-2">
                    Lifetime
                  </div>
                  <div className="text-dark-2 text-sm text-white leading-tight">
                    Access forever
                  </div>
                </div>
                <div className="text-dark-1 text-white text-4xl leading-none text-right">
                  $349<span className="ml-1 text-dark-2 text-base">/once</span>
                </div>
              </div>
              <div className="border-b border-light-2 w-full mt-6 mb-8" />
              <ul className="mb-10">
                <li className="flex items-center text-white gap-1 tex-white text-sm font-medium mb-4">
                  <IoMdCheckmarkCircle className="text-2xl" />

                  <span className="text-white">
                    One payment, access forever
                  </span>
                </li>
                <li className="flex items-center gap-1 text-white text-sm font-medium mb-4">
                  <IoMdCheckmarkCircle className="text-2xl" />

                  <span className="text-white">All features and benefits</span>
                </li>
              </ul>
              <Link to='/subscription'>
                <button 
                  className="inline-flex items-center justify-center bg-black text-white h-10 px-5 rounded-lg text-sm font-medium leading-none transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-default hover:bg-blue-4 w-full"
                  href="#"
                >
                  <span>Get started</span>
                </button>
              </Link>
            </div>
          </div>
        </Container>
      )}

      <Banner />
      <Trending />
      <Statistic />
      <Latest />
      <Plans />
      <Story />
      <Publisher />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
