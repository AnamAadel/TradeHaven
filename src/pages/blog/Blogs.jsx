import React, { useState } from 'react'
import useBlog from '../../hooks/useBlog'
import BlogCart from '../home/components/BlogCart'
import CommonHero from '../shared/CommonHero'
import Pagination from '../shared/Pagination'

function Blogs() {
  const {blogData} = useBlog();
  console.log(blogData)

  
    const [pageNum, setPageNum] = useState(0);
    
    
    const [productData, setProductsData] = useState([]);
    const [showProductsNum, setShowProductsNum] = useState(10);


  return (
    <>
       <CommonHero PageName={"Blogs"} />
       <div className="main-blog-area pb-100px pt-100px">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogData.map((blog, idx)=> (
                    <BlogCart key={idx} data={blog} />

                ))}
                    
                    
                </div>
                <Pagination setPageNum={setPageNum} pageNum={pageNum} setData={setProductsData} showProductsNum={showProductsNum} />
            </div>
        </div>
    </>
  )
}

export default Blogs