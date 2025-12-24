"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "~/components/Header";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: "#FFFFFF", fontFamily: "Judson, serif" }}>
        <Header showHomeLink={false} />

        {/* Mobile Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Hero Image */}
          <div className="relative w-full" style={{ height: "60vh" }}>
            <Image
              src="/images/nycSky.png"
              alt="New York City skyline at golden hour"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Black Bar with notch */}
          <div className="relative" style={{ height: "80px", backgroundColor: "#000000" }}>
            {/* White notch line */}
            <div 
              style={{ 
                position: "absolute",
                top: "50%",
                left: 0,
                right: "20px",
                height: "2px",
                backgroundColor: "#FFFFFF",
                transform: "translateY(-50%)"
              }} 
            />
            {/* Arrow pointing right */}
            <div 
              style={{ 
                position: "absolute",
                top: "50%",
                right: "20px",
                transform: "translateY(-50%)",
                width: 0, 
                height: 0, 
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderLeft: "10px solid #FFFFFF",
              }} 
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full text-center" style={{ padding: "20px 0", backgroundColor: "#000000" }}>
          <p 
            style={{ 
              color: "#FFFFFF",
              fontFamily: "Judson, serif",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Copyright @ Blackwell Capital Management LLC, 2026
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: "#FFFFFF", fontFamily: "Judson, serif" }}>
      <Header showHomeLink={false} />

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative w-full h-[calc(100vh-120px)] flex">
          {/* Hero Image */}
          <div className="relative flex-1 overflow-hidden">
            <Image
              src="/images/nycSky.png"
              alt="New York City skyline at golden hour"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* White gap */}
          <div style={{ width: "16px", backgroundColor: "#FFFFFF" }} />

          {/* Black rectangles with notch */}
          <div className="relative" style={{ width: "180px" }}>
            {/* Top black rectangle with bottom-left notch */}
            <div 
              className="absolute top-0 right-0 left-0 bg-black"
              style={{ 
                height: "calc(50% - 1px)",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 14px 100%, 0 calc(100% - 14px))"
              }}
            />
            
            {/* Bottom black rectangle with top-left notch */}
            <div 
              className="absolute bottom-0 right-0 left-0 bg-black"
              style={{ 
                height: "calc(50% - 1px)",
                clipPath: "polygon(0 14px, 14px 0, 100% 0, 100% 100%, 0 100%)"
              }}
            />
            
            {/* White line from notch to right edge */}
            <div 
              className="absolute right-0 bg-white"
              style={{ 
                top: "50%", 
                transform: "translateY(-50%)",
                left: "14px",
                height: "2px"
              }}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center" style={{ padding: "16px 0" }}>
        <p 
          style={{ 
            color: "#000000",
            fontFamily: "Judson, serif",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          Copyright @ Blackwell Capital Management LLC, 2026
        </p>
      </footer>
    </div>
  );
}
