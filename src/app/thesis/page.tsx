"use client";
import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ThesisPage() {
  const sheetVariants = {
    hidden: { y: '100%' },
    visible: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as Easing } },
  };

  const imageVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as Easing, delay: 0.2 } },
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const lineHeight = 75;
  const bottomPadding = 17;
  const largeFontSize = 125;
  const mediumFontSize = 20;
  const smallFontSize = 15;

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
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          style={{ position: 'absolute', left: 894, top: 80, zIndex: 10 }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <p style={{ fontSize: 20, color: '#FFFFFF' }}>back to home</p>
          </Link>
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
            <p style={{ position: 'absolute', left: 27, top: 26, fontSize: mediumFontSize }}>THESIS</p>
            <div style={{ position: 'absolute', left: 27, top: 4 + lineHeight + 4, fontSize: 12, lineHeight: '1.2' }}>
              <p>invest with</p>
              <p>insight & confidence</p>
            </div>
            <p style={{ position: 'absolute', left: 338, top: -14 + (2 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(01)</p>
            <p style={{ position: 'absolute', left: 126, top: 14 + (3 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(02)</p>
            <p style={{ position: 'absolute', left: 573, top: -14 + (6 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(03)</p>
            <p style={{ position: 'absolute', left: 322, top: 14 + (7 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(04)</p>
            <p style={{ position: 'absolute', left: 732, top: 14 + (9 * lineHeight) - (mediumFontSize / 2), fontSize: mediumFontSize }}>(05)</p>

            <p style={{ position: 'absolute', left: 32, top: 4 + (4 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>think</p>
            <p style={{ position: 'absolute', left: 27, top: 4 + (8 * lineHeight) - smallFontSize - bottomPadding, fontSize: smallFontSize }}>speed</p>
            
            <div style={{ position: 'absolute', top: 0, left: 0, fontSize: largeFontSize, fontWeight: '500' }}>
                <p style={{ position: 'absolute', left: 619, top: 4 + (2 * lineHeight) - largeFontSize - bottomPadding }}>be</p>
                <p style={{ position: 'absolute', left: 46, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding }}>and</p>
                <p style={{ position: 'absolute', left: 619, top: 4 + (6 * lineHeight) - largeFontSize - bottomPadding }}>be</p>
                <p style={{ position: 'absolute', left: 355, top: 4 + (8 * lineHeight) - largeFontSize - bottomPadding }}>correct</p>
                <p style={{ position: 'absolute', left: 175, top: 4 + (4 * lineHeight) - largeFontSize - bottomPadding }}>different</p>
            </div>

            <div style={{ position: 'absolute', left: 37, top: 9 * lineHeight + 10, width: 377, fontSize: 18, lineHeight: '1.4' }}>
                <p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”</p>
            </div>

            <div style={{ position: 'absolute', left: 650, top: 700, fontSize: 100, fontFamily: "'Impact', sans-serif" }}>
                <p style={{ position: 'absolute', left: -18.6, top: 0 }}>B</p>
                <p style={{ position: 'absolute', left: 40, top: 0 }}>W</p>
                <p style={{ position: 'absolute', left: -18.6, top: 90 }}>C</p>
                <p style={{ position: 'absolute', left: 40, top: 90 }}>M</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
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
      </div>
    </div>
  );
} 