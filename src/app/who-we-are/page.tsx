"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhoWeArePage() {
  return (
    <div style={{
      background: '#F5F5F5',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Helvetica Neue', sans-serif",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ fontSize: 60, fontWeight: 300, color: '#000000', marginBottom: 20 }}>
          Who We Are
        </h1>
        <p style={{ fontSize: 18, color: '#666666', marginBottom: 40 }}>
          Coming soon
        </p>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <motion.p
            whileHover={{ opacity: 0.6 }}
            style={{ fontSize: 16, color: '#000000' }}
          >
            ← back to home
          </motion.p>
        </Link>
      </motion.div>
    </div>
  );
}
