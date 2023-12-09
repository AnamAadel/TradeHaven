import React from 'react'

function Feature() {
  return (
    <div className="feature-area  mt-n-65px">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                        <div className="feature-icon  bg-neutral">
                            <img src="assets/images/icons/1.png" alt="" />
                        </div>
                        <div className="feature-content">
                            <h4 className="title">Free Shipping</h4>
                            <span className="sub-title">Capped at $39 per order</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-md-30px mb-lm-30px mt-lm-30px">
                    <div className="single-feature">
                        <div className="feature-icon  bg-neutral">
                            <img src="assets/images/icons/2.png" alt="" />
                        </div>
                        <div className="feature-content">
                            <h4 className="title">Card Payments</h4>
                            <span className="sub-title">12 Months Installments</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="single-feature">
                        <div className="feature-icon  bg-neutral">
                            <img src="assets/images/icons/3.png" alt="" />
                        </div>
                        <div className="feature-content">
                            <h4 className="title">Easy Returns</h4>
                            <span className="sub-title">Shop With Confidence</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature