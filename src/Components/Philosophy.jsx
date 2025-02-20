import React from "react";

const Philosophy = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center  p-6 rounded-lg">
        <h2 className="text-3xl font-extrabold text-blue-500 sm:text-4xl">
          Our Philosophy
        </h2>
        <p className="mt-4 text-lg text-blue-500">
          At Aayurved, we believe in the ancient wisdom of Ayurveda, which emphasizes balance, harmony, and natural healing. Our philosophy is rooted in the idea that true wellness comes from aligning the body, mind, and spirit with nature. By combining traditional Ayurvedic principles with modern research, we create products that nurture holistic well-being.
        </p>
        <p className="mt-4 text-lg text-blue-500">
          We are committed to using pure, natural ingredients that are free from harmful chemicals, ensuring safety and effectiveness. Our approach is not just about treating ailments but also about preventing imbalances and promoting overall health. Sustainability and ethical sourcing are at the heart of what we do, ensuring that our products are as kind to the environment as they are to you.
        </p>
        <button className="mt-6 px-10 py-3 bg-white text-orange-500 font-semibold  shadow-md hover:bg-orange-600 hover:text-white transition duration-300 text-2xl">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Philosophy;
