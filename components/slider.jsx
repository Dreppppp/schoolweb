"use client";
import { useState, useEffect } from "react";
import Pugach1 from "../assets/Pugach1.jpg";
import Pugach5 from "../assets/Pugach5.jpg";
import Img1 from "../assets/img1.jpg";

const images = [Pugach1, Pugach5, Img1];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[700px]  mt-[100px] overflow-hidden relative">
      <img
        src={images[current].src}
        alt="School Slide"
        className="w-full h-full object-cover transition-all duration-700"
      />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
