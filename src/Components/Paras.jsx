import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCounter } from './CartContext';
import "./global.css"

const ProductList = () => {
  const { increment } = useCounter();

  const handleAddToCart = async (event, productId) => {
    event.preventDefault();
    event.stopPropagation();

    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("Please login to add items to cart!");
      return;
    }

    try {
      const response = await fetch("https://aayurveda-hn8w.onrender.com/cart/cartadd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ productId, quantity: 1 })
      });

      const data = await response.json();
      if (response.ok) {
        increment();

        alert("Item added to cart successfully!");
      } else {
        throw new Error(data.message || "Failed to add item to cart");
      }
    } catch (error) {
      console.error("❌ Error:", error.message);
      alert("Something went wrong while adding to cart.");
    }
  };

  const [products, setProducts] = useState([]);
  const [additionalProducts, setAdditionalProducts] = useState([]);

  const fetchData = async () => {
    try {
      const receive = await axios.get("https://aayurveda-hn8w.onrender.com/productData/skincareProducts");
      const fetchedProducts = receive.data.allProducts;
      setProducts(fetchedProducts);
      setAdditionalProducts(fetchedProducts.slice(-4));
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const widthToScroll = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({ left: -widthToScroll, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const widthToScroll = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({ left: widthToScroll, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto p-4 relative">
      <h1 className="text-2xl font-bold mb-4">Best-Selling Skincare Products</h1>
      <div className="flex items-center overflow-hidden relative">
        <button onClick={scrollLeft} className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaArrowLeft size={20} />
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products?.map((product, index) => (
            <Link to={`/productDetails?id=${product?._id}`} key={index} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0">
              <div className="bg-white rounded-lg p-4 m-2 flex-1 transition-shadow duration-300 hover:shadow-md relative group">
                <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  {product?.discount}% Off
                </div>
                <img src={product?.url} alt={product?.name} className="h-48 w-full object-cover rounded-md" />
                <h2 className="mt-2 text-orange-500 text-lg line-clamp-2">{product?.description}</h2>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-green-500" size={16} />
                  ))}
                  <p className="ml-2 text-gray-600">{product?.reviews} reviews</p>
                </div>
                <p className="text-red-500 font-bold ">MRP: <span className='line-through decoration-2'> ₹{product?.price}</span></p>
                <p className="text-green-500 font-bold">Discounted Price: ₹{product?.discountedPrice}</p>
                <div className="mt-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                  <button className="bg-orange-500 text-white py-2 px-4 w-full rounded" 
                    onClick={(e) => handleAddToCart(e, product?._id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Additional Products Section */}
      <div className="flex justify-center flex-wrap">
        {additionalProducts?.map((product, index) => (
          <Link to={`/productDetails?id=${product?._id}`} key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white rounded-lg p-4 m-2 flex-1 transition-shadow duration-300 hover:shadow-md relative group">
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
                {product?.discount}% Off
              </div>
              <img src={product?.url} alt={product?.name} className="h-48 w-full object-cover rounded-md" />
              <h2 className="mt-2 text-orange-500 text-lg line-clamp-2">{product?.description}</h2>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-green-500" size={16} />
                ))}
                <p className="ml-2 text-gray-600">{product?.reviews} reviews</p>
              </div>
              <p className="text-red-500 font-bold ">MRP: <span className='line-through decoration-2'> ₹{product?.price}</span></p>
              <p className="text-green-500 font-bold">Discounted Price: ₹{product?.discountedPrice}</p>
              <div className="mt-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                <button className="bg-orange-500 text-white py-2 px-4 w-full rounded" onClick={(e) => handleAddToCart(e, product?._id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
