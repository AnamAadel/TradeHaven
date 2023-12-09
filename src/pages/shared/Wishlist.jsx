import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import ModalCard from './ModalCard';

function Wishlist() {
    const { isShowWishlist, setIsShowWishlist, wishItem, closeAllModal, removeWishItem } = useAuth();
    // const {} = useGlobalContext()
    console.log(wishItem)
    console.log("wishlist", isShowWishlist)
    return (
        <div id="offcanvas-wishlist" className={`offcanvas offcanvas-wishlist ${isShowWishlist && "offcanvas-open"}`} style={{ visibility: "visible", right: "0" }} >
            <div className="inner">
                <div className="head">
                    <span className="title">Wishlist</span>
                    <button className="offcanvas-close" onClick={() => setIsShowWishlist(false)} >×</button>
                </div>
                <div className="body customScroll h-[80vh] overflow-auto">
                    <ul className="minicart-product-list">
                        {wishItem && wishItem.map((item, idx) => (
                            <ModalCard removeItem={removeWishItem} item={item} key={idx} />
                        ))}
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons">
                        <Link to={`/wishlist`} onClick={closeAllModal} className="btn btn-dark btn-hover-primary mt-30px">view wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist