"use client";

import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left text-[16px] font-semibold">
          Ліцей №10 "Тріумф" © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/groups/992205028996003/?rdid=YOw7QzHLwZmAgtdr&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FbebiidWhRALMK6fF%2F" target="_blank" className="hover:text-blue-500 transition text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://t.me/Lyceym10Triumf" target="_blank" className="hover:text-blue-400 transition text-2xl">
            <FaTelegramPlane />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
