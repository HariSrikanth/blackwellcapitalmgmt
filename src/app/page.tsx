"use client";

import Image from "next/image";
import { TransitionLink } from "~/components/TransitionLink";

export default function HomePage() {
  const navItems = [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: "#FFFFFF", fontFamily: "Judson, serif" }}>
      {/* Header - matching Figma spacing */}
      <header className="w-full flex items-center justify-between" style={{ height: "80px" }}>
        {/* Logo with arrow pointing LEFT and line extending to left edge */}
        <div className="flex items-center h-full">
          {/* Line extending to left edge */}
          <div style={{ width: "40px", height: "1px", backgroundColor: "#000000" }} />
          {/* Arrow pointing LEFT */}
          <div 
            style={{ 
              width: 0, 
              height: 0, 
              borderTop: "4px solid transparent",
              borderBottom: "4px solid transparent",
              borderRight: "6px solid #000000",
            }} 
          />
          <span 
            style={{ 
              marginLeft: "12px",
              color: "#000000", 
              fontFamily: "Judson, serif",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "normal",
              whiteSpace: "nowrap",
            }}
          >
            Blackwell Capital Management
          </span>
        </div>

        {/* Navigation - matching Figma spacing */}
        <nav className="flex items-center h-full" style={{ marginRight: "40px" }}>
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center h-full">
              {/* Vertical bar */}
              <div style={{ width: "1px", height: "20px", backgroundColor: "#000000" }} />
              <TransitionLink 
                href={item.href}
                className="hover:opacity-60 transition-opacity duration-200"
                style={{ 
                  padding: "0 24px",
                  color: "#000000",
                  fontFamily: "Judson, serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </TransitionLink>
            </div>
          ))}
          {/* Final vertical bar */}
          <div style={{ width: "1px", height: "20px", backgroundColor: "#000000" }} />
        </nav>
      </header>

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
