import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img2 from "../assets/second.webp";
import img1 from "../assets/first.jpg";
import img3 from "../assets/third.webp";
import img4 from "../assets/fourth.webp";

const products = [
  {
    name: 'Tan-End Cream With Lemon And Tomato Extract 50 ML',
    reviews: 46,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img1
  },
  {
    name: 'Glowelle - Vitamin C 20% Serum - 30ml',
    reviews: 31,
    mrp: 399,
    discountedPrice: 339,
    discount: 15,
    imageUrl: img2
  },
  {
    name: 'Blemish-End Cream For Blemish Prone Skin - 50ml',
    reviews: 26,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img3
  },
  {
    name: 'Fairness & Anti Wrinkle Cream - 90ML',
    reviews: 10,
    mrp: 485,
    discountedPrice: 388,
    discount: 20,
    imageUrl: img4
  },,
  {
    name: 'Blemish-End Cream For Blemish Prone Skin - 50ml',
    reviews: 26,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img3
  },
  {
    name: 'Fairness & Anti Wrinkle Cream - 90ML',
    reviews: 10,
    mrp: 485,
    discountedPrice: 388,
    discount: 20,
    imageUrl: img4
  },,
  {
    name: 'Blemish-End Cream For Blemish Prone Skin - 50ml',
    reviews: 26,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img3
  },
  {
    name: 'Fairness & Anti Wrinkle Cream - 90ML',
    reviews: 10,
    mrp: 485,
    discountedPrice: 388,
    discount: 20,
    imageUrl: img4
  },,
  {
    name: 'Blemish-End Cream For Blemish Prone Skin - 50ml',
    reviews: 26,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img3
  },
  {
    name: 'Fairness & Anti Wrinkle Cream - 90ML',
    reviews: 10,
    mrp: 485,
    discountedPrice: 388,
    discount: 20,
    imageUrl: img4
  },,
  {
    name: 'Blemish-End Cream For Blemish Prone Skin - 50ml',
    reviews: 26,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img3
  },
  {
    name: 'Fairness & Anti Wrinkle Cream - 90ML',
    reviews: 10,
    mrp: 485,
    discountedPrice: 388,
    discount: 20,
    imageUrl: img4
  },,
  {
    name: 'Blemish-End Cream For Blemish Prone Skin - 50ml',
    reviews: 26,
    mrp: 399,
    discountedPrice: 319,
    discount: 20,
    imageUrl: img3
  },
  {
    name: 'Fairness & Anti Wrinkle Cream - 90ML',
    reviews: 10,
    mrp: 485,
    discountedPrice: 388,
    discount: 20,
    imageUrl: img4
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-4 m-2 flex-1 transition-shadow duration-300 hover:shadow-md relative group">
      <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
        {product.discount}% Off
      </div>
      <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded-md" />
      <h2 className="mt-2 text-orange-500 text-lg">{product.name}</h2>
      <p className="text-gray-600">{product.reviews} reviews</p>
      <p className="text-red-500 font-bold">MRP: ₹{product.mrp}</p>
      <p className="text-green-500 font-bold">Discounted Price: ₹{product.discountedPrice}</p>
      <p className="text-gray-700">{product.discount}% off</p>
      <div className="mt-[1rem] bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
        <button className="bg-orange-500 text-white py-2 px-4 w-full rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const sliderRef = React.useRef(null);

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
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scroll-snap-align {
              scroll-snap-align: start;
            }
          `}</style>
          {products.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 scroll-snap-align">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
