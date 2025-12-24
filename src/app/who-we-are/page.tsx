"use client";

import { motion, type Easing } from "framer-motion";
import { TransitionLink } from "~/components/TransitionLink";

export default function WhoWeArePage() {
  const navItems = [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Insights", href: "https://redfund.substack.com/", external: true },
    { label: "Careers", href: "mailto:hari@blackwell.fund?subject=Career%20Inquiry%20-%20Blackwell%20Capital%20Management&body=Instructions%3A%20Please%20complete%20the%20bracketed%20sections%20in%20this%20email%2C%20attach%20a%20copy%20of%20your%20resume%2C%20and%20send%20this%20email%20for%20consideration.%20While%20we%20do%20not%20reply%20to%20all%20applications%2C%20a%20member%20of%20our%20team%20will%20read%20each%20one%2C%20so%20please%20be%20sure%20to%20accurately%20represent%20your%20interest%20and%20background.%0A%0A---%0A%0AHi%20Hari%2C%0A%0AI%E2%80%99m%20interested%20in%20learning%20more%20about%20Blackwell%20Capital%20Management.%20%5B1%20Sentence%20Introduction%5D.%20%5BWhy%20you%20want%20to%20work%20here%5D.%0A%0AI%E2%80%99ve%20attached%20a%20copy%20of%20my%20resume%20for%20your%20consideration%E2%80%94look%20forward%20to%20hearing%20back%20soon!%0A%0ABest%2C%0A%5BYOUR%20NAME%5D", external: true },
  ];

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

  return (
    <div style={{
      background: '#FFFFFF',
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <header className="w-full flex items-center justify-between" style={{ height: "80px", fontFamily: "Judson, serif", flexShrink: 0 }}>
        <TransitionLink href="/" className="flex items-center h-full hover:opacity-60 transition-opacity duration-200" style={{ textDecoration: 'none' }}>
          <div style={{ width: "40px", height: "1px", backgroundColor: "#000000" }} />
          <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderRight: "6px solid #000000" }} />
          <span style={{ marginLeft: "12px", color: "#000000", fontFamily: "Judson, serif", fontSize: "32px", fontWeight: 400, lineHeight: "normal", whiteSpace: "nowrap" }}>
            Blackwell Capital Management
          </span>
        </TransitionLink>

        <nav className="flex items-center h-full" style={{ marginRight: "40px" }}>
          {navItems.map((item) => (
            <div key={item.href} className="flex items-center h-full">
              <div style={{ width: "1px", height: "20px", backgroundColor: "#000000" }} />
              {'external' in item && item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity duration-200" style={{ padding: "0 24px", color: "#000000", fontFamily: "Judson, serif", fontSize: "20px", fontWeight: 400, whiteSpace: "nowrap", textDecoration: "none" }}>
                  {item.label}
                </a>
              ) : (
                <TransitionLink href={item.href} className="hover:opacity-60 transition-opacity duration-200" style={{ padding: "0 24px", color: "#000000", fontFamily: "Judson, serif", fontSize: "20px", fontWeight: 400, whiteSpace: "nowrap" }}>
                  {item.label}
                </TransitionLink>
              )}
            </div>
          ))}
          <div style={{ width: "1px", height: "20px", backgroundColor: "#000000" }} />
        </nav>
      </header>

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
