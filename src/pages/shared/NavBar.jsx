import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useGlobalContext } from "../../context/useGlobalContext";

function NavBar() {
  const { setIsShowMenu, setIsShowCart, setIsShowWishlist, setIsShowSearchModal, setIsShowLogin, wishlist } = useAuth()
  const {cartProducts} = useGlobalContext();

  const totalQty = cartProducts.reduce(( accumulator, currentValue) => currentValue.qty + accumulator, 0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const window_top = window.scrollY;
      const sticky_nav = document.getElementById("sticky_nav")

      if (window_top > 250) {
        sticky_nav.classList.add("menu_fixed", "animated", "fadeInDown");
      } else {
        sticky_nav.classList.remove("menu_fixed", "animated", "fadeInDown");
      }
    })
  }, [])
  return (
    <header>
      <div className="header-main sticky-nav " id="sticky_nav">
        <div className="container position-relative">
          <div className="row">
            <div className="col-auto align-self-center">
              <div className="header-logo h-[60px] w-[155px] overflow-hidden relative">
                <Link to="/" ><img src="https://img.freepik.com/free-vector/technological-logo-design_1424-39.jpg?w=740&t=st=1702568928~exp=1702569528~hmac=27cd83ba28796c047a01a883150ffd5aedb9bfc9f6cdd294008f198e6fdc9d79" className="h-[260px] max-w-[262px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Site Logo" /></Link>
              </div>
            </div>
            <div className="col align-self-center d-none d-lg-block">
              <div className="main-menu">
                <ul>
                  <li className="dropdown"><a href="#">Home <FaAngleDown className="inline-block" /></a>
                    <ul className="sub-menu">
                      <li><Link to="/">Home</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown position-static"><Link to="/shop_left">Shop <FaAngleDown className="inline-block" /></Link>
                    <ul className="mega-menu d-block">
                      <li className="d-flex">
                        <ul className="d-block">

                          <li className="title"><a>Shop Page</a></li>
                          <li><NavLink to="/shop" >Shop</NavLink></li>
                          <li><NavLink to="/shop_4_column" >Shop 4 Column</NavLink></li>
                          <li><NavLink to="/shop_left" >Shop Left Sidebar</NavLink></li>
                        </ul>

                        <ul className="d-block">
                          <li className="title"><a href="#">Other Shop Pages</a></li>
                          <li><NavLink to="/cart" >Cart</NavLink></li>
                          <li><NavLink to="/checkout" >Checkout</NavLink></li>
                          <li><NavLink to="/wishlist" >Wishlist</NavLink></li>
                          <li><NavLink to="/account" >Account</NavLink></li>
                          <li><NavLink to="/login" >Login</NavLink></li>
                          <li><NavLink to="/register" >Register</NavLink></li>
                        </ul>
                        <ul className="d-block">
                          <li><NavLink to="/notFound" >404</NavLink></li>

                        </ul>
                      </li>
                      <li>

                        <ul className="menu-banner w-100">
                          <li>
                            <Link className="p-0" to="/shop_lefLink"><img
                              className="img-responsive w-100"
                              src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817608.jpg?w=826&t=st=1700386622~exp=1700387222~hmac=fbd526b14a06e6342e20dbeac4b1af6b1a7cd1473db52782f9e3de37bf4c7e58" alt="" /></Link>
                          </li>
                          <li>
                            <Link className="p-0" to="/shop_lefLink"><img
                              className="img-responsive w-100"
                              src="https://img.freepik.com/free-photo/new-cell-phone-white-background_58702-5198.jpg?w=740&t=st=1700387654~exp=1700388254~hmac=9d78d828a5a73f962518c2553e94b975c19bc4851893cdb8ee20056f353e13f4" alt="" /></Link>
                          </li>
                          <li>
                            <Link className="p-0" to="/shop_lefLink"><img
                              className="img-responsive w-100"
                              src="https://img.freepik.com/free-photo/handsome-young-man-with-laptop-check-his-timetable-white_146671-15550.jpg?w=740&t=st=1700387452~exp=1700388052~hmac=6441ba51937496a42daa1e236d8a103c1a0949e230ab7762337727ad40fde829" alt="" /></Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown "><Link to="/blogs">Blog <FaAngleDown className="inline-block" /></Link>
                    <ul className="sub-menu">
                      <li><Link to="/blogs">Blog</Link></li>
                    </ul>
                  </li>
                  <li><NavLink to="/about" >About us</NavLink></li>
                  <li><NavLink to="/contact" >Contact us</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-auto align-self-center pl-0 items-center">
              <div className="header-actions">
                <a onClick={() => setIsShowLogin(true)} className="header-action-btn login-btn" data-bs-toggle="modal"
                  data-bs-target="#loginActive">Sign In</a>
                <a href="#" className="header-action-btn" data-bs-toggle="modal" onClick={() => setIsShowSearchModal(true)} data-bs-target="#searchActive">
                  <GoSearch className="inline-block text-3xl" />
                </a>
                <a href="#offcanvas-wishlist" className="header-action-btn offcanvas-toggle" onClick={() => setIsShowWishlist(true)}>
                  <IoIosHeartEmpty className="inline-block text-3xl" />
                  <span className="header-action-num">{wishlist.length}</span>
                </a>
                <a href="#offcanvas-cart" onClick={() => setIsShowCart(true)}
                  className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                  <FiShoppingCart className="inline-block text-3xl" />
                  <span className="header-action-num">{totalQty}</span>
                  
                </a>
                <a href="#offcanvas-mobile-menu" onClick={() => setIsShowMenu(true)}
                  className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none text-3xl">
                  <SlMenu />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar