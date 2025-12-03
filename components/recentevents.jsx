"use client";

import { useState } from "react";
import Image from "next/image";
import zvonik from "../assets/zvonik.jpg";
import stem from "../assets/stem.webp";
import yarmarok from "../assets/yarmarok.jpg";
import tabir from "../assets/tabir.jpg";
import dekada from "../assets/dekada.jpg";

const newsData = [
  {
    id: 1,
    title: "Свято першого дзвоника",
    description:
      "1 вересня – це особливий день, коли наш Ліцей №10 “Тріумф” знову наповнюється дитячим сміхом, щирими посмішками та радісним гомоном. Це свято знань, надій та нових звершень! Нехай кожен навчальний день буде плідним, цікавим і дарує радість відкриттів!",
    image: zvonik.src,
  },
  {
    id: 2,
    title: "STEM-тиждень",
    description:
      "У період з 21 по 25 квітня 2025 року в Ліцеї №10 “Тріумф” м. Бердичева проходив STEM-тиждень під загальною темою “3D: від ідей до реальності”. Метою заходів стало формування ключових компетентностей у галузях науки, технологій, інженерії та математики (STEM), розвиток інженерного мислення, творчості, креативності, а також популяризація сучасних технологій у освітньому процесі.",
    image: stem.src,
  },
  {
    id: 3,
    title: "Ярмарок у ліцеї",
    description:
      "28 та 29 жовтня відбувся яскравий та надихаючий ярмарок, який об’єднав учнів, вчителів, батьків та усіх небайдужих.",
    image: yarmarok.src,
  },
  {
    id: 4,
    title: "Табір дозвілля ліцею",
    description:
      "Літо крокує рідним Бердичевом. Швидко біжать теплі та сонячні дні у таборі дозвілля ліцею №10 “Тріумф”, насичені яскравими заходами. Розваги у воді, футбол, цікаві квести, конкурси, розвивальні заняття, прогулянки, екскурсії – все дарує дітям здоров’я, позитивні емоції та незабутні враження.",
    image: tabir.src,
  },
  {
    id: 5,
    title: "Декада педмайстерності",
    description:
      "Досвід кожного – надбання всіх!» – саме під таким гаслом у ліцеї №10 “Тріумф” відбулись методичні заходи в рамках декади педмайстерності. Педагоги презентували авторські досягнення, ділились практичним досвідом під час проведення навчальних занять та майстер-класів.",
    image: dekada.src,
  },
];

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-20 px-4 sm:px-10 bg-[#F9F9F9] flex flex-col items-center">
      <h2 className="text-4xl sm:text-[50px] font-extrabold text-[#1C1C1C] mb-12 text-center">
        Нещодавні події нашого ліцею
      </h2>

      <div className="relative w-full max-w-[1200px] flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-[-50px] z-20 flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black bg-white shadow-lg hover:bg-gray-100 transition text-black text-xl sm:text-2xl"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-[-50px] z-20 flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black bg-white shadow-lg hover:bg-gray-100 transition text-black text-xl sm:text-2xl"
        >
          &#10095;
        </button>

        <div className="overflow-x-auto w-full scrollbar-hide">
          <div className="flex gap-4 sm:gap-4 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 416}px)` }}>
            {newsData.map((news, index) => {
              const isCenter = index === current;
              const opacity = isCenter ? 1 : 0.5;

              return (
                <div
                  key={news.id}
                  className="flex-shrink-0 w-[300px] sm:w-[400px] h-[350px] sm:h-[450px] relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ opacity }}
                  onClick={() => setSelectedNews(news)}
                >
                  <Image
                    src={news.image}
                    alt={news.title}
                    width={400}
                    height={450}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 sm:p-4">
                    <h3 className="text-white font-semibold text-sm sm:text-lg text-center">{news.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedNews && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedNews(null); }}
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-black"
              onClick={() => setSelectedNews(null)}
            >
              &times;
            </button>
            <Image
              src={selectedNews.image}
              alt={selectedNews.title}
              width={800}
              height={500}
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{selectedNews.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{selectedNews.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
