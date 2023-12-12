import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BlogReplayForm from './BlogReplayForm'
import BlogReplyBox from './BlogReplyBox'
const noUserPhoto = "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais"

function CommentBox({comment, blog}) {
    const [isBlogReply, setIsBlogReplay] = useState(false)
    const [replies, setReplies] = useState(comment.replies ?comment.replies : []);

    return (
        <div>
            <div className="single-review relative" data-aos="fade-up" data-aos-delay="200">
            <BlogReplayForm replies={replies} setReplies={setReplies} isBlogReply={isBlogReply} setIsBlogReplay={setIsBlogReplay} comment={comment} blog={blog} />

                <div className="review-img">
                        <img src={comment?.image || noUserPhoto} className='max-w-[100px] h-[100px] border-4 border-neutral object-cover rounded-full' alt="" />
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
                        <div className="review-left">
                            <a onClick={()=> setIsBlogReplay(true)}>Reply <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
            </div>

                {replies.length ? replies.map(comment => (
                <BlogReplyBox key={comment.id} comment={comment} />

                )):
                null
                }

        </div>
    )
}

export default CommentBox