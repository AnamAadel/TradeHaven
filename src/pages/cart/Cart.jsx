import React from 'react'
import CommonHero from '../shared/CommonHero'
import CartTable from './components/CartTable'

function Cart() {
  return (
    <>
    <CommonHero PageName={"Cart"} />
    <CartTable />

    </>
  )
}

export default Cart