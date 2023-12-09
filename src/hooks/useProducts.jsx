import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPablic';

function useProducts() {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], isPending } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get("/products");
            return res.data
        }
    });

    return {products, isPending}
}

export default useProducts