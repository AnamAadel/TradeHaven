import React from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPablic";

import { useAuth } from '../../../context/AuthProvider';
const ratingName = ["bad", "bad+", "average", "Grate", "Awesome"]
function AddReply({ user, product, isOpenReply, setIsOpenReply, setReplies, replies }) {
    const axiosPublic = useAxiosPublic()
    const { user: currentUser } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleComment = (data, fieldValues) => {
        const replyData = { ...data, id: user.id, image: currentUser?.photoURL || null };
        console.log(replyData)
        axiosPublic.put(`/review_reply/${product._id}`, replyData).then(res => {
            console.log(res.data)
            setReplies([...replies, replyData])
            fieldValues.target.userName.value = ""
            fieldValues.target.email.value = ""
            fieldValues.target.comment.value = ""
            setIsOpenReply(false)
        }).catch(err => console.log(err));
    }
    return (
        <form onSubmit={handleSubmit(handleComment)} className={`absolute top-0 left-0 bg-slate-300 text-neutral transition-all duration-300 rounded-2xl z-50 ${isOpenReply ? "h-auto visible p-12 overflow-visible" : "h-0 invisible p-0 overflow-hidden"}`}>
            <div className="star-box flex gap-4 items-center mb-6">
                <span className='font-bold text-xl'>Your Reply</span>
                <button className='text-4xl absolute top-10 right-10' onClick={() => setIsOpenReply(false)}><IoClose /> </button>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <div className="rating-form-style">
                        <input className="border-2 border-neutral rounded-2xl" placeholder="Name" type="text" {...register("userName", { required: true })} />
                        {errors.userName && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rating-form-style">
                        <input className="border-2 border-neutral rounded-2xl" placeholder="Email" type="email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-400">This field is required</span>}
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="rating-form-style form-submit">
                        <textarea name="Your Review" className="border-2 border-neutral rounded-2xl min-h-[300px] mb-6 bg-transparent" placeholder="Message" {...register("comment", { required: true })}></textarea>
                        {errors.comment && <span className="text-red-400">This field is required</span>}
                        <button className="btn-md mt-6  btn-neutral rounded-3xl block"
                            type="submit" value="Submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddReply