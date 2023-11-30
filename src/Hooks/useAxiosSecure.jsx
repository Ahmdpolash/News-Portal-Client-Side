import axios from "axios";


const axiosPublic = axios.create({
  baseURL: "https://daily-news-server-side.vercel.app",
});

const useAxiosSecure = () => {


  return axiosPublic;


};

export default useAxiosSecure;
