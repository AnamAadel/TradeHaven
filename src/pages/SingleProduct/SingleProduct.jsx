import React from 'react'
import { useLoaderData } from 'react-router-dom'
import CommonHero from '../shared/CommonHero'
import ProductDetailsArea from './components/ProductDetailsArea'
import RelatedProduct from './components/RelatedProduct'
import ReviewDescriptionArea from './components/ReviewDescriptionArea'

function SingleProduct() {
  const {data} = useLoaderData();
  return (
    <>
        <CommonHero PageName={`Product`} />
        <ProductDetailsArea product={data} />
        <ReviewDescriptionArea product={data} />
        <RelatedProduct type={data.type} />
    </>
  )
}

export default SingleProduct