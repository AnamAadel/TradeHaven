import React from 'react'
import { Link } from 'react-router-dom'
function CommonHero({PageName}) {
  return (
    <div className="breadcrumb-area">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="breadcrumb-title">{PageName}</h2>
                    <ul className="breadcrumb-list space-x-1">
                        <li className="breadcrumb-item no-underline"><Link className='no-underline' to="/">Home </Link></li>
                        <li className="">{`// ${PageName}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonHero