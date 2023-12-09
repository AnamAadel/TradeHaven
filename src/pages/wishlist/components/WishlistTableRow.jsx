import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context/useGlobalContext';

function WishlistTableRow({item}) {
    const {addToCart} = useGlobalContext();
    return (
        <tr>
            <td className="product-thumbnail">
                <Link to={`/product/${item._id}`}><img className="img-responsive ml-15px h-[200px] object-contain" src={item.image} alt="" /></Link>
            </td>
            <td className="product-name"><Link to={`/product/${item._id}`}>{item.name}</Link></td>
            <td className="product-price-cart"><span className="amount">${item.price}</span></td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value={item.qty} />
                </div>
            </td>
            <td className="product-subtotal">${item.price * item.qty}</td>
            <td className="product-wishlist-cart">
                <a onClick={()=> addToCart(item._id, item.qty)}>add to cart</a>
            </td>
        </tr>
    )
}

export default WishlistTableRow