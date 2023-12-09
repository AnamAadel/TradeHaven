import React from 'react';

function Footer() {
    return (
        <div className="footer-area m-lrb-30px">
        <div className="footer-container">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                            <div className="single-wedge">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/images/logo/logo-white.png" alt="" /></a>
                                </div>
                                <p className="about-text">Lorem ipsum dolor sit amet consectet adipisicing elit, sed do
                                    eiusmod templ incididunt ut labore et dolore magnaol aliqua Ut enim ad minim.
                                </p>
                                <ul className="link-follow">
                                    <li>
                                        <a className="m-0" title="Twitter" href="#"><i className="fa fa-twitter"
                                                aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a title="Tumblr" href="#"><i className="fa fa-tumblr" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Facebook" href="#"><i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Instagram" href="#"><i className="fa fa-instagram" aria-hidden="true"></i>
                                            
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-lg-2 mb-md-30px mb-lm-30px pl-lg-50px">
                            <div className="single-wedge">
                                <h4 className="footer-herading">Quick Links</h4>
                                <div className="footer-links">
                                    <div className="footer-row">
                                        <ul className="align-items-center">
                                            <li className="li"><a className="single-link" href="#">Support
                                                </a></li>
                                            <li className="li"><a className="single-link" href="#">Helpline</a></li>
                                            <li className="li"><a className="single-link" href="#">Courses</a></li>
                                            <li className="li"><a className="single-link" href="about.html">About</a></li>
                                            <li className="li"><a className="single-link" href="#">Event</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-6 mb-lm-30px pl-lg-50px">
                            <div className="single-wedge">
                                <h4 className="footer-herading">Other Page</h4>
                                <div className="footer-links">
                                    <div className="footer-row">
                                        <ul className="align-items-center">
                                            <li className="li"><a className="single-link" href="about.html"> About </a>
                                            </li>
                                            <li className="li"><a className="single-link" href="blog-grid.html">Blog</a></li>
                                            <li className="li"><a className="single-link" href="#">Speakers</a></li>
                                            <li className="li"><a className="single-link" href="contact.html">Contact</a></li>
                                            <li className="li"><a className="single-link" href="#">Tricket</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-6 mb-lm-30px pl-lg-50px">
                            <div className="single-wedge">
                                <h4 className="footer-herading">Company</h4>
                                <div className="footer-links">
                                    <div className="footer-row">
                                        <ul className="align-items-center">
                                            <li className="li"><a className="single-link" href="index.html">Jesco</a>
                                            </li>
                                            <li className="li"><a className="single-link" href="shop-left-sidebar.html">Shop</a>
                                            </li>
                                            <li className="li"><a className="single-link" href="contact.html">Contact us</a>
                                            </li>
                                            <li className="li"><a className="single-link" href="login.html">Log in</a></li>
                                            <li className="li"><a className="single-link" href="#">Help</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <div className="single-wedge">

                                <h4 className="footer-herading">Store Information.</h4>
                                <div className="footer-links">
                                    <p className="address">2005 Your Address Goes Here. <br />
                                        896, Address 10010, HGJ</p>
                                    <p className="phone">Phone/Fax:<a href="tel:0123456789">0123456789</a></p>
                                    <p className="mail">Email:<a href="mailto:demo@example.com">demo@example.com</a></p>
                                    <img src="assets/images/icons/payment.png" alt="" className="payment-img img-fulid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="copy-text"> © 2021 <strong>Jesco</strong> Made With <i className="fa fa-heart"
                                    aria-hidden="true"></i> By <a className="company-name" href="https://hasthemes.com/">
                                    <strong> HasThemes</strong></a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer