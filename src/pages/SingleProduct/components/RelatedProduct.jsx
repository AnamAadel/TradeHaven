import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPablic';
import ProductCard from '../../shared/ProductCard';

function RelatedProduct({type}) {
    const axiosPublic = useAxiosPublic();
    const [relatedItems, setRelatedItems ] = useState([]);

    console.log(type)

    useEffect(()=> {
        axiosPublic.get(`/related_products/${type}`).then(res => {
            console.log("related data" ,res.data);
            setRelatedItems(res.data);
            
        }).catch(err => console.log(err));
    },[axiosPublic, type])
  return (
    <div className="related-product-area pb-100px">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center mb-30px0px line-height-1">
                        <h2 className="title m-0">Related Products</h2>
                    </div>
                </div>
            </div>
            <div className={`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-6`}  >
            {
                relatedItems && relatedItems.map(item => (
                
                <ProductCard key={item._id} item={item} />

                ))
            }
            </div>
        </div>
    </div>
  )
}

export default RelatedProduct