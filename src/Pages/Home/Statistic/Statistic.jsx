import React from "react";
import CountUp from "react-countup";
import Container from "../../Shared/Container/Container";
import { FaUsers } from "react-icons/fa";
import useUser from "../../../Hooks/useUser";

const Statistic = () => {
  const [user] = useUser();

  const normalUser = user?.filter((use) => !use.premiumTaken);
  const premiumUser = user?.filter((use) => use.premiumTaken);
  
  return (
    <Container>
      <div>
        <h1 className="font-bold text-3xl my-2 text-center">Statistic</h1>
        <div className="h-1 w-11 bg-black text-center mx-auto"></div>

        <div className="flex border-2 py-6 lg:py-10 shadow-md text-black bg-gray-100 justify-evenly flex-wrap items-center lg:gap-40 gap-x-14 gap-y-10 lg:my-10 my-5">
          <div className="">
            <h4 className="text-lg sm:text-xl font-semibold text-center">
              All users
            </h4>
            <p className="sm:mt-3 flex items-center gap-3 text-xl sm:text-3xl text-center font-bold text-blue-600">
              <FaUsers />
              <CountUp delay={0.5} end={user?.length} />
              <span>+</span>
            </p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-center">
              Normal users
            </h4>
            <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-600">
              <CountUp delay={0.5} end={normalUser?.length} />
              <span>+</span>
            </p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-center">
              Premium users
            </h4>
            <p className="sm:mt-3 text-xl sm:text-3xl text-center font-bold text-blue-600">
              <CountUp delay={0.5} end={premiumUser.length} />
              <span>+</span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statistic;
