import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: "http://localhost:5000"
    baseURL: "https://trade-haven-server.vercel.app"
})
function useAxiosSecure() {
  return axiosSecure
}

export default useAxiosSecure