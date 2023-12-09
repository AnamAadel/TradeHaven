import React from 'react'
import { GoSearch } from 'react-icons/go'
import { IoIosHeartEmpty } from 'react-icons/io'
import { LuRefreshCcw } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function RelatedCard({item}) {
    return (
        <div className="product">
            <div className="thumb">
                <a className="image">
                    <img src={item.image}
                        alt="Product" />
                    {/* <img className="hover-image"
                        src="https://m.media-amazon.com/images/I/61ZNIHIEUqL._AC_UY218_.jpg" alt="Product" /> */}
                </a>
                <span className="badges">
                    <span className="new">New</span>
                </span>
                <div className="actions">
                    <a href="wishlist.html" className="action wishlist"
                        title="Wishlist"><IoIosHeartEmpty /></a>
                    <a href="#" className="action quickview"
                        data-link-action="quickview" title="Quick view"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"><GoSearch /></a>
                    <a href="compare.html" className="action compare"
                        title="Compare"><LuRefreshCcw /></a>
                </div>
                <button title="Add To Cart" className="add-to-cart">Add
                    To Cart</button>
            </div>
            <div className="content">
                <span className="ratings flex items-center">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <span className="rating-num">( 5 Review )</span>
                </span>
                <h5 className="title"><Link to={`/product/${item._id}`}>{item.name}
                </Link>
                </h5>
                <span className="price">
                    <span className="new">${item.price}</span>
                </span>
            </div>
        </div>
    )
}

export default RelatedCard