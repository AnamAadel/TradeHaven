 import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import { useGlobalContext } from '../../context/useGlobalContext';
import ModalCard from './ModalCard';

function CartModal() {
    const { isShowCart, setIsShowCart, closeAllModal} = useAuth();
    const {cartProducts, removeCartItem} = useGlobalContext();
    console.log("cartProducts", cartProducts)
  return (
    <div id="offcanvas-cart " className={`offcanvas offcanvas-cart ${isShowCart && "offcanvas-open"}`} style={{visibility: "visible"}}>
        <div className="inner">
            <div className="head">
                <span className="title">Cart</span>
                <button className="offcanvas-close" onClick={()=> setIsShowCart(false)}>×</button>
            </div>
            <div className="body customScroll overflow-auto h-[60vh]">
                <ul className="minicart-product-list">
                    {cartProducts && cartProducts.map((item, idx) => (
                        <ModalCard removeItem={removeCartItem} item={item} key={idx} />
                    ))}
                </ul>
            </div>
            <div className="foot">
                <div className="buttons mt-30px">
                    <Link to="/cart" onClick={closeAllModal} className="btn btn-dark btn-hover-primary mb-30px">view cart</Link>
                    <Link to="/checkout" className="btn btn-outline-dark current-btn" onClick={closeAllModal}>checkout</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartModal