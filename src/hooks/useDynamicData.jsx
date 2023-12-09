import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPablic';

function useDynamicData(path) {
    const axiosPublic = useAxiosPublic();
    const { refetch ,isPending, isError, data = [], error } = useQuery({ queryKey: ['blog'], queryFn: async ()=> {
        const res = await axiosPublic.get(`${path}`);
        return res.data;
    } })
  return {data , refetch, isPending, isError, error};
}

export default useDynamicData