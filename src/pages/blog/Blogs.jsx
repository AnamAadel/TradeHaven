import React, { useEffect, useState } from 'react'
import useAxiosPublic from '../../hooks/useAxiosPablic'
import useBlog from '../../hooks/useBlog'
import BlogCart from '../home/components/BlogCart'
import CommonHero from '../shared/CommonHero'
import Pagination from '../shared/Pagination'

function Blogs() {
  const {blogData} = useBlog();
  const [blog, setBlog] = useState([]);
    const [pageNum, setPageNum] = useState(0);
    const [productData, setProductsData] = useState([]);
    const [showProductsNum, setShowProductsNum] = useState(10);
    const axiosPublic = useAxiosPublic();
    const handlePage = (e) => {
      console.log(e.target.value)
      setShowProductsNum(parseInt(e.target.value))
      setPageNum(0)
  }

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


  useEffect(() => {
    console.log("skip", pageNum, "limit", showProductsNum)
    
    axiosPublic.get(`/blog?skip=${pageNum}&limit=${showProductsNum}`)
        .then(data =>{ 
          setBlog(data.data)
        })
}, [pageNum, showProductsNum, axiosPublic]);

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
                <Pagination setPageNum={setPageNum} pageNum={pageNum} setData={setProductsData} showProductsNum={showProductsNum} item={blog} />
            </div>
        </div>
    </>
  )
}

export default Blogs