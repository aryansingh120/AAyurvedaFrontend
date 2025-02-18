import React from 'react';

const Review = () => {
  const reviews = [
    {
      id: 1,
      title: "Must Try",
      content: "Awesome Tanend cream, worth buy.Thank you so much",
      author: "Pooja M.",
      date: "05/09/2023",
      rating: "★★★☆☆",
    },
    {
      id: 2,
      title: "Very good",
      content: "After using this product removes tan and blemishes.",
      author: "Surekha T.",
      date: "05/09/2023",
      rating: "★★★☆☆",
    },
    {
      id: 3,
      title: "Really Good",
      content: "This is a really good product. It's really easy to use.",
      author: "Shivani S.",
      date: "05/09/2023",
      rating: "★★★☆☆",
    },
    {
      id: 4,
      title: "Amazing product",
      content: "So...... amazing when I used this all tanning is removed.",
      author: "Mehak M.",
      date: "05/09/2023",
      rating: "★★★☆☆",
    },
    {
      id: 5,
      title: "Effective",
      content: "Tan-end cream is so amazing I get the best results after using it.",
      author: "Anonymous",
      date: "05/09/2023",
      rating: "★★★☆☆",
    },
  ];

  return (
    <div className="p-4 bg-[#F5F5F5]">
      <h1 className="text-3xl font-bold text-center mb-6">Reviews</h1>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review) => (
          <div key={review.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white">
            <div className="font-bold text-xl mb-2">{review.title}</div>
            <p className="text-gray-700 text-base">{review.content}</p>
            <div className="mt-4">
              <span className="text-sm text-gray-600">{review.author}</span>
              <span className="text-sm text-gray-600 ml-2">{review.date}</span>
            </div>
            <div className="mt-2">
              <span className="text-yellow-500">{review.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;