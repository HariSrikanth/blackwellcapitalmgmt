"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionLink } from "./TransitionLink";

const navItems = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Insights", href: "https://redfund.substack.com/", external: true },
  { label: "Careers", href: "mailto:hari@blackwell.fund?subject=Career%20Inquiry%20-%20Blackwell%20Capital%20Management&body=Instructions%3A%20Please%20complete%20the%20bracketed%20sections%20in%20this%20email%2C%20attach%20a%20copy%20of%20your%20resume%2C%20and%20send%20this%20email%20for%20consideration.%20While%20we%20do%20not%20reply%20to%20all%20applications%2C%20a%20member%20of%20our%20team%20will%20read%20each%20one%2C%20so%20please%20be%20sure%20to%20accurately%20represent%20your%20interest%20and%20background.%0A%0A---%0A%0AHi%20Hari%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20Blackwell%20Capital%20Management.%20%5B1%20Sentence%20Introduction%5D.%20%5BWhy%20you%20want%20to%20work%20here%5D.%0A%0AI%E2%80%99ve%20attached%20a%20copy%20of%20my%20resume%20for%20your%20consideration%E2%80%94look%20forward%20to%20hearing%20back%20soon!%0A%0ABest%2C%0A%5BYOUR%20NAME%5D", external: true },
];

interface HeaderProps {
  showHomeLink?: boolean;
}

export function Header({ showHomeLink = true }: HeaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  if (isMobile) {
    return (
      <>
        <header 
          className="w-full flex items-center justify-between"
          style={{ 
            height: "60px", 
            fontFamily: "Judson, serif", 
            flexShrink: 0,
            padding: "0 20px",
            position: "relative",
            zIndex: 100,
          }}
        >
          {/* Logo */}
          {showHomeLink ? (
            <TransitionLink 
              href="/" 
              className="flex items-center hover:opacity-60 transition-opacity duration-200" 
              style={{ textDecoration: 'none' }}
            >
              <span 
                style={{ 
                  color: "#000000", 
                  fontFamily: "Judson, serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Blackwell Capital Management
              </span>
            </TransitionLink>
          ) : (
            <span 
              style={{ 
                color: "#000000", 
                fontFamily: "Judson, serif",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Blackwell Capital Management
            </span>
          )}

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center"
            style={{ 
              width: "32px", 
              height: "32px", 
              background: "transparent", 
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ width: "24px", height: "2px", backgroundColor: "#000", display: "block", marginBottom: "4px" }}
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: "24px", height: "2px", backgroundColor: "#000", display: "block", marginBottom: "4px" }}
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ width: "24px", height: "2px", backgroundColor: "#000", display: "block" }}
            />
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              style={{
                position: "fixed",
                top: "60px",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "#FFFFFF",
                zIndex: 99,
                display: "flex",
                flexDirection: "column",
                padding: "40px 30px",
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={itemVariants}
                  style={{ marginBottom: "30px" }}
                >
                  {'external' in item && item.external ? (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : "_blank"}
                      rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ 
                        color: "#000000",
                        fontFamily: "Judson, serif",
                        fontSize: "28px",
                        fontWeight: 400,
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <TransitionLink 
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ 
                        color: "#000000",
                        fontFamily: "Judson, serif",
                        fontSize: "28px",
                        fontWeight: 400,
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {item.label}
                    </TransitionLink>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Header
  return (
    <header className="w-full flex items-center justify-between" style={{ height: "80px", fontFamily: "Judson, serif", flexShrink: 0 }}>
      {/* Logo with arrow pointing LEFT and line extending to left edge */}
      {showHomeLink ? (
        <TransitionLink href="/" className="flex items-center h-full hover:opacity-60 transition-opacity duration-200" style={{ textDecoration: 'none' }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#000000" }} />
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
        </TransitionLink>
      ) : (
        <div className="flex items-center h-full">
          <div style={{ width: "40px", height: "1px", backgroundColor: "#000000" }} />
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
      )}

      {/* Navigation - matching Figma spacing */}
      <nav className="flex items-center h-full" style={{ marginRight: "40px" }}>
        {navItems.map((item) => (
          <div key={item.href} className="flex items-center h-full">
            {/* Vertical bar */}
            <div style={{ width: "1px", height: "20px", backgroundColor: "#000000" }} />
            {'external' in item && item.external ? (
              <a 
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : "_blank"}
                rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
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
  );
}

