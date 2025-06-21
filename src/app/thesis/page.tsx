"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SlotMachineText from '~/components/SlotMachineText';

export default function ThesisPage() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#F5F5F5',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: '800px',
          height: '600px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        {/* Back button */}
        <Link href="/" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 20px',
              border: '2px solid black',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            <SlotMachineText text="← BACK" delay={0.1} charClassName="text-black text-[20px] font-inter" />
          </motion.div>
        </Link>

        {/* Main title */}
        <div style={{ marginBottom: '40px' }}>
          <SlotMachineText text="THESIS" delay={0.2} charClassName="text-black text-[80px] font-impact font-black" />
        </div>

        {/* Content */}
        <div style={{ maxWidth: '600px', lineHeight: '1.6' }}>
          <div style={{ marginBottom: '30px' }}>
            <SlotMachineText 
              text="Our Investment Philosophy" 
              delay={0.5} 
              charClassName="text-black text-[32px] font-inter font-bold" 
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <SlotMachineText 
              text="We believe in identifying undervalued assets across traditional and emerging markets," 
              delay={0.8} 
              charClassName="text-black text-[18px] font-inter" 
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <SlotMachineText 
              text="focusing on long-term value creation through rigorous fundamental analysis" 
              delay={1.1} 
              charClassName="text-black text-[18px] font-inter" 
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <SlotMachineText 
              text="and strategic positioning in high-growth sectors including technology," 
              delay={1.4} 
              charClassName="text-black text-[18px] font-inter" 
            />
          </div>
          
          <div>
            <SlotMachineText 
              text="renewable energy, and digital assets." 
              delay={1.7} 
              charClassName="text-black text-[18px] font-inter" 
            />
          </div>
        </div>

        {/* Key principles */}
        <div style={{ marginTop: '40px', display: 'flex', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <SlotMachineText text="RESEARCH" delay={2.0} charClassName="text-[#878787] text-[20px] font-inter" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <SlotMachineText text="DISCIPLINE" delay={2.2} charClassName="text-[#878787] text-[20px] font-inter" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <SlotMachineText text="VALUE" delay={2.4} charClassName="text-[#878787] text-[20px] font-inter" />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 