import React from 'react'
import BillingDetails from './BillingDetails'
import OrderArea from './OrderArea'
import { useGlobalContext } from '../../../context/useGlobalContext'

function CheckOutArea() {
    const {cartProducts} = useGlobalContext();
  return (
    <div className="checkout-area pt-100px pb-100px">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <BillingDetails />
                </div>
                <div className="col-lg-5 mt-md-30px mt-lm-30px ">
                    <OrderArea cartProducts={cartProducts} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOutArea