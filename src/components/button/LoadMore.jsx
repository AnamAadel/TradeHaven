import React from 'react';
import { HiOutlineRefresh } from "react-icons/hi";

function LoadMore({setLimit, limit}) {
    return (
        <div className="load-more-items text-center mt-30px mb-6" data-aos="fade-up" onClick={()=> setLimit(limit + 8)}>
            <a className="btn btn-lg btn-primary btn-hover-dark m-auto"> Load More <HiOutlineRefresh className="text-3xl" /></a>
        </div>
    )
}

export default LoadMore