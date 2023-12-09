import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProducts from '../../../hooks/useProducts';
import ProductCard from '../../shared/ProductCard';
import SectionTitle from '../../shared/SectionTitle';

function ProductGallery() {
    const [productLength, setProductLength] = useState(6)
    const {products: menu, isPending} = useProducts(); 
    // const { data: menu = [], isPending } = useQuery({
    //     queryKey: ["menu"],
    //     queryFn: async () => {
    //         const res = await axios.get("products.json");
    //         return res.data
    //     }
    // });

    const Apple = menu?.filter((item) => item.brand === "Apple")
    const Samsung = menu?.filter((item) => item.brand === "Samsung")
    const Google = menu?.filter((item) => item.brand === "Google")
    const Sony = menu?.filter((item) => item.brand === "Sony")
    const Intel = menu?.filter((item) => item.brand === "Intel")
    const Xiaomi = menu?.filter((item) => item.brand === "Xiaomi")
    const Laborum = menu?.filter((item) => item.brand === "Laborum Adipisicing")
    const categoryArr = menu.map(item => item.brand)
    const categoryName = Array.from(new Set(categoryArr))
    console.log(Apple.length)
    console.log(menu)

    return (
        <div className="product-area pt-100px pb-100px">
            <div className="container">
                <Tabs>

                    <div className="row">
                        <div className="col-lg col-md col-12 flex justify-center">
                            <SectionTitle title="products" />
                        </div>
                        <div className="mx-auto mb-6 flex justify-center">
                            <TabList className="product-tab-nav nav mx-auto">
                                {categoryName.map(item => (

                                    <Tab key={item}><li className="nav-item" onClick={()=> setProductLength(6)}><a className="nav-link" data-bs-toggle="tab"
                                        >{item}</a></li></Tab>

                                ))}
                                {/* <ul className="product-tab-nav nav">

                            </ul> */}
                            </TabList>
                        </div>
                    </div>



                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Apple.slice(0, productLength).slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />
                            ))}
                            {productLength < Apple.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Apple.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Samsung.slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />

                            ))}
                            {productLength < Samsung.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Samsung.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Google.slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />

                            ))}
                            {productLength < Google.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Google.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Sony.slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />

                            ))}
                            {productLength < Sony.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Sony.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Intel.slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />

                            ))}
                            {productLength < Intel.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Intel.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Xiaomi.slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />

                            ))}
                            {productLength < Xiaomi.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Xiaomi.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="gird grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3" style={{ display: "grid" }}>
                            {Laborum.slice(0, productLength).map((item, ind)=> (
                            <ProductCard key={ind} item={item} />

                            ))}
                            {productLength < Laborum.length   ?  <button className="btn btn-lg btn-primary btn-hover-dark m-auto col-span-full" onClick={()=> setProductLength(Laborum.length)}> Load More <i
                            className="fa fa-arrow-right ml-15px" aria-hidden="true" ></i></button> : null}
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default ProductGallery