import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export const axiosSecure = axios.create({
  baseURL: "https://daily-news-server-side.vercel.app",
});

const useAxios = () => {
  const { logOut } = useAuth();

  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(function (config) {
    
    const token = localStorage.getItem("access-token");
    // console.log("request stopped by interceptor", token);
    config.headers.authorization = `Bearer ${token}`;

    return config;
  });

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("status error in the interceptor", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxios;
