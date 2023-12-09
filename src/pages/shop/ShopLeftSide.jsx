import React from 'react'
import { useGlobalContext } from '../../context/useGlobalContext'
import CommonHero from '../shared/CommonHero'
import ProductArea from './components/ProductArea'
import SideBar from './components/SideBar'
import { useState } from 'react'

function ShopLeftSide() {
  const {
    brandName,
    setBrandName,
    categoryName,
    setCategoryName,
    checkedCategory,
    setCheckedCategory,
    checkedBrand,
    setCheckedBrand,
    setPriceRange
  } = useGlobalContext()
  const [search, setSearch] = useState();
  
  return (
    <>
        <CommonHero PageName={"Shop"} />
        <div className="container mx-auto grid grid-cols-1  lg:grid-cols-4">

      <SideBar 
      setCategoryName={setCategoryName} 
      setBrandName={setBrandName} 
      checkedCategory={checkedCategory}  
      setCheckedCategory={setCheckedCategory} 
      checkedBrand={checkedBrand}  
      setCheckedBrand={setCheckedBrand} setPriceRange={setPriceRange}
      setSearch={setSearch}
       />

        <ProductArea 
        categoryName={categoryName} 
        brandName={brandName} 
        checkedCategory={checkedCategory} 
        checkedBrand={checkedBrand}  
        setCheckedBrand={setCheckedBrand}
        search={search}
         />
        </div>
    </>
  )
}

export default ShopLeftSide