import axios from 'axios'

const axiosPublic = axios.create({
  // baseURL: "https://trade-haven-server.vercel.app"
  baseURL: "http://localhost:5000"
})


function useAxiosPublic() {
  return axiosPublic
}

export default useAxiosPublic