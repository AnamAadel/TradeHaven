import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../../context/AuthProvider';
import useAxiosPublic from '../../../hooks/useAxiosPablic';
function AddComment({ blog, setComments, comments }) {
    
    const axiosPublic = useAxiosPublic()
    const { user: currentUser } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleComment = (data, fieldValues) => {
        const reviewData = { ...data, id: uuidv4(),  image: currentUser?.photoURL || null, date: new Date() };
        axiosPublic.post(`/blog_comments/${blog._id}`, reviewData).then(res => {
            console.log(res.data)
            setComments([...comments, reviewData])
            fieldValues.target.userName.value = ""
            fieldValues.target.email.value = ""
            fieldValues.target.comment.value = ""
        }).catch(err => console.log(err));
    }

    return (
        <div className="blog-comment-form">
            <h2 className="comment-heading" data-aos="fade-up" data-aos-delay="200">Leave a Comment</h2>
            <form onSubmit={handleSubmit(handleComment)} className="row">

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="single-form mb-lm-15px">
                        <input type="text" placeholder="Name *" {...register("userName", { required: true })} />
                        {errors.userName && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
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
                    <button className="btn btn-primary btn-hover-dark border-0 mt-30px" type="submit">Post Comment
                        </button>
                </div>
            </form>
        </div>
    )
}

export default AddComment