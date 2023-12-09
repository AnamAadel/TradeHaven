import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'
import Login from './pages/login/Login'
import CartModal from './pages/shared/CartModal'
import Footer from './pages/shared/Footer'
import MobileMenu from './pages/shared/MobileMenu'
import NavBar from './pages/shared/NavBar'
import SearchModal from './pages/shared/SearchModal'
import Wishlist from './pages/shared/Wishlist'

function Root() {
 const {isShowMenu , isShowCart , isShowWishlist } = useAuth()
 const showOverlay = isShowMenu || isShowCart || isShowWishlist ? "block" : "none"

 console.log(showOverlay)
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
        <MobileMenu />
        <CartModal />
        <Wishlist />
        <div className="offcanvas-overlay" style={{display: `${showOverlay}`}}></div>
        <SearchModal />
        <Login />
    </>
  )
}

export default Root