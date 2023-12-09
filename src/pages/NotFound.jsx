import React from 'react'
import { Link } from 'react-router-dom'
import CommonHero from './shared/CommonHero'

function NotFound() {
  return (
    <>
        <CommonHero PageName={"Product"} />
        <div className="blank-page-area pb-100px pt-100px">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="blank-content-header ">
                        <h1>The page you are looking for was not found.</h1>
                    </div>
                    <div className="page-not-found text-center">
                    <img src="https://i.pinimg.com/564x/f0/18/e8/f018e86a42d3fca558d8e52a12311d0c.jpg" alt="" className='max-w-xl' />
                        <h4>Sorry For The Inconvenience.</h4>
                        <p>Search again what you are looking for</p>
                        <Link to="/">Go To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NotFound