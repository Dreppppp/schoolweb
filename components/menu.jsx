"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Navbar({ scrollToAbout, scrollToNews, scrollToLocation }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = [
    { title: "Про нас", action: () => { scrollToAbout(); setMenuOpen(false); } },
    { title: "Новини", action: () => { scrollToNews(); setMenuOpen(false); } },
    { title: "Контакти", action: () => { setContactOpen(true); setMenuOpen(false); } },
    { title: "Розташування", action: () => { scrollToLocation(); setMenuOpen(false); } },
  ];

  return (
    <>
      <header className={`w-full transition-colors duration-300 ${scrolled ? "bg-white fixed top-0 left-0 shadow-lg z-50" : "bg-transparent relative"}`}>
        <nav className="mx-auto px-6 py-3 flex items-center justify-between font-sans w-full h-[80px]">
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px]">
              <Image src={Logo} alt="Logo" width={70} height={70} />
            </div>
            <h1 className={`text-[25px] font-semibold transition-colors duration-300 ${scrolled || menuOpen ? "text-black" : "text-white"}`}>
              Ліцей №10 "Тріумф"
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-6 font-normal text-[20px]">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className={`cursor-pointer transition-colors duration-300 ${scrolled || menuOpen ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"}`}
                onClick={item.action}
              >
                {item.title}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:lyceum10berd@gmail.com">
              <button className={`text-[20px] font-bold w-fit px-6 h-[43px] transition-colors duration-300 ${scrolled || menuOpen ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"}`}>Пошта</button>
            </a>
            <a href="tel:40976">
              <button className={`text-[20px] font-bold w-fit px-6 h-[43px] rounded-[96px] bg-[#FFBC51] transition-colors duration-300 ${scrolled || menuOpen ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"}`}>Телефон</button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className={`text-3xl focus:outline-none ${scrolled || menuOpen ? "text-black" : "text-white"}`}>&#9776;</button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-[150]" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col p-6 gap-6 z-[151]" onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, i) => (
              <button key={i} className="text-black text-[20px] font-semibold hover:text-blue-500 transition" onClick={item.action}>
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {contactOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 text-black" onClick={() => setContactOpen(false)}>
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-black" onClick={() => setContactOpen(false)}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Контакти</h2>
            <p className="mb-2"><strong>Телефон:</strong> (04143) 40949; 40976</p>
            <p className="mb-4"><strong>Пошта:</strong> lyceum10berd@gmail.com</p>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/groups/992205028996003/?rdid=YOw7QzHLwZmAgtdr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FbebiidWhRALMK6fF%2F" target="_blank" className="text-blue-600 text-2xl"><FaFacebookF /></a>
              <a href="https://t.me/Lyceym10Triumf" target="_blank" className="text-blue-400 text-2xl"><FaTelegramPlane /></a>
              <a href="https://instagram.com/" target="_blank" className="text-pink-500 text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
