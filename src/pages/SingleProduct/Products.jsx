import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPablic';
import useProducts from '../../hooks/useProducts';
import CommonHero from '../shared/CommonHero';
import Pagination from '../shared/Pagination';
import ProductCard from '../shared/ProductCard';

function Products() {
    const {products , isPending} = useProducts()
    const [pageNum, setPageNum] = useState(0);
    
    
    const [productData, setProductsData] = useState([]);
    const [showProductsNum, setShowProductsNum] = useState(10);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic(`/products?skip=${pageNum}&limit=${showProductsNum}`)
            .then(res => setProductsData(res.data))
 
    }, [pageNum, showProductsNum,axiosPublic]);


    const handlePage = (e) => {
        console.log(e.target.value)
        setShowProductsNum(parseInt(e.target.value))
        setPageNum(0)
    }

    

  return (
    <>
        <CommonHero PageName={"Products"} />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-10">
        {productData.map((item, idx)=> (
            <ProductCard key={idx} item={item} />
        ))}

        </div>

            <div className="flex justify-between my-6 border p-6 items-center rounded-lg flex-wrap gap-8 container mx-auto">
            <p style={{ margin: "0" }}><span className='text-red-500 font-bold'>{((showProductsNum * pageNum) + showProductsNum) < products.length ? ((showProductsNum * pageNum) + showProductsNum) : products.length  }</span> Product Found of <span className='text-red-500 font-bold'>{products.length}</span></p>
            
            <Pagination setPageNum={setPageNum} pageNum={pageNum} setData={setProductsData} showProductsNum={showProductsNum} items={products} />
            <select className="select select-bordered w-full max-w-xs" onChange={handlePage}>
                    
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                    <option value={50}>50</option>
                </select>
        </div>
    </>
  )
}

export default Products