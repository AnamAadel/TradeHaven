import React from 'react'
import CommonHero from '../shared/CommonHero'
import WishListTable from './components/WishListTable'

function WishlistPage() {
  return (
    <>
        <CommonHero PageName={"Wishlist"} />
        <WishListTable />
    </>
  )
}

export default WishlistPage