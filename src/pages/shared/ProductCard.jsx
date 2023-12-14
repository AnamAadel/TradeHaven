import React from 'react';
import { IoIosHeartEmpty, IoIosSearch, IoIosStar } from "react-icons/io";
import { RiUserHeartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
function ProductCard({ item }) {
    const { addWishItem, wishlist } = useAuth();
    const isWish = wishlist.map(wishItem => wishItem.id).includes(item._id)
    return (
        <div className="product shadow-2xl border rounded border-neutral p-6">
            <div className="thumb">
                <Link to={`/product/${item._id}`} className="image">
                    <img src={item.image} alt="Product" />
                </Link>
                <span className="badges">
                    <span className="new">New</span>
                </span>
                <div className="actions">
                    <a className="action wishlist bg-slate-400" title="Wishlist" onClick={()=> addWishItem(item._id)} >
                    {
                        isWish ? 
                    <RiUserHeartLine className="text-3xl" />
                    :

                    <IoIosHeartEmpty className="text-3xl" />
                    }
                    </a>
                    <a href="#" className="action quickview bg-slate-400" data-link-action="quickview"
                        title="Quick view" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"><IoIosSearch className="text-3xl" /></a>
                </div>
                <button title="Add To Cart" className=" add-to-cart">Add
                    To Cart</button>
            </div>
            <div className="content pb-6">
                <span className="ratings">
                    <span className="flex items-center gap-2 text-yellow-400">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    </span>
                    <span className="rating-num">( 5 Review )</span>
                </span>
                <h5 className="title"><a href="single-product.html">{item.name}
                </a>
                </h5>
                <span className="pb-2">
                    <span className="font-bold text-neutral">{item.brand}</span>
                </span>
                <span className="price">
                    <span className="new">{item.price}</span>
                </span>
            </div>
        </div>
    )
}

export default ProductCard