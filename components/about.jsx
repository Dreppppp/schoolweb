"use client";
import School from "../assets/school.png";
import Image from "next/image";

export default function AboutSchool() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start px-6 md:px-20 lg:px-[100px] py-10 md:py-20 bg-[#F9F9F9] gap-8 md:gap-10">
      <div className="w-full lg:w-[600px] flex flex-col gap-4 md:gap-6 font-sans">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1C1C1C] tracking-wide">
          Про наш ліцей
        </h1>
        <p className="text-sm md:text-[18px] text-[#333333] leading-relaxed">
          Наш ліцей <span className="text-[#333333] font-semibold">постійно розвивається</span>, прагнучи до інновацій та творчого пошуку. Учні беруть активну участь у проектах екологічного, культурного та соціального напрямків, розвиваючи свої здібності та соціальну відповідальність.
        </p>
        <p className="text-sm md:text-[18px] text-[#333333] leading-relaxed">
          Тісна співпраця з <span className="text-[#333333] font-semibold">ЖДУ ім. І. Франка</span>, органами влади та громадськістю дозволяє покращувати навчально-виховний процес. Використання сучасних методик та інформаційних технологій робить освітній процес змістовним та сучасним.
        </p>
        <p className="text-sm md:text-[18px] text-[#333333] leading-relaxed">
          Щороку вихованці ліцею здобувають перемоги на конкурсах, олімпіадах та турнірах, демонструючи високий рівень знань, творчості та активної громадянської позиції.
        </p>
        <div className="flex gap-2 md:gap-3 mt-2 md:mt-4">
          <span className="w-6 h-1 md:w-8 md:h-1 bg-[#5C0E62] rounded-full"></span>
          <span className="w-3 h-1 md:w-4 md:h-1 bg-[#00B5D0] rounded-full"></span>
          <span className="w-1.5 h-1 md:w-2 md:h-1 bg-[#FFBC51] rounded-full"></span>
        </div>
      </div>
      <div className="w-full lg:w-[800px] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
        <Image
          src={School}
          alt="School Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
