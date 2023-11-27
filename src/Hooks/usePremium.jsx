import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const usePremium = () => {
  const axiosPublic = useAxiosPublic();

  const { data, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.patch(`/articles/premium/${id}`);
      return res.data;
    },
  });

  return { data, refetch };
};

export default usePremium;
