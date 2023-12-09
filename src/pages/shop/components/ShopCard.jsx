import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosHeartEmpty, IoIosStar } from 'react-icons/io';
import { RiUserHeartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthProvider';

function ShopCard({ isOneColumn, product }) {
    const { addWishItem, wishlist } = useAuth();
    const isWish = wishlist.map(wishItem => wishItem.id).includes(product._id)

    return (
        <>
            {isOneColumn ?
                <div className="product w-full border-b-2 px-4" style={{ flexDirection: "row", height: "fit-content" }}>
                    <div className="grow">
                        <Link to={`/product/${product._id}`} className="image h-full"  >
                            <img src={product.image}
                                alt="Product" className='object-contain h-[250px]' style={{ display: "flex", padding: 0, width: "280px" }} />
                        </Link>
                        <span className="badges">
                            <span className="new">New</span>
                        </span>

                    </div>
                    <div className="content grow">
                        <span className="ratings flex items-center">
                            <div className="rating rating-sm">
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                            </div>
                            <span className="rating-num">( 5 Review )</span>
                        </span>
                        <h5 className="title"><a>{product.name}
                        </a>
                        </h5>
                        <p className='w-full'>{product.description}</p>
                        <span className="price">
                            <span className="new">${product.price}</span>
                        </span>
                        <div className="flex gap-4 text-xl text-neutral">
                            <button onClick={() => addWishItem(product._id)} className="bg-slate-400 w-10 h-10 rounded-full flex justify-center items-center text-neutral hover:bg-neutral hover:text-white"
                                title="Wishlist">{
                                    isWish ?
                                        <RiUserHeartLine className="text-3xl" />
                                        :

                                        <IoIosHeartEmpty className="text-3xl" />
                                }</button>
                            <button className="bg-slate-400 w-10 h-10 rounded-full flex justify-center items-center text-neutral hover:bg-neutral hover:text-white"
                                data-link-action="quickview" title="Quick view"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"><GoSearch /></button>

                        </div>
                        <button title="Add To Cart" className="add-to-cart">Add
                            To Cart</button>
                    </div>
                </div>
                :
                <div className="product shadow-md">
                    <div className="thumb">
                        <Link to={`/product/${product._id}`} className="image">
                            <img src={product.image}
                                alt="Product" className="w-full h-[250px] object-contain" />
                            {/* <img className="hover-image"
                            src={product.image} alt="Product" /> */}
                        </Link>
                        <span className="badges">
                            <span className="new">New</span>
                        </span>
                        <div className="actions">
                            <button onClick={()=> addWishItem(product._id)}className="action wishlist bg-slate-400"
                                title="Wishlist">
                                {
                                    isWish ?
                                        <RiUserHeartLine className="text-3xl" />
                                        :

                                        <IoIosHeartEmpty className="text-3xl" />
                                }
                            </button>
                            <a href="#" className="action quickview bg-slate-400"
                                data-link-action="quickview" title="Quick view"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"><GoSearch /></a>
                        </div>
                        <button title="Add To Cart" className="add-to-cart">Add
                            To Cart</button>
                    </div>
                    <div className="content">
                        <span className="ratings flex items-center">
                            <div className="rating rating-sm">
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                            </div>
                            <span className="rating-num">( 5 Review )</span>
                        </span>
                        <h5 className="title"><a href="single-product.html">{product.name}
                        </a>
                        </h5>
                        <span className="price">
                            <span className="new">${product.price}</span>
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default ShopCard