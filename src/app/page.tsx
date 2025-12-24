"use client";

import Image from "next/image";
import { TransitionLink } from "~/components/TransitionLink";

export default function HomePage() {
  const navItems = [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Insights", href: "https://redfund.substack.com/", external: true },
    { label: "Careers", href: "mailto:hari@blackwell.fund?subject=Career%20Inquiry%20-%20Blackwell%20Capital%20Management&body=Instructions%3A%20Please%20complete%20the%20bracketed%20sections%20in%20this%20email%2C%20attach%20a%20copy%20of%20your%20resume%2C%20and%20send%20this%20email%20for%20consideration.%20While%20we%20do%20not%20reply%20to%20all%20applications%2C%20a%20member%20of%20our%20team%20will%20read%20each%20one%2C%20so%20please%20be%20sure%20to%20accurately%20represent%20your%20interest%20and%20background.%0A%0A---%0A%0AHi%20Hari%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20Blackwell%20Capital%20Management.%20%5B1%20Sentence%20Introduction%5D.%20%5BWhy%20you%20want%20to%20work%20here%5D.%0A%0AI%E2%80%99ve%20attached%20a%20copy%20of%20my%20resume%20for%20your%20consideration%E2%80%94look%20forward%20to%20hearing%20back%20soon!%0A%0ABest%2C%0A%5BYOUR%20NAME%5D", external: true },
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
          {navItems.map((item) => (
            <div key={item.href} className="flex items-center h-full">
              {/* Vertical bar */}
              <div style={{ width: "1px", height: "20px", backgroundColor: "#000000" }} />
              {'external' in item && item.external ? (
                <a 
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity duration-200"
                  style={{ 
                    padding: "0 24px",
                    color: "#000000",
                    fontFamily: "Judson, serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              ) : (
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
              )}
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
