"use client";
import { motion, type Easing } from "framer-motion";
import { useState, useEffect } from "react";
import { TypingAnimation } from "~/components/magicui/typing-animation";
import { Header } from "~/components/Header";

export default function WhatWeDoPage() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1200) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  // Mobile layout
  if (screenSize === 'mobile') {
    return (
      <div style={{
        background: '#FFFFFF',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "Judson, serif",
      }}>
        <Header />

        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '30px 20px',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {/* Title */}
            <h1 style={{ 
              fontSize: 40, 
              fontWeight: 400, 
              color: '#000000', 
              marginBottom: 25,
              fontFamily: "Judson, serif",
              letterSpacing: '-0.01em'
            }}>
              What We Do
            </h1>

            {/* Main Description */}
            <p style={{ 
              fontSize: 18, 
              lineHeight: '1.6', 
              color: '#000000',
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              marginBottom: 20,
            }}>
              We are a high-conviction investment firm operating across public equities, long/short strategies, and decentralized finance. Our market-neutral approach is designed to deliver consistent, risk-adjusted returns irrespective of market direction.
            </p>

            <p style={{ 
              fontSize: 16, 
              lineHeight: '1.6', 
              color: '#444444',
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              marginBottom: 25,
            }}>
              Through rigorous bottom-up modeling and a technology-enabled research process, we identify fundamentally sound businesses positioned for sustained growth before broader market recognition.
            </p>

            <p style={{ 
              fontSize: 14, 
              lineHeight: '1.5', 
              color: '#666666',
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              marginBottom: 40,
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

            {/* Mobile Animated Card */}
            <motion.div
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              style={{
                background: '#F5F5F5',
                border: '1px solid black',
                padding: '25px',
                width: '100%',
              }}
            >
              <p style={{ fontSize: 18, fontWeight: 'bold', marginBottom: '12px', color: 'black', fontFamily: "'Helvetica Neue', sans-serif" }}>THESIS</p>
              <p style={{ fontSize: 12, color: 'black', marginBottom: '25px', fontFamily: "'Helvetica Neue', sans-serif" }}>invest with insight & confidence</p>
              
              {/* Mobile Animated Text */}
              <div style={{ color: 'black', minHeight: '100px', fontFamily: "'Helvetica Neue', sans-serif" }}>
                <TypingAnimation
                  as="p"
                  duration={100}
                  delay={1000}
                  className="font-medium leading-tight tracking-normal"
                  style={{ fontSize: 32, fontWeight: 500, marginBottom: '8px' }}
                >
                  be different
                </TypingAnimation>
                <TypingAnimation
                  as="p"
                  duration={100}
                  delay={2000}
                  className="font-medium leading-tight tracking-normal"
                  style={{ fontSize: 32, fontWeight: 500 }}
                >
                  and be correct
                </TypingAnimation>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Tablet layout (768-1200px)
  if (screenSize === 'tablet') {
    return (
      <div style={{
        background: '#FFFFFF',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "Judson, serif",
        overflow: 'hidden',
      }}>
        <Header />

        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '40px',
        }}>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{
              maxWidth: '500px',
              marginBottom: '40px',
            }}
          >
            <h1 style={{ 
              fontSize: 48, 
              fontWeight: 400, 
              color: '#000000', 
              marginBottom: 25,
              fontFamily: "Judson, serif",
              letterSpacing: '-0.01em'
            }}>
              What We Do
            </h1>
            <p style={{ 
              fontSize: 18, 
              lineHeight: '1.7', 
              color: '#000000',
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              marginBottom: 15,
            }}>
              We are a high-conviction investment firm operating across public equities, long/short strategies, and decentralized finance. Our market-neutral approach is designed to deliver consistent, risk-adjusted returns irrespective of market direction.
            </p>
            <p style={{ 
              fontSize: 16, 
              lineHeight: '1.7', 
              color: '#444444',
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              marginBottom: 20,
            }}>
              Through rigorous bottom-up modeling and a technology-enabled research process, we identify fundamentally sound businesses positioned for sustained growth before broader market recognition.
            </p>
            <p style={{ 
              fontSize: 14, 
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

          {/* Tablet Animated Card - smaller version */}
          <motion.div
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: '#F5F5F5',
              border: '1px solid black',
              padding: '30px',
              width: '100%',
              maxWidth: '600px',
            }}
          >
            <p style={{ fontSize: 18, fontWeight: 'bold', marginBottom: '12px', color: 'black', fontFamily: "'Helvetica Neue', sans-serif" }}>THESIS</p>
            <p style={{ fontSize: 12, color: 'black', marginBottom: '25px', fontFamily: "'Helvetica Neue', sans-serif" }}>invest with insight & confidence</p>
            
            <div style={{ color: 'black', minHeight: '120px', fontFamily: "'Helvetica Neue', sans-serif" }}>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1000}
                className="font-medium leading-tight tracking-normal"
                style={{ fontSize: 48, fontWeight: 500, marginBottom: '10px' }}
              >
                be different
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={2000}
                className="font-medium leading-tight tracking-normal"
                style={{ fontSize: 48, fontWeight: 500 }}
              >
                and be correct
              </TypingAnimation>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  // Desktop layout (1200px+)
  return (
    <div style={{
      background: '#FFFFFF',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <Header />

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
            width: 420,
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
            fontSize: 22, 
            lineHeight: '1.7', 
            color: '#000000',
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            marginBottom: 20,
          }}>
            We are a high-conviction investment firm operating across public equities, long/short strategies, and decentralized finance. Our market-neutral approach is designed to deliver consistent, risk-adjusted returns irrespective of market direction.
          </p>
          <p style={{ 
            fontSize: 17, 
            lineHeight: '1.7', 
            color: '#444444',
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            marginBottom: 30,
          }}>
            Through rigorous bottom-up modeling and a technology-enabled research process, we identify fundamentally sound businesses positioned for sustained growth before broader market recognition.
          </p>
          <p style={{ 
            fontSize: 15, 
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
            right: 60,
            bottom: 0,
            width: 650,
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
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 300, top: -14 + (2 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(01)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 100, top: 14 + (3 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(02)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 440, top: -14 + (6 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(03)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 200, top: 14 + (7 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(04)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 580, top: 14 + (9 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(05)</motion.p>

            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 32, top: 4 + (4 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>think</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 4 + (8 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>speed</motion.p>
            
            <div style={{ position: 'absolute', top: 0, left: 0, fontSize: largeFontSize, fontWeight: '500', width: '100%', height: '100%' }}>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1000}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 480, top: 4 + (2 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                be
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1400}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 130, top: 4 + (4 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                different
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={2500}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 30, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                and
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={3000}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 480, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                be
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={3400}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 230, top: 4 + (8 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
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
