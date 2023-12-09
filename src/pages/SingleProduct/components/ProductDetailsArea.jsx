import React, { useState } from 'react';
import ImageZoom from "react-image-zooom";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
const images = [
    "https://m.media-amazon.com/images/I/51xOKpb-tLL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/61tevdEa2UL._AC_UY218_.jpg",
    "https://m.media-amazon.com/images/I/710rjKlN2CL._AC_UL320_.jpg",
    "https://adminapi.applegadgetsbd.com/storage/media/large/3414-67236.jpg"
]

import { FaFacebookF, FaInstagram, FaMinus, FaPlus, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';
import { Navigation, Scrollbar } from 'swiper/modules';
import { useGlobalContext } from '../../../context/useGlobalContext';

function ProductDetailsArea({ product }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [qty, setQty] = useState(1);
    const {addToCart} = useGlobalContext();


    const galleryImages = [product?.image , ...images]

    const handleQty = (fluctuate)=> {
        console.log(fluctuate)
        switch (fluctuate) {
            case "plus":
                setQty(qty + 1)
                break;
        
                case "minus":
                    if(qty > 1){
                        setQty(qty - 1)
                    }
                break;
        }
    }
    const handleQtyInput = (e)=> {
        setQty(parseInt(e.target.value) || 1)
    }

    return (
        <div className="product-details-area pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                        <div className="w-full flex justify-center">
                            <ImageZoom src={galleryImages[currentImage]} alt="" className=' object-contain' style={{height: "400px", objectFit: "contain"}} width="100%" zoom="200"/>
                        </div>
                        <div className="flex gap-6 mt-6 overflow-x-auto">
                            <Swiper
                                scrollbar={{
                                    hide: true,
                                }}
                                loop={true}
                                slidesPerView={3}
                                navigation={true}
                                modules={[Scrollbar, Navigation]}
                                className="mySwiper"
                            >

                                {
                                    galleryImages.map((image, idx) => (
                                        <SwiperSlide key={idx}>
                                            <img src={image} alt="" className='h-[100px] cursor-pointer' onClick={()=> setCurrentImage(idx)} />

                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                        <div className="product-details-content quickview-content">
                            <h2>{product.name}</h2>
                            <div className="pricing-meta">
                                <ul>
                                    <li className="old-price not-cut">${product.price}</li>
                                </ul>
                            </div>
                            <div className="pro-details-rating-wrap">
                                <div className="rating-product flex gap-1 items-center">
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                <IoIosStar className='text-2xl text-yellow-500' />
                                </div>
                                <span className="read-review"><a className="reviews" href="#">( 5 Customer Review )</a></span>
                            </div>
                            <p className="mt-30px mb-0">{product.description}</p>
                            <div className="pro-details-quality">
                                
                                
                                <div className="pro-details-compare-wishlist pro-details-wishlist text-white select-none cursor-pointer" onClick={()=> handleQty("minus")}>
                                    <a><FaMinus /></a>
                                </div>
                                <div className="cart-plus-minus -mr-2">
                                    <input className="cart-plus-minus-box" type="number" name="qtybutton" onChange={handleQtyInput} min="1" value={qty} />
                                </div>
                                <div className="pro-details-compare-wishlist pro-details-compare text-white select-none cursor-pointer" onClick={()=> handleQty("plus")}>
                                    <a ><FaPlus /></a>
                                </div>
                                <div className="pro-details-cart">
                                    <button className="add-cart" onClick={()=> addToCart(product._id, qty)}> Add To
                                        Cart</button>
                                </div>
                            </div>
                            <div className="pro-details-sku-info pro-details-same-style  d-flex">
                                <span>Brand: </span>
                                <ul className="d-flex">
                                    <li>
                                        <a>{product.brand}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-categories-info pro-details-same-style d-flex">
                                <span>Categories: </span>
                                <ul className="d-flex">
                                    <li>
                                        <a >{product.type}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-social-info pro-details-same-style d-flex items-center">
                                <span>Share: </span>
                                <ul className="d-flex gap-4 items-center text-2xl">
                                    <li>
                                        <a>
                                        <FaTwitter /></a>
                                    </li>
                                    <li>
                                        <a><FaFacebookF /></a>
                                    </li>
                                    <li>
                                        <a>
                                        <FaYoutube /></a>
                                    </li>
                                    <li>
                                        <a>
                                        <FaInstagram /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsArea