import React, { useState } from 'react';
import { BiSolidLike } from "react-icons/bi";
import { FaCalendarAlt, FaComment, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';
import AddComment from './AddComment';
import BlogComments from './BlogComments';


function BlogContent({blog}) {
    const [setComments, comments] = useState(blog.comments ? blog.comments : [])
  return (
    <div className="blog-grid pb-100px pt-100px main-blog-page single-blog-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div className="blog-posts">
                        <div className="single-blog-post blog-grid-post">
                            <div className="blog-image single-blog" data-aos="fade-up" data-aos-delay="200">
                                <img className="img-fluid h-auto" src={blog.image} alt="blog" />
                            </div>
                            <div className="blog-post-content-inner mt-30px" data-aos="fade-up" data-aos-delay="400">
                                <div className="blog-athor-date">
                                    <a className="blog-date height-shape"><FaCalendarAlt /> {blog.date}</a>
                                    <a className="blog-mosion"><BiSolidLike />
                                        1.5 K</a>
                                </div>
                                <h4 className="blog-title">{blog.title}</h4>
                                <p data-aos="fade-up">
                                    {blog.content}
                                </p>
                            </div>
                            <div className="single-post-content">
                                <p className="quate-speech" data-aos="fade-up" data-aos-delay="200">
                                    Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor
                                    incidi labore et dolore magna aliqua. Ut enim ad minim
                                </p>
                                <h4 className="title">It is a long established fact that.</h4>
                                <p data-aos="fade-up" data-aos-delay="200">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea comm consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum. Sed ut perspicia unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                    ab illo inventore veritatis
                                </p>
                                <p data-aos="fade-up" data-aos-delay="200">
                                    There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable. If you are goi to use a passage of Lorem Ipsum,
                                    you need to be sure there isn't anything embarrassing hidden in the middl of text.
                                    All the Lorem Ipsum generators on the Internet
                                </p>
                                <div className="image-porsion">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="image-left">
                                                <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="image-left">
                                                <img className="img-fluid  w-100" src="https://img.freepik.com/free-photo/man-with-car-keys_1187-1058.jpg?w=826&t=st=1700404578~exp=1700405178~hmac=d84632a376e0e11a6731d8807fc4e47893e71b20c7ed752e3021aee0848053bf" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-30px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. Sed ut perspicia unde omnis iste natus
                                    error sit voluptat</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which
                                    don't look even slightly believable. If you are goi to use a passage of Lorem Ipsum,
                                    you need to be sure there </p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-single-tags-share d-sm-flex justify-content-between">
                        <div className="blog-single-share mb-xs-15px d-flex" data-aos="fade-up" data-aos-delay="200">
                            <ul className="social">
                                <li className="m-0">
                                    <a ><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a ><FaTwitter /></a>
                                </li>
                                <li>
                                    <a ><FaGoogle /></a>
                                </li>
                            </ul>
                            <span className="title"><a className="ml-10px" > 2 <FaComment /></a></span>
                        </div>
                        <div className="blog-single-tags d-flex" data-aos="fade-up" data-aos-delay="200">
                            <span className="title">Tags: </span>
                            <ul className="tag-list">
                                <li><a href="#">Fashion,</a></li>
                                <li><a href="#">eCommerce,</a></li>
                                <li><a href="#">Dress</a></li>
                            </ul>
                        </div>
                    </div>

                    <BlogComments blog={blog} comments={comments} />
                    <AddComment setComments={setComments} comments={setComments} blog={blog} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogContent