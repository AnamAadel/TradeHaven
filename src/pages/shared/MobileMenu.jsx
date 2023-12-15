import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';

function MobileMenu() {
    const { isShowMenu, setIsShowMenu } = useAuth();
    const [openSubShop, setOpenSubShop] = useState()
    return (
        <div id="offcanvas-mobile-menu" className={`offcanvas offcanvas-mobile-menu ${isShowMenu && "offcanvas-open"}`} style={{ visibility: "visible" }}>
            <button className="offcanvas-close" onClick={() => setIsShowMenu(false)}></button>

            <div className="inner customScroll">

                <div className="offcanvas-menu mb-4">
                    <ul>
                        <li><a href="#"><span className="menu-text">Home</span></a>

                        </li>
                        <li className='relative'>
                            <Link to="/shop"><span className="menu-text">Shop Page</span></Link>
                            <span onClick={() => setOpenSubShop(!openSubShop)} className='absolute top-[26px] right-4 cursor-pointer -translate-y-[50%]' >
                                <FaPlus className={`text-xl  transition-all duration-500 absolute top-1/2 right-0 -translate-y-[50%] ${openSubShop ? "scale-0" : "scale-100"}`} />

                                <FaMinus className={`text-xl  transition-all duration-500 absolute top-1/2 right-0 -translate-y-[50%] ${!openSubShop ? "scale-0" : "scale-100"}`} />
                            </span>
                            <ul className={`first-line:d-block  transition-all duration-500  overflow-hidden ${openSubShop ? "h-36" : "h-0 p-0"}`}>
                                <li><NavLink to="/shop" >Shop</NavLink></li>
                                <li><NavLink to="/shop_4_column" >Shop 4 Column</NavLink></li>
                                <li><NavLink to="/shop_left" >Shop Left Sidebar</NavLink></li>
                            </ul>
                            {/* <ul className="sub-menu">
                                <li>
                                    
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">product Details Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product.html">Product Single</a></li>
                                        <li><a href="single-product-variable.html">Product Variable</a></li>
                                        <li><a href="single-product-affiliate.html">Product Affiliate</a></li>
                                        <li><a href="single-product-group.html">Product Group</a></li>
                                        <li><a href="single-product-tabstyle-2.html">Product Tab 2</a></li>
                                        <li><a href="single-product-tabstyle-3.html">Product Tab 3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Single Product Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product-slider.html">Product Slider</a></li>
                                        <li><a href="single-product-gallery-left.html">Product Gallery Left</a>
                                        </li>
                                        <li><a href="single-product-gallery-right.html">Product Gallery Right</a>
                                        </li>
                                        <li><a href="single-product-sticky-left.html">Product Sticky Left</a></li>
                                        <li><a href="single-product-sticky-right.html">Product Sticky Right</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Other Shop Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="compare.html">Compare Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                        <li><a href="my-account.html">Account Page</a></li>
                                        <li><a href="login.html">Login & Register Page</a></li>
                                        <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        <li><a href="#"><span className="menu-text">Blog</span></a>
                            <ul className="sub-menu" >
                                <li><a href="blog-grid.html">Blog Grid Page</a></li>
                                <li><a href="blog-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                                <li><a href="blog-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                                <li><a href="blog-single.html">Blog Single Page</a></li>
                                <li><a href="blog-single-left-sidebar.html">Single Left Sidebar</a></li>
                                <li><a href="blog-single-right-sidebar.html">Single Right Sidbar</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div className="offcanvas-social mt-auto">
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu