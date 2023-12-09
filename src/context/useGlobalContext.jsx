import React, { createContext, useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPablic';
import useProducts from '../hooks/useProducts';

const MyContext = createContext();
export const useGlobalContext = ()=> {
  return useContext(MyContext);
}
function ContextProvider({children}) {
  const [brandName , setBrandName] = useState("")
  const [categoryName, setCategoryName] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const localCheckCategories = localStorage.getItem("checkedCategory") ? JSON.parse(localStorage.getItem("checkedCategory") ) : []
  const localCheckBrands = localStorage.getItem("checkedBrand") ? JSON.parse(localStorage.getItem("checkedBrand") ) : []
    console.log(localCheckCategories)
    const [checkedCategory , setCheckedCategory] = useState(localCheckCategories) 
    const [checkedBrand , setCheckedBrand] = useState(localCheckBrands)
    const cartIdsAndQty = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    const [cartItems , setCartItems] = useState(cartIdsAndQty)
    const [cartProducts, setCartProducts] = useState([])
    const axiosPublic = useAxiosPublic();
    const {products} = useProducts();
    


    

    
    const addToCart = (id, qty)=> {
      
      const idAndQty = {id, qty};
      if(cartItems.findIndex(item => item.id === id) === -1){
        const insertedArray = [...cartItems, idAndQty]
        setCartItems(insertedArray);
        localStorage.setItem("cartItems", JSON.stringify(insertedArray));
        
      }else{
        const filterItems = cartItems.filter(item => item.id !== id);
        const insertedItems = [...filterItems, idAndQty]
        setCartItems(insertedItems);
        localStorage.setItem("cartItems", JSON.stringify(insertedItems));
        
      }
      
    }

    const removeCartItem = (id)=> {
      const filteredLocalItem = cartItems.filter(item => item.id !== id);
      setCartItems(filteredLocalItem)
      localStorage.setItem("cartItems", JSON.stringify(filteredLocalItem));
      const removeCartItem = cartProducts.filter(item => item._id !== id);
      console.log("removeCartItem", removeCartItem)
      setCartProducts(removeCartItem)

    }
    const clearCartItem = ()=> {
      setCartItems([])
      localStorage.setItem("cartItems", []);
      setCartProducts([])

    }
    
    
 
  useEffect(()=> {
    const handleCartItems = ()=> {
      let initialArray = [];
      cartItems.forEach(item => {
       const isCartItem = products.map(product => product._id).includes(item.id);
            
       if(isCartItem){
        const foundItem = products.find(product => product._id === item.id)
        initialArray.push({...foundItem, qty: item.qty}); 
       }
      });
      
      setCartProducts(initialArray)
    }
    handleCartItems()

    
  },[cartItems, products])

  const provideValue = {
    brandName,
    setBrandName,
    categoryName,
    setCategoryName,
    checkedCategory,
    setCheckedCategory,
    checkedBrand,
    setCheckedBrand,
    priceRange, 
    setPriceRange,
    addToCart,
    cartProducts,
    removeCartItem,
    clearCartItem
  }
  return (
    <MyContext.Provider value={provideValue} >
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider