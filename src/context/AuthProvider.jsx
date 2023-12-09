import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../../firebase.config';
import useAxiosPublic from '../hooks/useAxiosPablic';
import useProducts from '../hooks/useProducts';
import useWishlist from '../hooks/useWishlist';

const MyContext = createContext();
export const useAuth = ()=> {
  return useContext(MyContext);
}
function AuthProvider({children}) {
const googleAuth = new GoogleAuthProvider();
const githubAuth = new GithubAuthProvider();
const [user, serUser] = useState(null)
const [loading, setLoading] = useState(false);
const [role, setRole] = useState({});
const [wishlist, setWishlist] = useState(useWishlist());
const [modalVideoLink, setModalVideoLink] = useState("");
const axiosPublic = useAxiosPublic();
const [isShowMenu, setIsShowMenu] = useState(false);
const [isShowCart, setIsShowCart] = useState(false);
const [isShowWishlist, setIsShowWishlist] = useState(false);
const [isShowSearchModal, setIsShowSearchModal] =useState(false);
const [isShowLogin, setIsShowLogin] = useState(false);
const [wishItem, setWishItem] = useState([]);
const {products} = useProducts();

  const addWishItem = (id)=> {
    const getCartItem = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    const isCartItem = getCartItem.map(doc => doc.id).includes(id);

    console.log("getCartItem", getCartItem)
    console.log(isCartItem)
    const whishObject = {id, qty: 0};

    if(isCartItem){
      const foundItem = getCartItem.find(item => item.id === id);
      console.log(foundItem)
      whishObject.qty = foundItem.qty;
    }

      if(wishlist.findIndex(item => item.id === id) === -1){
        const idsArray = [...wishlist, whishObject]
        setWishlist(idsArray);
        localStorage.setItem("wishlist", JSON.stringify(idsArray));
        
      }else{
        const filterIds = wishlist.filter(item => item.id !== id);
        setWishlist(filterIds);
        localStorage.setItem("wishlist", JSON.stringify(filterIds));
        
      }
  }

  const removeWishItem = (id)=> {
    const filteredLocalItem = wishlist.filter(item => item.id !== id);
    setWishlist(filteredLocalItem)
    localStorage.setItem("cartItems", JSON.stringify(filteredLocalItem));
    const removeCartItem = wishItem.filter(item => item._id !== id);
    console.log("removeCartItem", removeCartItem)
    setWishItem(removeCartItem)

  }

  const closeAllModal = ()=> {
    setIsShowLogin(false)
    setIsShowSearchModal(false)
    setIsShowWishlist(false)
    setIsShowCart(false)
    setIsShowMenu(false)
  }


  const createUser = (email, password)=> {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  const signInUser = (email, password)=> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = ()=> {
    return signInWithPopup(auth, googleAuth)
  }
  const signInWithGithub = ()=> {
    return signInWithPopup(auth, githubAuth)
  }

  const logout = ()=> {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      console.log(currentUser)
      
      serUser(currentUser);
      if(currentUser){
        axiosPublic.post("/jwt", {email: currentUser.email}).then(res => localStorage.setItem("accessToken", res.data)).catch(err => console.log(err));
        
        setLoading(false)
        axiosPublic.get(`/users/userRole?email=${currentUser.email}`).then(res => {
          setRole(res.data.userRole)
          console.log(res.data.userRole)
          console.log(res.data)
        }).catch(err => console.log(err))
      }else{
        localStorage.removeItem("accessToken")
      }
    })

    const convertToWishItem = ()=> {
      let initialArray = [];
        wishlist.forEach(item => {
         const isWishItem = products.map(product => product._id).includes(item.id);
         if(isWishItem){
          const foundItem = products.find(product => product._id === item.id)
          initialArray.push({...foundItem, qty: item.qty}); 
         }
        });
        setWishItem(initialArray)
        
      }
      convertToWishItem();

    return unsubscribe

  },[axiosPublic, wishlist, products])
  const authValue = {
    // authentication
    signInWithGoogle,
    signInWithGithub,
    logout,
    createUser,
    signInUser,
    // authentication loading
    loading,
    setLoading,
    // current User
    user,
    // modal video Link
    modalVideoLink,
    setModalVideoLink,
    // wishlist functionality property
    wishlist,
    setWishlist,
    addWishItem,
    wishItem,
    removeWishItem,
    // user role
    role,
    setRole,
    // open and close modal functionality
    isShowMenu,
    setIsShowMenu,
    isShowCart, 
    setIsShowCart,
    isShowWishlist, 
    setIsShowWishlist,
    isShowSearchModal, 
    setIsShowSearchModal,
    isShowLogin, 
    setIsShowLogin,
    closeAllModal,
  }
  return (
    <MyContext.Provider value={authValue}>
      {children}
    </MyContext.Provider>
  )
}

export default AuthProvider