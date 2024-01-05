import { useEffect, useState } from "react";
import { storeContext } from "./Context";

import axios from "axios";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import { Login } from "./Components/Login";
function App() {
  const [products, setProduct] = useState([]);
  const [cartData, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [filterData, setFilterData] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        axios
          .get("https://fakestoreapi.com/products")
          .then((response) => setProduct(response.data));
        setLoading(false);
      } catch (error) {
        console.log("error");
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const category = [
    { id: 0, category: "All" },
    { id: 1, category: "Men's clothing" },
    {
      id: 2,
      category: "Electronics",
    },
    {
      id: 3,
      category: "Women's clothing",
    },
    {
      id: 4,
      category: "Jewelery",
    },
  ];
  const addCart = (id) => {
    const selectedProducts = products.find((prev) => prev.id === id);
    if (selectedProducts) setCart([selectedProducts, ...cartData]);
    console.log(cartData);
  };

  return (
    <storeContext.Provider
      value={{
        products,
        setProduct,
        cartData,
        setCart,
        addCart,
        loading,
        setLoading,
        login,
        setLogin,
        category,
        filterData,
        setFilterData,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </storeContext.Provider>
  );
}
export default App;
