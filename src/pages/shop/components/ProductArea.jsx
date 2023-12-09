import { useEffect, useState } from 'react';
import LoadMore from '../../../components/button/LoadMore';
import { useGlobalContext } from '../../../context/useGlobalContext';
import useAxiosPublic from '../../../hooks/useAxiosPablic';
import useProducts from '../../../hooks/useProducts';
import FunctionalHeader from './FunctionalHeader';
import ShopCard from './ShopCard';


function ProductArea({search}) {
    const {
        brandName,
        categoryName,
        checkedCategory,
        checkedBrand,
        priceRange
      } = useGlobalContext()
    const {products} = useProducts();
    const [isOneColumn, setIsOneColumn] = useState(false);
    const [productData, setProductData] = useState([]);
    const [limit, setLimit] = useState(8);
    const [productSort, setProductSort] = useState("");
    const axiosPublic = useAxiosPublic();
    const [isLoading, setIsLoading]= useState(false);

    const columnStyle = isOneColumn ? {display: "block"} : {display: "grid"}

    console.log(checkedCategory?.map(item => item.name).join(","))
    useEffect(()=> {

        setIsLoading(true);


        axiosPublic.get(`/products?limit=${limit}${productSort ? "&productSort=" + productSort: ""}&category=${checkedCategory?.map(item => item.name).join(",") }&skip=0&brand=${checkedBrand?.map(item => item.name).join(",")}&${priceRange ? "priceRange=" + priceRange: "" }&search=${search}`).then(res => 
            {
            setProductData(res.data);
            setIsLoading(false)
        }).catch(err => console.log(err));
        console.log(search)
    },[
        limit,
        productSort, 
        axiosPublic, 
        setIsLoading, 
        categoryName, 
        brandName, 
        checkedCategory, 
        checkedBrand, 
        priceRange, 
        search
    ])

    return (
        <div className='col-span-3'>
            <div className="container mx-auto ">
                <FunctionalHeader
                 products={products} setIsOneColumn={setIsOneColumn} isOneColumn={isOneColumn} productData={productData} setProductSort={setProductSort} />

            </div>
            <div className='container mx-auto  grid-cols-1 md:grid-cols-2 my-3 gap-10' style={columnStyle}>
            {productData && productData.map(product => (

                <ShopCard isOneColumn={isOneColumn} product={product} key={product._id} />
            ))}
            </div>
            {
                limit < products.length ?
                !isLoading ? <LoadMore setLimit={setLimit} limit={limit} /> : <span className="loading loading-spinner loading-lg block mx-auto py-16"></span>
            : null
            }
        </div>
    )
}

export default ProductArea