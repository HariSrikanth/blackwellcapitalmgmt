"use client";

import { motion } from "framer-motion";
import { TransitionLink } from "~/components/TransitionLink";

export default function CareersPage() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <motion.header 
        className="w-full px-8 py-5 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <TransitionLink 
          href="/"
          className="flex items-center gap-2 hover:opacity-60 transition-opacity duration-200"
        >
          {/* Line with arrow */}
          <div className="flex items-center">
            <div className="w-16 h-[1px]" style={{ backgroundColor: "#000000" }} />
            <div 
              style={{ 
                width: 0, 
                height: 0, 
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                borderLeft: "6px solid #000000",
                marginLeft: "-1px"
              }} 
            />
          </div>
          <span 
            className="text-xl tracking-tight"
            style={{ 
              color: "#000000", 
              fontWeight: 700,
              fontFamily: "Inter, sans-serif"
            }}
          >
            Blackwell Capital Management
          </span>
        </TransitionLink>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 
            className="text-6xl font-light mb-8" 
            style={{ color: "#000000", fontFamily: "Inter, sans-serif" }}
          >
            Careers
          </h1>
          <p 
            className="text-lg max-w-md mx-auto" 
            style={{ color: "rgba(0,0,0,0.6)", fontFamily: "Inter, sans-serif" }}
          >
            Coming soon
          </p>
          <TransitionLink 
            href="/"
            className="inline-block mt-12 text-sm hover:opacity-100 transition-opacity duration-200"
            style={{ color: "rgba(0,0,0,0.4)", fontFamily: "Inter, sans-serif" }}
          >
            ← Back to home
          </TransitionLink>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer 
        className="w-full py-3 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p 
          className="text-xs" 
          style={{ color: "rgba(0,0,0,0.5)", fontFamily: "Inter, sans-serif" }}
        >
          Copyright @ Blackwell Capital Management LLC, 2026
        </p>
      </motion.footer>
    </div>
  );
}
