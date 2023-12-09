import React from 'react'

function AboutService() {
  return (
    <div className="service-area">
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex">
                    <div className="service-left align-self-center align-items-center">
                        <img src="assets/images/about-image/srevice-left-img.png" alt="" className="service-left-image" />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="service-right-content align-self-center align-items-center">
                        <span className="sami-title">100% Guaranteed Pure Cotton</span>
                        <h2 className="title">Best Products Here
                            Every Day</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt
                            ut labore et dolore magna aliqua.</p>
                        <a href="shop-left-sidebar.html" className="btn btn-primary service-btn"> Shop Now <i
                                className="fa fa-shopping-basket ml-10px" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutService