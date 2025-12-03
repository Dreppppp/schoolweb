"use client";

import "./globals.css";
import { useRef } from "react";
import Navbar from "@/components/menu";
import Header from "@/components/header";
import AboutSchool from "@/components/about";
import RecentEvents from "@/components/recentevents";
import SchoolLocation from "@/components/location";
import Footer from "@/components/footer";

export default function Home() {
  const aboutRef = useRef(null);
  const newsRef = useRef(null);
  const locationRef = useRef(null);

  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToNews = () => newsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToLocation = () => locationRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
     <div className="hidden">
        <Navbar 
        />
     </div>
      <Header
          scrollToAbout={scrollToAbout} 
        scrollToNews={scrollToNews} 
        scrollToLocation={scrollToLocation}  />
      <div ref={aboutRef}>
        <AboutSchool />
      </div>
      <div ref={newsRef}>
        <RecentEvents />
      </div>
      <div ref={locationRef}>
        <SchoolLocation />
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}
