import React from 'react'

function AboutIntro() {
  return (
    <div className="about-intro-area">
        <div className="container position-relative h-100 d-flex align-items-center">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="about-intro-content">
                        <h2 className="title">About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniamyl quinol exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duisau irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore euhti fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                    </div>
                </div>
            </div>
            <div className="intro-left">
                <img src="assets/images/about-image/intro-left.png" alt="" className="intro-left-image" />
            </div>
            <div className="intro-right">
                <img src="assets/images/about-image/intro-right.png" alt="" className="intro-right-image" />
            </div>
        </div>
    </div>
  )
}

export default AboutIntro