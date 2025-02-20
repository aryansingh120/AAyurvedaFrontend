import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing better icons
import "./video.css"

const VideoRow = () => {
  const [videos, setVideos] = useState([]);
  const scrollContainerRef = useRef(null);

  const receive = async () => {
    try {
      const fetchData = await axios.get(
        "https://aayurveda-rwdf.onrender.com/video/allVideos"
      );
      const videoUrls = fetchData.data.videos.map((item) => item.url);
      setVideos(videoUrls);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    receive();
  }, []);

  // Full scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Full scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 z-8 bg-orange-500 text-white p-3  rounded-full shadow-lg hover:bg-orange-600"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Video Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto py-4 scroll-smooth scrollbar-hide w-full pr-12 hide"
      >
        {videos.map((video, index) => (
          <div key={index} className="flex-none w-38 h-64">
            <video
              className="w-full h-full rounded-3xl"
              src={video}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 z-8 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default VideoRow;
