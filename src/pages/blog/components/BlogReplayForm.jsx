import React from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPablic';
function BlogReplayForm({ blog, replies, setReplies , comment , isBlogReply, setIsBlogReplay }) {
    
    const axiosPublic = useAxiosPublic()
    const { user: currentUser } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleComment = (data, fieldValues) => {
        const replyData = { ...data, id: comment.id, image: currentUser?.photoURL || null };
        console.log(replyData)
        axiosPublic.put(`/blog_reply/${blog._id}`, replyData).then(res => {
            console.log(res.data)
            setReplies([...replies, replyData])
            fieldValues.target.userName.value = ""
            fieldValues.target.email.value = ""
            fieldValues.target.comment.value = ""
            setIsBlogReplay(false)
        }).catch(err => console.log(err));
    }

    return (
        <div className={`blog-comment-form z-50 bg-white  max-w-[500px] absolute top-0 right-0 border-4 border-neutral ${isBlogReply ? "h-auto p-8 visible" : "h-0 p-0 invisible"}`}>
            <div className="star-box flex gap-4 items-center mb-6">
            <h2 className="comment-heading" data-aos="fade-up" data-aos-delay="200">Leave Reply</h2>
                
                <button className='text-4xl absolute top-10 right-10' onClick={() => setIsBlogReplay(false)}><IoClose /> </button>
            </div>
            <form onSubmit={handleSubmit(handleComment)} className="row">

                <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="single-form mb-lm-15px">
                        <input type="text" placeholder="Name *" {...register("userName", { required: true })} />
                        {errors.userName && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="400">
                    <div className="single-form mb-lm-15px">
                        <input type="email" placeholder="Email *" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="single-form">
                        <textarea placeholder="Message" {...register("comment", { required: true })} ></textarea>
                        {errors.comment && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                    <button className="btn btn-neutral mt-30px" type="submit">Post Comment
                        </button>
                </div>
            </form>
        </div>
    )
}

export default BlogReplayForm