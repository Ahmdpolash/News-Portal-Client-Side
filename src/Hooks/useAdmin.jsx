import React from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: isAdmin } = useQuery({
    queryKey: ["user?.email", "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/admin/${user?.email}`);
      console.log("new data", res.data);
      return res.data.admin;
    },
  });

  return { isAdmin };
};

export default useAdmin;
