import React, { useState, useEffect } from 'react';
import { FaStar, FaPlus, FaMinus, FaPercent, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Paras from './Paras';
import Review from './Review';
import { useLocation } from 'react-router-dom';
import Nutrition from './Nutrition';

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const location=useLocation();
  const theame=location.state;
  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://aayurveda-1.onrender.com/productData/allProducts`);
        const fetchedProduct = response.data.allProducts.find(p => p._id === productId);
        setProduct(fetchedProduct);
        window.scrollTo(0,0);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div>
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2 mb-4">
        <div className="relative">
          <div className={`absolute -top-2 left-0 ${(theame==1)? "bg-red-600":"bg-blue-600"} bg-red-600 px-3 py-1 text-sm text-white`}>-{product.discount}%</div>
          <img src={product.url} alt={product.name} className="mx-auto w-full max-w-[600px]" />
        </div>

        <div className="space-y-6">
          <h1 className={`text-3xl font-bold ${(theame==1)? "text-orange-500":"text-blue-500"} `}>{product.description}</h1>

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => <FaStar key={i} className={`${(theame==1)? "text-orange-500":"text-blue-600"}`} size={20} />)}
            <p className="ml-2 text-gray-600">{product.reviews} reviews</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-red-600 font-bold text-2xl">MRP:</span>
              <span className="line-through text-red-600 text-2xl">₹{product.price}</span>
              <span className="text-2xl font-bold text-green-600">₹{product.discountedPrice}</span>
              <span className={` font-bold text-xl ${(theame==1)? "bg-orange-500":"text-blue-500"} `}>You Save</span>
              <span className="text-green-500 font-bold text-xl">₹{product.price - product.discountedPrice}</span>
            </div>
            <p className="text-sm text-gray-500">Inc. of all taxes</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold text-2xl">Quantity:</span>
            <div className="flex border-2">
              <button className="px-4 border-r-2" onClick={() => setQuantity(q => Math.max(1, q - 1))}><FaMinus /></button>
              <span className="px-4 border-r-2 font-bold text-xl">{quantity}</span>
              <button className="px-4" onClick={() => setQuantity(q => q + 1)}><FaPlus /></button>
            </div>
          </div>

          <p className="text-md">Subtotal: <span className="text-green-500 font-bold">₹{product.discountedPrice * quantity}</span></p>

          <div className="flex gap-4">
            <button className={`flex-1  ${(theame==1)? "bg-orange-500 hover:bg-orange-600":"bg-blue-500 hover:bg-blue-600"} text-white p-3 rounded-lg font-bold`}>ADD TO CART</button>
            <button className={`flex-1 border border-gray-300 font-bold p-3 rounded-lg  hover:bg-orange-500 hover:text-white transition`}>BUY IT NOW</button>
          </div>

          <div className="p-4 border rounded-lg shadow-lg bg-[#F5F5F5]">
            <h3 className="mb-3 font-semibold">Available offers</h3>
            <ul className="space-y-2 text-sm">
              {["Additional 5% discounts on all orders of 600+", "Flat 25% discount on selected combos", "Free Shipping on orders above ₹500"].map((offer, i) => (
                <li key={i} className="flex items-center gap-2 font-medium">
                  <FaPercent className="text-green-600" /> {offer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <Paras/> */}
    {(theame==1)? <Paras/> : <Nutrition/>}
    <Review/>
    </div>
  );
};

export default ProductPage;
