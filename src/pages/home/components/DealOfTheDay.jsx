import React from 'react';

import Countdown from 'react-countdown';
function DealOfTheDay() {
  return (
    <div className="deal-area deal-bg deal-bg-2 mt-12" data-bg-image="assets/images/deal-img/deal-bg-2.jpg">
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <div className="deal-inner grid grid-cols-1 lg:grid-cols-2 items-end px-10 position-relative pt-100px ">
                        <div className="deal-wrapper pb-100px">
                            <span className="category">#FASHION SHOP</span>
                            <h3 className="title">Deal Of The Day</h3>
                            <div className="deal-timing font-semibold text-neutral text-5xl">
                            <Countdown date={Date.now() + (60000 * 60 * 60 * 12)} />
                            </div>
                            <a href="shop-left-sidebar.html" className="btn btn-lg btn-primary btn-hover-dark m-auto"> Shop
                                Now <i className="fa fa-shopping-basket ml-15px" aria-hidden="true"></i></a>
                        </div>
                        <div className="deal-image static lg:relative -left-32">
                            <img className="max-w-2xl mix-blend-multiply object-cover object-right-top" src="https://img.freepik.com/free-photo/handsome-redhead-man-using-smartphone-application-smiling-looking-left-advertisement-logo-with-pleased-face-advertising-mobile-phone-app-shopping-discounts-white-background_176420-53730.jpg?w=740&t=st=1700402771~exp=1700403371~hmac=654013da73230865990f0357b5353ea73c55fe667057db1fa434da9a5e9bfebf" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DealOfTheDay