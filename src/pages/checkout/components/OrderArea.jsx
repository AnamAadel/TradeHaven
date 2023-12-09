import React from 'react'

function OrderArea({cartProducts}) {
    console.log(cartProducts)
    const totalPrice = cartProducts.reduce(( accumulator, currentValue) => currentValue.price + accumulator, 0)
    return (
        <div className="your-order-area">
            <h3>Your order</h3>
            <div className="your-order-wrap gray-bg-4">
                <div className="your-order-product-info">
                    <div className="your-order-top">
                        <ul>
                            <li>Product</li>
                            <li>Total</li>
                        </ul>
                    </div>
                    <div className="your-order-middle">
                        <ul>
                        {
                            cartProducts && cartProducts.map(item => (

                            <li key={item._id}><span className="order-middle-left">{item.name} X {item.qty}</span> <span
                                className="order-price">${item.qty * item.price} </span></li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className="your-order-bottom">
                        <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                        </ul>
                    </div>
                    <div className="your-order-total">
                        <ul>
                            <li className="order-total">Total</li>
                            <li>${totalPrice}</li>
                        </ul>
                    </div>
                </div>
                <div className="payment-method">
                    <div className="payment-accordion element-mrg">
                        <div id="faq" className="panel-group">
                            <div className="panel panel-default single-my-account m-0">
                                <div className="panel-heading my-account-title">
                                    <h4 className="panel-title"><a data-bs-toggle="collapse"
                                        href="#my-account-1" className="collapsed"
                                        aria-expanded="true">Direct bank transfer</a>
                                    </h4>
                                </div>
                                <div id="my-account-1" className="panel-collapse collapse show"
                                    data-bs-parent="#faq">

                                    <div className="panel-body">
                                        <p>Please send a check to Store Name, Store Street, Store Town,
                                            Store State / County, Store Postcode.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default single-my-account m-0">
                                <div className="panel-heading my-account-title">
                                    <h4 className="panel-title"><a data-bs-toggle="collapse"
                                        href="#my-account-2" aria-expanded="false"
                                        className="collapsed">Check payments</a></h4>
                                </div>
                                <div id="my-account-2" className="panel-collapse collapse"
                                    data-bs-parent="#faq">

                                    <div className="panel-body">
                                        <p>Please send a check to Store Name, Store Street, Store Town,
                                            Store State / County, Store Postcode.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default single-my-account m-0">
                                <div className="panel-heading my-account-title">
                                    <h4 className="panel-title"><a data-bs-toggle="collapse"
                                        href="#my-account-3">Cash on delivery</a></h4>
                                </div>
                                <div id="my-account-3" className="panel-collapse collapse"
                                    data-bs-parent="#faq">

                                    <div className="panel-body">
                                        <p>Please send a check to Store Name, Store Street, Store Town,
                                            Store State / County, Store Postcode.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Place-order mt-25">
                <a className="btn-hover" href="#">Place Order</a>
            </div>
        </div>
    )
}

export default OrderArea