import React, { useState } from "react";
import img from "../../assets/anim.json";
import { Link } from "react-router-dom";
import card from "../../assets/card.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
const SubscriptionCard = () => {
  const [payment, setPayment] = useState();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daily News | Subscription</title>
      </Helmet>
      <div className="lg:h-[30vh] bg-gray-50 ">
        <h1 className="text-3xl text-center font-bold my-4">
          To Read Our Premium Article
        </h1>
        <div className="flex items-center justify-around">
          <div className="bg-gray-300 mb-10 px-6 mx-auto h-[270px]  w-[450px] rounded-lg border-2 ">
            <Lottie className=" mx-auto w-[120px]" animationData={card} />

            <select
              className="w-full rounded-md py-2 px-4"
              onChange={(e) => setPayment(e.target.value)}
              name="payment"
              id=""
            >
              <option value="Please Select One">Please Select Your Plan</option>
              <option value="15">1 Minute - $2</option>
              <option value="50">5 Days -$20</option>
              <option value="100">8 Days -$100</option>
            </select>

            <Link to={`/payment/${payment}`}>
              <button className="mx-auto font-bold px-4 py-2 rounded-md bg-red-500 text-white w-1/2 flex justify-center mt-5">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
