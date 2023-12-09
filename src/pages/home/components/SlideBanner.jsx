import React from 'react';
import { ImNext2, ImPrevious2 } from "react-icons/im";
import { useSwiper } from 'swiper/react';

function SlideBanner({image}) {
    const swiper = useSwiper();
    return (
        <div className="container align-self-center relative">
            <div className="row">
                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-5 align-self-center sm-center-view">
                    <div className="hero-slide-content hero-slide-content-2 slider-animated-1">
                        <span className="category">Sale 50% Off</span>
                        <h2 className="title-1">Expensive New Offer 2023</h2>
                        <a href="#" className="btn btn-neutral"> Shop Now </a>
                    </div>
                </div>
                <div
                    className="col-xl-6 col-lg-7 col-md-7 col-sm-7 d-flex justify-content-center position-relative">
                    <div className="show-case">
                        <div className="hero-slide-image">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <button className='absolute top-1/2 -left-6 -translate-y-1/2 z-10 h-24 w-4 text-center rounded-xl bg-neutral text-white' onClick={()=> swiper.slidePrev()}><ImPrevious2 /></button>
            <button className='absolute top-1/2 -right-6 -translate-y-1/2 z-10 h-24 w-4 text-center rounded-xl bg-neutral text-white' onClick={()=> swiper.slideNext()}><ImNext2 /></button>
        </div>
    )
}

export default SlideBanner