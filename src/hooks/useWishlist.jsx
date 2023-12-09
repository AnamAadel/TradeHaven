
function useWishlist() {
    const localData = localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [];
    
  return localData
}

export default useWishlist