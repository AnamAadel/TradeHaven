import React from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { v4 as uuidv4 } from 'uuid';
import useAxiosPublic from "../../../hooks/useAxiosPablic";

import { useState } from 'react';
import { useAuth } from '../../../context/AuthProvider';
const ratingName = ["bad", "bad+", "average", "Grate", "Awesome"]
function AddReview({ product, setReviews, reviews }) {
    const [rating, setRating] = useState(0);
    const axiosPublic = useAxiosPublic()
    const { user: currentUser } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleComment = (data, fieldValues) => {
        const reviewData = { ...data, id: uuidv4(), rating, image: currentUser?.photoURL || null };
        axiosPublic.post(`/products_review/${product._id}`, reviewData).then(res => {
            console.log(res.data)
            setReviews([...reviews, reviewData])
            fieldValues.target.userName.value = ""
            fieldValues.target.email.value = ""
            fieldValues.target.comment.value = ""
        }).catch(err => console.log(err));
    }
    return (
        <div className="col-lg-5">
            <div className="ratting-form-wrapper pl-50">
                <h3>Add a Review <span className='inline-block p-2 bg-neutral text-white text-xl bold rounded-md'>{ratingName[rating - 1]}</span></h3>
                <div className="ratting-form">
                    <form onSubmit={handleSubmit(handleComment)}>
                        <div className="star-box flex gap-4 items-center mb-6">
                            <span>Your rating:</span>
                            <ReactStars
                                count={5}
                                onChange={(value) => setRating(value)}
                                size={24}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="rating-form-style">
                                    <input className="border-2 rounded-2xl" placeholder="Name" type="text" {...register("userName", { required: true })} />
                                    {errors.userName && <span className="text-red-400">This field is required</span>}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="rating-form-style">
                                    <input className="border-2 rounded-2xl" placeholder="Email" type="email" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-red-400">This field is required</span>}
                                </div>
                            </div>
                            <div className="col-md-12 mt-4">
                                <div className="rating-form-style form-submit">
                                    <textarea name="Your Review" className="border-2 rounded-2xl min-h-[300px] mb-6" placeholder="Message" {...register("comment", { required: true })}></textarea>
                                    {errors.comment && <span className="text-red-400">This field is required</span>}
                                    <button className="btn btn-primary btn-hover-color-primary "
                                        type="submit" value="Submit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddReview