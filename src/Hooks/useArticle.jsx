import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";

const useArticle = () => {
  const axiosPublic = useAxiosPublic();

  const { data: articles = [],refetch } = useQuery({
    queryKey: ["adminArticle"],
    queryFn: async () => {
      const res = await axiosPublic.get("/articles");
      console.log(res.data);
      return res.data;
    },
  });
  return [articles,refetch]

 
};

export default useArticle;
