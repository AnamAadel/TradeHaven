import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const noUserPhoto = "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais"

function CommentBox({comment}) {
    return (
        <div className="single-review" data-aos="fade-up" data-aos-delay="200">
            <div className="review-img">
                    <img src={comment?.image || noUserPhoto} className='max-w-[100px] h-[100px] border-4 border-neutral object-cover rounded-full' alt="" />
                </div>
            <div className="review-content">
                <div className="review-top-wrap">
                    <div className="review-left">
                        <div className="review-name">
                            <h4 className="title">{comment.name} </h4>
                            <span className="date">21 July 2021</span>
                        </div>
                    </div>
                </div>
                <div className="review-bottom">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incidid ut labore et dolor magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercita ullamc laboris nisi ut aliquip ex ea comm consequat.
                    </p>
                    <div className="review-left">
                        <a >Reply <FaArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentBox