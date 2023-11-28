import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "../../Shared/Container/Container";

const Publisher = () => {
  const axiosPublic = useAxiosPublic();

  const { data: publishers } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiosPublic.get("/publishers");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <Container>
      <div className="my-8">
        <h1 className="font-semibold text-3xl my-2 text-center">
          Our Article Publisher
        </h1>
        <div className="h-1 w-20 bg-black text-center mx-auto"></div>

        <div className="flex justify-between flex-col lg:flex-row">
          {publishers?.map((publisher) => (
            <img className="w-[100px]" src={publisher?.image} alt="" />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Publisher;
