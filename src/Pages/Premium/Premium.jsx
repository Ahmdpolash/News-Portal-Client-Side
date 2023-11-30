//! query api for get
//https://daily-news-server-side.vercel.app/premium?Quality=premium

import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useArticle from "../../Hooks/useArticle";
import Container from "../Shared/Container/Container";
import PremiumCard from "./PremiumCard";
import useAxios from "../../Hooks/useAxios";

const Premium = () => {
  //   const [articles] = useArticle();

  const axiosPublic = useAxios();
  const { data: premiums = [], isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/premium/premium`);
      return res.data; // Add this line to return the data
    },
  });

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {premiums?.map((premium) => (
            <PremiumCard key={premium?._id} premium={premium} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Premium;
