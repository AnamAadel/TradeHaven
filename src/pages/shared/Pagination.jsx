import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPablic";
import useProducts from "../../hooks/useProducts";

function Pagination({setPageNum,pageNum, setData, showProductsNum}) {
    const {products , isPending} = useProducts()
    const axiosPublic = useAxiosPublic();
    console.log(showProductsNum)
    const pagination = [...Array(Math.ceil(products.length / showProductsNum)).keys()];





    useEffect(() => {
        console.log("skip", pageNum, "limit", showProductsNum)
        console.log(pageNum)
        axiosPublic.get(`/products?skip=${pageNum}&limit=${showProductsNum}`)
            .then(data =>{ 
                setData(data.data)
                console.log(data.data)
            })
    }, [pageNum, showProductsNum, axiosPublic, setData]);


    
    

    const handlePrev = (e) => {
        if(pageNum > 0){
            setPageNum(pageNum - 1)

        }
    }

    const handleNext = (e) => {
        if(pageNum < pagination.length - 1){
            setPageNum(pageNum + 1)

        }
    }
    return (
        <div className="pro-pagination-style text-center mt-12" data-aos="fade-up" data-aos-delay="200">
            <div className="pages">
                <ul className="flex items-center">
                    <li className="li"> 
                    <a className="page-link justify-center items-center" style={{display: "flex"}} onClick={handlePrev}>
                    <FaArrowLeft />

                    </a>
                    </li>
                    {pagination.map((page, idx)=> (
                    <li className="li" key={idx}><a className={`page-link ${pageNum === idx ? "active" : ""} cursor-pointer`} onClick={()=> setPageNum(page)}>{page + 1}</a></li>

                    ))}
                    <li className="li"> <a className="page-link justify-center items-center" style={{display: "flex"}} onClick={handleNext}>
                    <FaArrowRight />

                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination