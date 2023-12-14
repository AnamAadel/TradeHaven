import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination({setPageNum, pageNum, showProductsNum, items}) {
    const pagination = [...Array(Math.ceil(items.length / showProductsNum)).keys()];

    console.log(items.length)

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
                <ul className="flex items-center justify-center">
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