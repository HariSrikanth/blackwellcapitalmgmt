"use client";
import { motion, type Easing } from "framer-motion";
import { useState, useEffect } from "react";
import { TypingAnimation } from "~/components/magicui/typing-animation";
import { TransitionLink } from "~/components/TransitionLink";

export default function WhatWeDoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const navItems = [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Insights", href: "https://redfund.substack.com/", external: true },
    { label: "Careers", href: "mailto:hari@blackwell.fund?subject=Career%20Inquiry%20-%20Blackwell%20Capital%20Management&body=Instructions%3A%20Please%20complete%20the%20bracketed%20sections%20in%20this%20email%2C%20attach%20a%20copy%20of%20your%20resume%2C%20and%20send%20this%20email%20for%20consideration.%20While%20we%20do%20not%20reply%20to%20all%20applications%2C%20a%20member%20of%20our%20team%20will%20read%20each%20one%2C%20so%20please%20be%20sure%20to%20accurately%20represent%20your%20interest%20and%20background.%0A%0A---%0A%0AHi%20Hari%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20Blackwell%20Capital%20Management.%20%5B1%20Sentence%20Introduction%5D.%20%5BWhy%20you%20want%20to%20work%20here%5D.%0A%0AI%E2%80%99ve%20attached%20a%20copy%20of%20my%20resume%20for%20your%20consideration%E2%80%94look%20forward%20to%20hearing%20back%20soon!%0A%0ABest%2C%0A%5BYOUR%20NAME%5D", external: true },
  ];

  const sheetVariants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as Easing } },
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const textFadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 4.2,
        duration: 1,
        ease: 'easeOut' as Easing
      }
    }
  };

  const lineHeight = 75;
  const bottomPadding = -15;
  const largeFontSize = 125;
  const mediumFontSize = 20;
  const smallFontSize = 15;

  if (isMobile) {
    return (
      <div style={{
        background: '#FFFFFF',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "Judson, serif",
      }}>
        {/* Mobile Header */}
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <TransitionLink href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: 20, color: '#000000', fontFamily: "Judson, serif" }}>
              Blackwell Capital Management
            </span>
          </TransitionLink>
        </header>

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '350px',
              width: '100%'
            }}
          >
            {/* Mobile Title */}
            <motion.div
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              style={{
                background: '#F5F5F5',
                border: '1px solid black',
                padding: '30px',
                marginBottom: '30px',
                width: '100%'
              }}
            >
              <p style={{ fontSize: 24, fontWeight: 'bold', marginBottom: '20px', color: 'black', fontFamily: "'Helvetica Neue', sans-serif" }}>WHAT WE DO</p>
              <p style={{ fontSize: 14, color: 'black', marginBottom: '30px', fontFamily: "'Helvetica Neue', sans-serif" }}>invest with insight & confidence</p>
              
              {/* Mobile Animated Text */}
              <div style={{ color: 'black', marginBottom: '30px', minHeight: '92px', fontFamily: "'Helvetica Neue', sans-serif" }}>
                <TypingAnimation
                  as="p"
                  duration={100}
                  delay={1000}
                  className="font-medium leading-tight tracking-normal"
                  style={{ fontSize: 36, fontWeight: 500, marginBottom: '10px' }}
                >
                  be different
                </TypingAnimation>
                <TypingAnimation
                  as="p"
                  duration={100}
                  delay={2000}
                  className="font-medium leading-tight tracking-normal"
                  style={{ fontSize: 36, fontWeight: 500, marginBottom: '10px' }}
                >
                  and be correct
                </TypingAnimation>
              </div>

              {/* Mobile Quote */}
              <motion.div
                variants={textFadeInUp}
                initial="hidden"
                animate="visible"
                style={{ fontSize: 14, lineHeight: '1.4', color: 'black', fontFamily: "Judson, serif" }}
              >
                <p>We invest in traditional and decentralized asset classes, leveraging cutting-edge research and academic partnerships to identify emerging opportunities at the intersection of technology and established sectors.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#FFFFFF',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header - same as landing page */}
      <header className="w-full flex items-center justify-between" style={{ height: "80px", fontFamily: "Judson, serif", flexShrink: 0 }}>
        {/* Logo with arrow pointing LEFT and line extending to left edge */}
        <TransitionLink href="/" className="flex items-center h-full hover:opacity-60 transition-opacity duration-200" style={{ textDecoration: 'none' }}>
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
        </TransitionLink>

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

      {/* Main Content - perfectly bottom aligned */}
      <main style={{ 
        flex: 1, 
        display: 'flex', 
        position: 'relative',
      }}>
        {/* Left side content - Title and Paragraph - positioned higher */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            left: 80,
            top: 80,
            width: 450,
            zIndex: 10,
          }}
        >
          <h1 style={{ 
            fontSize: 64, 
            fontWeight: 400, 
            color: '#000000', 
            marginBottom: 35,
            fontFamily: "Judson, serif",
            letterSpacing: '-0.01em'
          }}>
            What We Do
          </h1>
          <p style={{ 
            fontSize: 24, 
            lineHeight: '1.7', 
            color: '#000000',
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            marginBottom: 20,
          }}>
            We are a high-conviction investment firm operating across public equities, long/short strategies, and decentralized finance. Our market-neutral approach is designed to deliver consistent, risk-adjusted returns irrespective of market direction.
          </p>
          <p style={{ 
            fontSize: 18, 
            lineHeight: '1.7', 
            color: '#444444',
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            marginBottom: 30,
          }}>
            Through rigorous bottom-up modeling and a technology-enabled research process, we identify fundamentally sound businesses positioned for sustained growth before broader market recognition.
          </p>
          <p style={{ 
            fontSize: 16, 
            lineHeight: '1.6', 
            color: '#666666',
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
          }}>
            Interested investors may reach out to{' '}
            <a 
              href="mailto:hari@blackwell.fund" 
              style={{ 
                color: '#000000', 
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              hari@blackwell.fund
            </a>
          </p>
        </motion.div>

        {/* Animated sheet - positioned to the right, truly bottom aligned */}
        <motion.div
          variants={sheetVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            right: 100,
            bottom: 0,
            width: 700,
            height: 'calc(100vh - 80px)',
            maxHeight: 908,
          }}
        >
          <div style={{ position: 'absolute', width: '100%', height: '100%', background: '#F5F5F5', border: '1px solid black', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', left: 22.5, top: 0, width: 1, height: '100%', background: 'black' }}></div>
            <div style={{ position: 'absolute', right: 22.5, top: 0, width: 1, height: '100%', background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 2 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 3 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 4 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 5 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 6 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 7 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 8 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
            <div style={{ position: 'absolute', top: 4 + 9 * lineHeight, width: '100%', height: 1, background: 'black' }}></div>
          </div>
          
          <div style={{ position: 'absolute', top: 0, left: 0, color: 'black', fontFamily: "'Helvetica Neue', sans-serif" }}>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 26, fontSize: mediumFontSize }}>THESIS</motion.p>
            <motion.div initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 4 + lineHeight + 4, fontSize: 12, lineHeight: '1.2' }}>
              <p>invest with</p>
              <p>insight & confidence</p>
            </motion.div>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 338, top: -14 + (2 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(01)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 116, top: 14 + (3 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(02)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 480, top: -14 + (6 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(03)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 230, top: 14 + (7 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(04)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 630, top: 14 + (9 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(05)</motion.p>

            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 32, top: 4 + (4 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>think</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 4 + (8 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>speed</motion.p>
            
            <div style={{ position: 'absolute', top: 0, left: 0, fontSize: largeFontSize, fontWeight: '500', width: '100%', height: '100%' }}>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1000}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 520, top: 4 + (2 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                be
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1400}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 150, top: 4 + (4 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                different
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={2500}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 40, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                and
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={3000}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 520, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                be
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={3400}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 260, top: 4 + (8 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                correct
              </TypingAnimation>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
