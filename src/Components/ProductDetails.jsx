import React, { useState } from 'react';
import img1 from "../assets/first.jpg";
import { FaStar, FaPlus, FaMinus, FaPercent, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';
import Paras from './Paras';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Review from './Review';

const ProductPage = () => {
  let location=useLocation();
    let path=location.pathname;
    
        useEffect(()=>{
            window.scrollTo(0,0)

        },[path])
  const [quantity, setQuantity] = useState(1);


  const product = {
    name: 'Tan-End Cream With Lemon And Tomato Extract 50 Ml',
    originalPrice: 399,
    discountedPrice: 319,
    savings: 80,
    reviews: 46,
    imageUrl: img1,
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
const [count,setCount]=useState([])
  const receive=async()=>{
    try{
      const fetchData=await axios.get(`https://aayurveda-1.onrender.com/productData/skincareProducts`)
      const x=receive.data.allProducts;
      setCount(x);

    }catch(error){
      console.log("error found",error);
      
    }
  }

  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2 mb-4">
        {/* Product Image */}
        <div className="relative">
          <div className="absolute -top-2 left-0 z-10 bg-red-600 px-3 py-1 text-sm text-white">-20%</div>
          <img src={product.imageUrl} alt={product.name} className="mx-auto w-full max-w-[600px]" />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-orange-500">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-green-500" size={20} />)}
            <p className="ml-2 text-gray-600">({product.reviews}) reviews</p>
          </div>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-bold text-2xl">MRP:</span>
              <span className="line-through decoration-2 font-bold text-red-600 text-2xl">₹ {product.originalPrice}</span>
              <span className="text-2xl font-bold text-green-600">₹ {product.discountedPrice}</span>
              <span className="text-orange-500 font-bold text-xl">You Save</span>
              <span className="text-green-500 font-bold text-xl">₹ {product.savings}</span>
            </div>
            <p className="text-sm text-gray-500">Inc. of all taxes</p>
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="font-bold text-2xl">Quantity:</span>
              <div className="flex border-2">
                <button className="px-4 border-r-2" onClick={handleDecrease}><FaMinus /></button>
                <span className="px-4 border-r-2 font-bold text-xl">{quantity}</span>
                <button className="px-4" onClick={handleIncrease}><FaPlus /></button>
              </div>
            </div>
            <p className="text-md">Subtotal: <span className="text-green-500 font-bold">₹ {product.discountedPrice * quantity}</span></p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-bold">ADD TO CART</button>
            <button className="flex-1 border border-gray-300 font-bold p-3 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-700">BUY IT NOW</button>
          </div>

          {/* Checkout */}
          <div className="space-y-4">
            <p className="text-center text-gray-600 text-lg">Checkout securely with</p>
            <div className="flex justify-center gap-8">
              {[FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal].map((Icon, i) => <Icon key={i} size={60} />)}
            </div>
          </div>

          {/* Available Offers */}
          <div className="p-4 border rounded-lg shadow-lg bg-[#F5F5F5]">
            <h3 className="mb-3 font-semibold">Available offers</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Additional 5% discounts on all orders of 600+",
                "Flat 25% discount on selected combos",
                "Free Shipping on orders above ₹500"
              ].map((offer, i) => (
                <li key={i} className="flex items-center gap-2 font-medium">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600"><FaPercent /></span>
                  {offer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <Paras />
<Review/>
    </>
  );
};

export default ProductPage;
