import moment from 'moment';
import React from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
function BlogCart({data}) {
    return (
        <div className="">
            <div className="single-blog">
                <div className="blog-image h-60">
                    <Link to={`/blogs/${data._id}`} ><img src={data.image}
                        className="img-responsive" alt="" /></Link>
                </div>
                <div className="blog-text">
                    <div className="blog-athor-date">
                        <a className="blog-date height-shape flex gap-3 items-center" href="#"><FaCalendarAlt /> {moment().format("DD MMMM YYYY")} </a>
                        <a className="blog-mosion flex gap-3 items-center" ><BiSolidLike /> 1.5
                            K</a>
                    </div>
                    <h5 className="blog-heading"><Link to={`/blogs/${data._id}`} className="blog-heading-link"
                        >{data.title}</Link></h5>


                    <Link to={`/blogs/${data._id}`} className="btn btn-primary blog-btn"> Read More <FaArrowRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCart