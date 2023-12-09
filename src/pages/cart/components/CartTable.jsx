import { FaPenToSquare } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGlobalContext } from '../../../context/useGlobalContext';
import Destination from './Destination';

function CartTable() {
    const {cartProducts, clearCartItem} = useGlobalContext();
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
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cartProducts.length > 0 ? cartProducts.map(item => (
                                    <tr key={item._id}>
                                        <td className="product-thumbnail">
                                            <a href="#"><img className="img-responsive ml-15px"
                                                    src={item.image} alt="" /></a>
                                        </td>
                                        <td className="product-name"><a href="#">{item.name}</a></td>
                                        <td className="product-price-cart"><span className="amount">${item.price}</span></td>
                                        <td className="product-quantity">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton"
                                                    value={item.qty} />
                                            </div>
                                        </td>
                                        <td className="product-subtotal">${item.price * item.qty}</td>
                                        <td className="product-remove ">
                                            <div className="flex items-center gap-6">
                                            <Link to={`/product/${item._id}`}><FaPenToSquare /></Link>
                                            <a><IoCloseSharp /></a>
                                            </div>
                                        </td>
                                    </tr>

                                )) :
                                <tr>
                                <td colSpan={6}>
                                <img src='https://img.freepik.com/free-vector/search-concept-landing-page_23-2148250586.jpg?size=626&ext=jpg&ga=GA1.1.863241194.1678273173&semt=ais' className='w-full h-[400px] object-contain mx-auto' />

                                </td>

                                </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-shiping-update-wrapper">
                                    <div className="cart-shiping-update">
                                        <Link to="/shop_left">Continue Shopping</Link>
                                    </div>
                                    <div className="cart-clear text-white">
                                        <a onClick={clearCartItem}>Clear Shopping Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Destination />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartTable