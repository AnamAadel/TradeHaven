import React from 'react'
import { useAuth } from '../../context/AuthProvider';

function MobileMenu() {
    const {isShowMenu, setIsShowMenu} = useAuth();
    return (
        <div id="offcanvas-mobile-menu" className={`offcanvas offcanvas-mobile-menu ${isShowMenu && "offcanvas-open"}`} style={{visibility: "visible"}}>
            <button className="offcanvas-close" onClick={()=> setIsShowMenu(false)}></button>

            <div className="inner customScroll">

                <div className="offcanvas-menu mb-4">
                    <ul>
                        <li><a href="#"><span className="menu-text">Home</span></a>
                            <ul className="sub-menu">
                                <li><a href="index.html"><span className="menu-text">Home 1</span></a></li>
                                <li><a href="index-2.html"><span className="menu-text">Home 2</span></a></li>
                            </ul>
                        </li>
                        <li><a href="#"><span className="menu-text">Shop</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li className="title"><a href="#">Shop Page</a></li>
                                        <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                        <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                                    </ul>
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
                            </ul>
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