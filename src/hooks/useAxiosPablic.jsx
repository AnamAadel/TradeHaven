import axios from 'axios'

const axiosPublic = axios.create({
  baseURL: "https://trade-haven-server-8m6jhosct-aadelbanat8991-gmailcom.vercel.app"
})


function useAxiosPublic() {
  return axiosPublic
}

export default useAxiosPublic