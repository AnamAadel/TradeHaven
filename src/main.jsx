import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Root from "./Root";
import AuthProvider from "./context/AuthProvider";
import ContextProvider from './context/useGlobalContext';
import useAxiosPublic from './hooks/useAxiosPablic';
import "./index.css";
import Products from './pages/SingleProduct/Products';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import About from './pages/about/About';
import Account from './pages/account/Account';
import BlogSingle from './pages/blog/BlogSingle';
import Blogs from './pages/blog/Blogs';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import Home from "./pages/home/Home";
import LoginPage from './pages/login/LoginPage';
import SignUp from './pages/login/SignUp';
import Shop4Column from './pages/shop/Shop4Column';
import ShopLeftSide from './pages/shop/ShopLeftSide';
import WishlistPage from './pages/wishlist/WishlistPage';
import "./style/plugins.min.css";
import "./style/style.min.css";
import "./style/vendor.min.css";

 const axiosPublic = useAxiosPublic()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop_4_column",
        element: <Shop4Column />
      },
      {
        path: "/shop_left",
        element: <ShopLeftSide />
      },
      {
        path: "/shop",
        element: <Products />
      },
      {
        path: "/product/:id",
        loader: ({params})=> axiosPublic(`/products/${params.id}`),
        element: <SingleProduct />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/wishlist",
        element: <WishlistPage />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blogs/:id",
        loader: ({params})=> axiosPublic.get(`/blogs/${params.id}`),
        element: <BlogSingle />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <SignUp />
      },
    ], 
  }
]);


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <ContextProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ContextProvider>
  </QueryClientProvider>
  </React.StrictMode>
);