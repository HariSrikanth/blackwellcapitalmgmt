"use client";
import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TypingAnimation } from "~/components/magicui/typing-animation";

export default function ThesisPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sheetVariants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as Easing } },
  };

  const imageVariants = {
    hidden: { x: '100%', y: '50%' },
    visible: { x: 0, y: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] as Easing, delay: 0.2 } },
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const paragraphFadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 2.6 } },
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

  const contentContainerVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] as Easing }
    },
  };

  const lineHeight = 75;
  const bottomPadding = -15;
  const largeFontSize = 125;
  const mediumFontSize = 20;
  const smallFontSize = 15;

  if (isMobile) {
    return (
      <div style={{
        background: '#000000',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Helvetica Neue', sans-serif",
        padding: '20px',
        boxSizing: 'border-box'
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
          {/* Mobile Back to Home */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{ alignSelf: 'flex-end', marginBottom: '20px' }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <p style={{ fontSize: 16, color: '#FFFFFF' }}>back to home</p>
            </Link>
          </motion.div>

          {/* Mobile Title */}
          <motion.div
            variants={sheetVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: 'white',
              padding: '30px',
              marginBottom: '30px',
              width: '100%'
            }}
          >
            <p style={{ fontSize: 24, fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>THESIS</p>
            <p style={{ fontSize: 14, color: 'black', marginBottom: '30px' }}>invest with insight & confidence</p>
            
            {/* Mobile Animated Text */}
            <div style={{ color: 'black', marginBottom: '30px', minHeight: '92px' }}>
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
              style={{ fontSize: 14, lineHeight: '1.4', color: 'black', marginBottom: '20px' }}
            >
              <p>&quot;We invest in traditional and decentralized asset classes, leveraging cutting-edge research and academic partnerships to identify emerging opportunities at the intersection of technology and established sectors.&quot;</p>
            </motion.div>

            {/* Mobile BWCM */}
            <motion.div
              variants={textFadeInUp}
              initial="hidden"
              animate="visible"
              style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              <div style={{ fontSize: 40, fontFamily: "'Impact', sans-serif", color: 'black' }}>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                  <span>B</span>
                  <span>W</span>
                </div>
                <div style={{ display: 'flex', gap: '5px', marginTop: '-5px' }}>
                  <span>C</span>
                  <span>M</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mobile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
              width: '250px',
              height: '300px',
              position: 'relative'
            }}
          >
            <Image src="/images/thesis-image.png" alt="Thesis page image" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#000000',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      fontFamily: "'Helvetica Neue', sans-serif",
      overflow: 'hidden',
      paddingRight: '150px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'relative',
        width: 1280,
        height: 1024,
        transform: 'scale(0.8)',
        transformOrigin: 'bottom'
      }}>
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeIn}
            style={{ position: 'absolute', left: 894, top: 80, zIndex: 10 }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <p style={{ fontSize: 20, color: '#FFFFFF' }}>back to home</p>
            </Link>
          </motion.div>

          <motion.div
            variants={imageVariants}
            style={{
              position: 'absolute',
              left: 1127,
              top: 423,
              width: 459,
              height: 619,
            }}
          >
            <Image src="/images/thesis-image.png" alt="Thesis page image" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={sheetVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            left: 224,
            top: 116,
            width: 804,
            height: 908,
          }}
        >
          <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'white' }}></div>
          <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', left: 22.5, top: 0, width: 1, height: '100%', background: 'black' }}></div>
            <div style={{ position: 'absolute', right: 22.5, top: 0, width: 1, height: '99.67%', background: 'black' }}></div>
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
          
          <div style={{ position: 'absolute', top: 0, left: 0, color: 'black' }}>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 26, fontSize: mediumFontSize }}>THESIS</motion.p>
            <motion.div initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 4 + lineHeight + 4, fontSize: 12, lineHeight: '1.2' }}>
              <p>invest with</p>
              <p>insight & confidence</p>
            </motion.div>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 338, top: -14 + (2 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(01)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 126, top: 14 + (3 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(02)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 573, top: -14 + (6 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(03)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 322, top: 14 + (7 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(04)</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 732, top: 14 + (9 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(05)</motion.p>

            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 32, top: 4 + (4 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>think</motion.p>
            <motion.p initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 27, top: 4 + (8 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>speed</motion.p>
            
            <div style={{ position: 'absolute', top: 0, left: 0, fontSize: largeFontSize, fontWeight: '500', width: '100%', height: '100%' }}>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1000}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 619, top: 4 + (2 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                be
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={1400}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 175, top: 4 + (4 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                different
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={2500}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 46, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                and
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={3000}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 619, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                be
              </TypingAnimation>
              <TypingAnimation
                as="p"
                duration={100}
                delay={3400}
                className="font-medium leading-none tracking-normal"
                style={{ position: 'absolute', left: 355, top: 4 + (8 * lineHeight) - largeFontSize - bottomPadding, fontSize: largeFontSize, fontWeight: 500 }}
              >
                correct
              </TypingAnimation>
            </div>

            <motion.div
              style={{ position: 'absolute', left: 37, top: 9 * lineHeight + 10, width: 377, fontSize: 18, lineHeight: '1.4' }}
              variants={textFadeInUp}
              initial="hidden"
              animate="visible"
            >
                <p>&quot;We invest in traditional and decentralized asset classes, leveraging cutting-edge research and academic partnerships to identify emerging opportunities at the intersection of technology and established sectors.&quot;</p>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={textFadeInUp} style={{ position: 'absolute', left: 650, top: 700, fontSize: 100, fontFamily: "'Impact', sans-serif" }}>
                <p style={{ position: 'absolute', left: -18.6, top: 0 }}>B</p>
                <p style={{ position: 'absolute', left: 40, top: 0 }}>W</p>
                <p style={{ position: 'absolute', left: -18.6, top: 90 }}>C</p>
                <p style={{ position: 'absolute', left: 40, top: 90 }}>M</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 