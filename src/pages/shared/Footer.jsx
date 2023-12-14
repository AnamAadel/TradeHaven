import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-area m-lrb-30px">
        <div className="footer-container">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                            <div className="single-wedge">
                                <div className="footer-logo w-[220px] h-[75px] overflow-hidden relative">
                                    <a href="index.html"><img src="https://img.freepik.com/free-vector/technological-logo-design_1424-39.jpg?w=740&t=st=1702568928~exp=1702569528~hmac=27cd83ba28796c047a01a883150ffd5aedb9bfc9f6cdd294008f198e6fdc9d79" className='h-[196px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" /></a>
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
                                            <li className="li"><Link className="single-link" to="/about"> About </Link>
                                            </li>
                                            <li className="li"><Link className="single-link" to="/blog">Blog</Link></li>
                                            <li className="li"><Link className="single-link" to="/contact" >Contact</Link></li>
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
                                            <li className="li"><Link className="single-link" to="/shop" href="shop-left-sidebar.html">Shop</Link>
                                            </li>
                                            <li className="li"><a className="single-link" to="/contact">Contact us</a>
                                            </li>
                                            <li className="li"><a className="single-link" to="/login" >Log in</a></li>
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
                            <p className="copy-text"> © 2023 <strong>Trade Have</strong> Made With <FaHeart /> By <a className="company-name">
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