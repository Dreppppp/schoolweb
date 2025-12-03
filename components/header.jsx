"use client";
import Navbar from "./menu";
import Image from "next/image";
import { useState, useEffect } from "react";
import slide1 from "../assets/Pugach1.jpg";
import slide2 from "../assets/Pugach5.jpg";
import slide3 from "../assets/img1.jpg";

const slides = [slide1, slide2, slide3];

export default function Header({ scrollToAbout, scrollToNews, scrollToLocation }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative z-50 h-[80px]">
        <Navbar 
          scrollToAbout={scrollToAbout} 
          scrollToNews={scrollToNews} 
          scrollToLocation={scrollToLocation} 
        />
      </div>

      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          </div>
        ))}
      </div>

      <div className="relative z-30 flex flex-col lg:flex-row items-start justify-start h-full px-6 md:px-20 lg:px-20 pt-[10%]">
        <div className="max-w-full lg:max-w-[460px] text-white drop-shadow-2xl">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-[75px] leading-[1.0]">
            Навчайся з задоволенням
          </h1>
          <p className="mt-4 md:mt-[45px] text-sm md:text-[22px] leading-[1.3]">
            Ліцей сьогодні – це 1140 учня, 85 педагогів і ми надіємося, що ви станете наступними
          </p>
          <button onClick={() => scrollToAbout()} className="mt-4 md:mt-[20px] text-lg md:text-[25px] font-bold w-fit px-6 md:px-[80px] h-[50px] md:h-[63px] rounded-[96px] bg-[#FFBC51] cursor-pointer hover:text-blue-500 transition font-normal">
            Про Тріумф
          </button>
        </div>
      </div>
    </div>
  );
}
