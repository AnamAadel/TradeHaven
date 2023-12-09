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
                    
                    <BlogCart data="24 Aug, 2021" heading="It is a long established factoi ader will be distracted" image='https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais' />

                    <BlogCart data="24 Aug, 2021" heading="Contrary to popular belieflo lorem Ipsum is not" image="https://img.freepik.com/free-photo/man-with-car-keys_1187-1058.jpg?w=826&t=st=1700404578~exp=1700405178~hmac=d84632a376e0e11a6731d8807fc4e47893e71b20c7ed752e3021aee0848053bf" />
                </div>
                <Pagination setPageNum={setPageNum} pageNum={pageNum} setData={setProductsData} showProductsNum={showProductsNum} />
            </div>
        </div>
    </>
  )
}

export default Blogs