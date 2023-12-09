import React from 'react'
import Marquee from 'react-fast-marquee'

function BrandArea() {
    return (
        <div className="brand-area pb-100px">
            <div className="container">
                <div className="brand-slider">
                    <Marquee>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/1.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/2.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/3.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/4.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/5.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/2.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/3.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/4.png" alt="" /></a>
                        </div>
                        <div className="brand-slider-item text-center ml-10">
                            <a href="#"><img className="img-fluid" src="assets/images/brand-logo/5.png" alt="" /></a>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default BrandArea