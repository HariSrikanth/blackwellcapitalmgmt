"use client";

import { motion, type Easing } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "~/components/Header";

export default function WhoWeArePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as Easing } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  if (isMobile) {
    return (
      <div style={{
        background: '#FFFFFF',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Header />

        <main style={{ flex: 1, padding: '30px 20px' }}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ width: '100%' }}
          >
            <motion.h1 
              variants={fadeIn}
              style={{ fontSize: 40, fontWeight: 400, color: '#000000', marginBottom: 30, fontFamily: "Judson, serif" }}
            >
              Who We Are
            </motion.h1>

            <motion.p variants={fadeIn} style={{ fontSize: 16, lineHeight: '1.7', color: '#000000', fontFamily: "Inter, sans-serif", fontWeight: 400, marginBottom: 20 }}>
              Founded out of UC Berkeley, Blackwell Capital Management is built by a team of experts spanning traditional finance, decentralized markets, and frontier technology.
            </motion.p>

            <motion.p variants={fadeIn} style={{ fontSize: 16, lineHeight: '1.7', color: '#000000', fontFamily: "Inter, sans-serif", fontWeight: 400, marginBottom: 20 }}>
              Our team brings together financial professionals from top investment banks and equity research institutions, DeFi traders who have deployed capital in decentralized markets since their inception, and technology analysts with research contributions at OpenAI and Google DeepMind.
            </motion.p>

            <motion.p variants={fadeIn} style={{ fontSize: 16, lineHeight: '1.7', color: '#000000', fontFamily: "Inter, sans-serif", fontWeight: 400, marginBottom: 35 }}>
              Together, we leverage these insights to identify asymmetric opportunities and execute with conviction across public and decentralized markets.
            </motion.p>

            <motion.p variants={fadeIn} style={{ fontSize: 14, lineHeight: '1.5', color: '#666666', fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
              Interested investors may reach out to{' '}
              <a href="mailto:hari@blackwell.fund" style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                hari@blackwell.fund
              </a>
            </motion.p>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div style={{
      background: '#FFFFFF',
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <Header />

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '80px' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 800, width: '100%' }}
        >
          <motion.h1 
            variants={fadeIn}
            style={{ fontSize: 64, fontWeight: 400, color: '#000000', marginBottom: 50, fontFamily: "Judson, serif" }}
          >
            Who We Are
          </motion.h1>

          <motion.p variants={fadeIn} style={{ fontSize: 20, lineHeight: '1.8', color: '#000000', fontFamily: "Inter, sans-serif", fontWeight: 400, marginBottom: 25 }}>
            Founded out of UC Berkeley, Blackwell Capital Management is built by a team of experts spanning traditional finance, decentralized markets, and frontier technology.
          </motion.p>

          <motion.p variants={fadeIn} style={{ fontSize: 20, lineHeight: '1.8', color: '#000000', fontFamily: "Inter, sans-serif", fontWeight: 400, marginBottom: 25 }}>
            Our team brings together financial professionals from top investment banks and equity research institutions, DeFi traders who have deployed capital in decentralized markets since their inception, and technology analysts with research contributions at OpenAI and Google DeepMind.
          </motion.p>

          <motion.p variants={fadeIn} style={{ fontSize: 20, lineHeight: '1.8', color: '#000000', fontFamily: "Inter, sans-serif", fontWeight: 400, marginBottom: 50 }}>
            Together, we leverage these insights to identify asymmetric opportunities and execute with conviction across public and decentralized markets.
          </motion.p>

          <motion.p variants={fadeIn} style={{ fontSize: 16, lineHeight: '1.6', color: '#666666', fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
            Interested investors may reach out to{' '}
            <a href="mailto:hari@blackwell.fund" style={{ color: '#000000', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              hari@blackwell.fund
            </a>
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}
