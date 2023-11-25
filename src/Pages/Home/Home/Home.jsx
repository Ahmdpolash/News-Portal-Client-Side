import React, { useState, useEffect } from "react";
import Banner from "../Banner/Banner";
import Trending from "../Trending/Trending";
import Statistic from "../Statistic/Statistic";
import { Link } from "react-router-dom";
import Plans from "../Plans/Plans";
import ContactUs from "../Contact/ContactUs";

const Home = () => {
  
  // const [showModal, setShowModal] = useState(false);

  // const handleSubscribe = () => {
  //   setShowModal(false);
  // };

  // const handleCancel = () => {
  //   setShowModal(false);
  // };

  // useEffect(() => {
  //   // Show the modal after 10 seconds
  //   const timeoutId = setTimeout(() => {
  //     setShowModal(true);
  //   }, 10000);

  //   // Clean up the timeout to avoid memory leaks
  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <div>
      {/* {showModal && (
        <div className="modal absolute bg-green-400 flex items-center h-72 rounded-lg left-[35%] top-[30%] w-72 z-10">
          <div className="modal-content">
            <p>Subscription Relevant Text</p>
            <Link to="/addArticle">
              {" "}
              <button onClick={handleSubscribe}>Subscribe</button>
            </Link>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )} */}

      <Banner />
      <Trending />
      <Statistic />
      <Plans/>
      <ContactUs/>
    </div>
  );
};

export default Home;
