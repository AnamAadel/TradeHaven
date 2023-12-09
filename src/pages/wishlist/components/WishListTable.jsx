import React from 'react';
import { useAuth } from '../../../context/AuthProvider';
import WishlistTableRow from './WishlistTableRow';

function WishListTable() {
    const {wishItem} = useAuth();
  return (
    <div className="cart-main-area pt-100px pb-100px">
        <div className="container">
            <h3 className="cart-page-title">Your cart items</h3>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <form action="#">
                        <div className="table-content table-responsive cart-table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Until Price</th>
                                        <th>Qty</th>
                                        <th>Subtotal</th>
                                        <th>Add To Cart</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    wishItem && wishItem.map(item => (
                                        <WishlistTableRow key={item._id} item={item} />
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishListTable