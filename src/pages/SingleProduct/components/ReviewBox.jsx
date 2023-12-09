import React, { useState } from 'react';
import AddReply from './AddReply';
const noUserPhoto = "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais"

function ReviewBox({user, product}) {
    const [isOpenReply, setIsOpenReply] = useState(false);
    const [replies, setReplies] = useState(user?.reply || []);
    console.log("replies",replies)
    console.log("user",user)
    return (
        <div className="review-wrapper mt-6 border-t-2 py-3 relative">
        
            <div className="single-review flex gap-4 items-center">
            <AddReply isOpenReply={isOpenReply} setReplies={setReplies} product={product} setIsOpenReply={setIsOpenReply} user={user} replies={replies} />
                <div className="review-img">
                    <img src={user?.image || noUserPhoto} className='max-w-[100px] h-[100px] border-4 border-neutral object-cover rounded-full' alt="" />
                </div>
                <div className="review-content">
                    <div className="review-top-wrap">
                        <div className="review-left">
                            <div className="review-name">
                                <h4>{user.userName}</h4>
                            </div>
                        </div>
                        <div className="review-left">
                            <button className='btn-sm btn-neutral ' onClick={()=> setIsOpenReply(true)}>Reply</button>
                        </div>
                    </div>
                    <div className="review-bottom">
                        <p>{user.comment}</p>
                    </div>
                </div>
            </div>
            {
                replies && replies.map((comment, idx)=> (

                    <div key={idx} className="review-wrapper ml-16 mt-6 border-t-2">

                        <div className="single-review flex gap-4 items-center">
                            <div className="review-img ">
                                <img src={comment?.image || noUserPhoto} className='max-w-[100px] h-[100px] border-4 border-neutral object-cover rounded-full' alt="" />
                            </div>
                            <div className="review-content">
                                <div className="review-top-wrap">
                                    <div className="review-left">
                                        <div className="review-name">
                                            <h4>{comment.userName}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-bottom">
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default ReviewBox