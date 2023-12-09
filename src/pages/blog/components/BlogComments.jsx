import React from 'react'

function BlogComments({blog, comments}) {
    return (
        <div className="comment-area">
            <h2 className="comment-heading" data-aos="fade-up" data-aos-delay="200">Comments (03)</h2>
            <div className="review-wrapper">
                <div className="single-review" data-aos="fade-up" data-aos-delay="200">
                    <div className="review-img">
                        <img src="assets/images/comment-image/1.png" alt="" />
                    </div>
                    <div className="review-content">
                        <div className="review-top-wrap">
                            <div className="review-left">
                                <div className="review-name">
                                    <h4 className="title">Maxine Singleton </h4>
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
                                <a href="#">Reply <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-review child-review" data-aos="fade-up" data-aos-delay="200">
                    <div className="review-img">
                        <img src="assets/images/comment-image/2.png" alt="" />
                    </div>
                    <div className="review-content">
                        <div className="review-top-wrap">
                            <div className="review-left">
                                <div className="review-name">
                                    <h4 className="title">Winston Goodwin </h4>
                                    <span className="date">21 July 2021</span>
                                </div>
                            </div>
                        </div>
                        <div className="review-bottom">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodk
                                tempor incidid ut labore et dolor magna aliqua. Ut enim ad minim veniam quis
                                nostrud exercita ullamc laboris</p>
                            <div className="review-left">
                                <a href="#">Reply <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-review" data-aos="fade-up" data-aos-delay="200">
                    <div className="review-img">
                        <img src="assets/images/comment-image/1.png" alt="" />
                    </div>
                    <div className="review-content">
                        <div className="review-top-wrap">
                            <div className="review-left">
                                <div className="review-name">
                                    <h4 className="title">Maxine Singleton </h4>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogComments