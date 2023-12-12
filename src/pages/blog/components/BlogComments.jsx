import React from 'react'
import CommentBox from './CommentBox'

function BlogComments({ blog, comments }) {
    console.log("comments", comments)
    return (
        <div className="comment-area">
            <h2 className="comment-heading" data-aos="fade-up" data-aos-delay="200">Comments (03)</h2>
            <div className="review-wrapper">
                {comments.length > 0 ? comments.map(comment => (
                    <CommentBox key={comment.id} comment={comment} blog={blog} />

                )) :
                    null
                }

            </div>
        </div>
    )
}

export default BlogComments