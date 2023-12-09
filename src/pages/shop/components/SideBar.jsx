import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPablic';

function SideBar({
    setCategoryName, 
    setBrandName, 
    checkedCategory , 
    setCheckedCategory, 
    checkedBrand , 
    setCheckedBrand,
    setPriceRange,
    setSearch
}) {
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])
    const [isLoading, setIsLoading]= useState(false);
    const axiosPublic = useAxiosPublic();
    

    const uniqueCategories = categories.map(item => item.type).filter((item, index, arr) => arr.indexOf(item) === index);


    const uniqueBrands = brands.map(item => item.brand).filter((item, index, arr) => arr.indexOf(item) === index);


    const handleCheck = (name)=> {
        console.log(checkedCategory)
        console.log(checkedCategory.findIndex(item => item.name === name) === -1)
        if(checkedCategory.findIndex(item => item.name === name) === -1){
            const newArray = [...checkedCategory,{name: name}];
            setCheckedCategory(newArray);
            localStorage.setItem("checkedCategory", JSON.stringify(newArray));
        }else{
            const filterItem = checkedCategory.filter(item => item.name !== name);
            console.log(filterItem)
            setCheckedCategory(filterItem);
            localStorage.setItem("checkedCategory", JSON.stringify(filterItem));
        }
    }

    const handleCheckBrands = (name)=> {
        console.log(checkedBrand)
        console.log(checkedBrand.findIndex(item => item.name === name) === -1)
        if(checkedBrand.findIndex(item => item.name === name) === -1){
            const newArray = [...checkedBrand,{name: name}];
            setCheckedBrand(newArray);
            localStorage.setItem("checkedBrand", JSON.stringify(newArray));
        }else{
            const filterItem = checkedBrand.filter(item => item.name !== name);
            console.log(filterItem)
            setCheckedBrand(filterItem);
            localStorage.setItem("checkedBrand", JSON.stringify(filterItem));
        }
    }

    const handlePriceRange = (e)=> {
        e.preventDefault();
        setPriceRange(e.target.price.value);
    }

    useEffect(()=> {
        axiosPublic.get(`/products/types`).then(res => {
            setCategories(res.data);
        }).catch(err => console.log(err));


        axiosPublic.get(`/products/brands`).then(res => {
            setBrands(res.data);
        }).catch(err => console.log(err));
    },[axiosPublic])

  return (
    <div className="my-6 mb-md-60px mb-lm-60px">
                    <div className="shop-sidebar-wrap">
                        
                        <div className="sidebar-widget mt-8">
                            <h4 className="sidebar-title">Price Filter</h4>
                            <div className="price-filter">
                                <form className="price-slider-amount" onSubmit={handlePriceRange}>
                                    <input type="number" id="amount" className="p-2 rounded-md h-auto lh-1 outline" name="price"
                                        placeholder="Add Your Price" min="0" />
                                </form>
                                <div id="slider-range"></div>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h4 className="sidebar-title">Category</h4>
                            <div className="sidebar-widget-category">
                                <ul className='text-xl space-y-[1px]'>
                                {
                                    uniqueCategories && uniqueCategories.map(type => (

                                    <li key={type}><a className={`text-2xl capitalize cursor-pointer ${checkedCategory.findIndex(item => item.name === type) !== -1 ? "checked text-blue-500 font-bold" : "text-neutral"}`} style={{fontSize: "20px text-neutral"}} onClick={()=> {setCategoryName(type); handleCheck(type)}} >{type}</a></li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget">
                            <h4 className="sidebar-title">Brands</h4>
                            <div className="sidebar-widget-category">
                                <ul className='text-xl space-y-[1px]'>
                                {
                                    uniqueBrands && uniqueBrands.map(brand => (

                                    <li key={brand}><a className={ `text-2xl capitalizev cursor-pointer ${checkedBrand.findIndex(item => item.name === brand) !== -1 ? "checked text-blue-500 font-bold" : "text-neutral"}`} style={{fontSize: "20px"}} onClick={()=> {setCategoryName(brand); handleCheckBrands(brand)}} >{brand}</a></li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-widget-image">
                            <div className="single-banner">
                                <img src="assets/images/banner/2.jpg" alt="" />
                                <div className="item-disc">
                                    <h2 className="title">#bestsellers</h2>
                                    <a className="shop-link">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default SideBar