import React from 'react'
const noUserPhoto = "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais"

function BlogReplyBox({comment, blog}) {
    
    return (
        <div className="single-review relative border-4 rounded-lg mt-6" style={{marginLeft: "45px"}} data-aos="fade-up" data-aos-delay="200">

            <div className="review-img">
                    <img src={comment?.image || noUserPhoto} className='max-w-[40px] max-h-[40px] border-4 border-neutral object-cover rounded-full' alt="" />
                </div>
            <div className="review-content">
                <div className="review-top-wrap">
                    <div className="review-left">
                        <div className="review-name">
                            <h4 className="title">{comment.userName} </h4>
                            <span className="date">{comment.date}</span>
                        </div>
                    </div>
                </div>
                <div className="review-bottom">
                    <p>
                    {comment.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogReplyBox