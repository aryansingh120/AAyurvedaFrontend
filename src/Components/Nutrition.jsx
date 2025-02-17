import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import axios from 'axios';

const Nutrition = () => {
  const [products, setProducts] = useState([]);
  const [additionalProducts, setAdditionalProducts] = useState([]);

  const fetchData = async () => {
    try {
      const receive = await axios.get("https://aayurveda-1.onrender.com/productData/nutritionProducts");
      const fetchedProducts = receive.data.allProducts;
      setProducts(fetchedProducts);
      setAdditionalProducts(fetchedProducts.slice(-4)); // Setting last 4 products for additional section
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
      <h1 className="text-2xl font-bold mb-4">Top Skincare Products</h1>
      <div className="flex items-center overflow-hidden relative">
        <button onClick={scrollLeft} className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md focus:outline-none">
          <FaArrowLeft size={20} />
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scroll-snap-align {
              scroll-snap-align: start;
            }
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
            }
            .zoom-card:hover {
              transform: scale(1.05);
            }
          `}</style>
          {products.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 scroll-snap-align">
              <div className="bg-gray-100 rounded-lg p-4 m-2 flex-1 transition-shadow duration-300 hover:shadow-lg relative group zoom-card transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
                  {product.discount}% Off
                </div>
                <img src={product.url} alt={product.name} className="h-48 w-full object-cover rounded-md" />
                <h2 className="mt-2 text-blue-500 text-lg line-clamp-2">{product.description}</h2>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-blue-500" size={16} />
                  ))}
                  <p className="ml-2 text-gray-600">{product.reviews} reviews</p>
                </div>
                <p className="text-red-500 font-bold">MRP: <span className='line-through decoration-2'>₹{product.price}</span></p>
                <p className="text-green-500 font-bold">Discounted Price: ₹{product.discountedPrice}</p>
                <p className="text-gray-700">{product.discount}% off</p>
                <div className="mt-6 bottom-4 left-0 right-0 flex justify-center">
                  <button className="bg-blue-500 text-white py-2 px-4 w-full rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md focus:outline-none">
          <FaArrowRight size={20} />
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {additionalProducts.map((product, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 m-2 transition-shadow duration-300 hover:shadow-lg relative group zoom-card transition-transform duration-300 ">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
              {product.discount}% Off
            </div>
            <img src={product.url} alt={product.name} className="h-48 w-full object-cover rounded-md" />
            <h2 className="mt-2 text-blue-500 text-lg line-clamp-2">{product.description}</h2>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-blue-500" size={16} />
              ))}
              <p className="ml-2 text-gray-600">{product.reviews} reviews</p>
            </div>
            <p className="text-red-500 font-bold">MRP: <span className='line-through decoration-2'>₹{product.price}</span></p>
            <p className="text-green-500 font-bold">Discounted Price: ₹{product.discountedPrice}</p>
            <p className="text-gray-700">{product.discount}% off</p>
            <div className="mt-6 bottom-4 left-0 right-0 flex justify-center ">
              <button className="bg-blue-500 text-white py-2 px-4 w-full rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
