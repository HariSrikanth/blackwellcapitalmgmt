"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlotMachineText from '~/components/SlotMachineText';

export default function HomePage() {
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
      {/* Images positioned relative to viewport width */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 1.5 }}
        style={{ 
          width: 745 * 0.8, 
          height: 915 * 0.8, 
          position: 'absolute',
          left: 'calc(50vw - 1000px)', // Move left image much further left
          top: '40vh',
          transform: 'translateY(-50%)',
          marginTop: -140
        }}>
        <Image src="/images/wavesL.png" alt="Left waves" fill style={{ objectFit: 'cover', objectPosition: 'right' }} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 1.5 }}
        style={{ 
          width: 812 * 0.8, 
          height: 1148 * 0.8, 
          position: 'absolute',
          left: 'calc(50vw + 400px + 100px)', // Bring right image closer to center
          top: '50vh',
          transform: 'translateY(-50%)',
          marginTop: -760
        }}>
        <Image src="/images/wavesT.png" alt="Top right waves" fill style={{ objectFit: 'cover' }} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.5 }}
        style={{ 
          width: 636 * 0.8, 
          height: 795 * 0.8, 
          position: 'absolute',
          left: 'calc(50vw + 400px + 20px)', // Move bottom right image further left
          top: '50vh',
          transform: 'translateY(-50%)',
          marginTop: 80 // Move bottom right image up
        }}>
        <Image src="/images/wavesR.png" alt="Bottom right waves" fill style={{ objectFit: 'cover' }} />
      </motion.div>

      {/* Static centered content container for all text */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: 800,
          height: 850,
          position: 'relative',
          transformOrigin: 'center center'
        }}
      >
        {/* All text elements with fixed pixel positioning */}
        <div style={{ width: 226.13, height: 316, left: 372.87, top: 118, position: 'absolute', textAlign: 'center' }}>
          <SlotMachineText text="W" delay={0.2} charClassName="text-black text-[250px] font-impact" />
        </div>
        <div style={{ width: 226.13, height: 316, left: 199, top: 118, position: 'absolute', textAlign: 'center' }}>
          <SlotMachineText text="B" delay={0.1} charClassName="text-black text-[250px] font-impact" />
        </div>
        <div style={{ width: 226.13, height: 316, left: 372.87, top: 340, position: 'absolute', textAlign: 'center' }}>
          <SlotMachineText text="M" delay={0.4} charClassName="text-black text-[250px] font-archivo-black" />
        </div>
        <div style={{ width: 226.13, height: 316, left: 199, top: 340, position: 'absolute', textAlign: 'center' }}>
          <SlotMachineText text="C" delay={0.3} charClassName="text-black text-[250px] font-impact" />
        </div>

        <div style={{left: 0, top: 363, position: 'absolute', textAlign: 'right'}}>
          <SlotMachineText text="$XRP" delay={0.5} charClassName="text-black text-[30px] font-inter" />
        </div>
        <div style={{left: 764, top: 531, position: 'absolute', textAlign: 'center'}}>
          <SlotMachineText text="$ S O L" delay={0.6} charClassName="text-black text-[30px] font-inter" />
        </div>
        <div style={{left: 423, top: 66, position: 'absolute', textAlign: 'center'}}>
          <SlotMachineText text="+9.3" delay={0.7} charClassName="text-black text-[24px] font-inter" />
        </div>
        <div style={{left: 394, top: 32, position: 'absolute', textAlign: 'right'}}>
          <SlotMachineText text="ECL" delay={0.8} charClassName="text-black text-[30px] font-inter" />
        </div>
        <div style={{left: 129, top: 77, position: 'absolute', textAlign: 'right'}}>
          <SlotMachineText text="OKLO" delay={0.9} charClassName="text-black text-[30px] font-inter" />
        </div>
        <div style={{left: 0, top: 33, position: 'absolute'}}>
          <SlotMachineText text="HEX # 880808" delay={1.0} charClassName="text-black text-[20px] font-inter" />
          <SlotMachineText text="HEX # 002147" delay={1.05} charClassName="text-black text-[20px] font-inter" />
        </div>
        <div style={{ position: 'absolute', top: 627, left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                <SlotMachineText text="Blackwell" delay={1.4} charClassName="text-black text-[30px] font-inter" />
                <SlotMachineText text="Capital" delay={1.45} charClassName="text-black text-[30px] font-inter" />
                <SlotMachineText text="Management" delay={1.5} charClassName="text-black text-[30px] font-inter" />
            </div>
            <div>
              <div style={{width: 113, height: 35 }}><SlotMachineText text="[THESIS]" delay={1.1} charClassName="text-[#878787] text-[25px] font-inter" /></div>
              <div style={{width: 113, height: 35 }}><SlotMachineText text="[FUNDS]" delay={1.2} charClassName="text-[#878787] text-[25px] font-inter" /></div>
              <div style={{width: 141, height: 35 }}><SlotMachineText text="[CONTACT]" delay={1.3} charClassName="text-[#878787] text-[25px] font-inter" /></div>
            </div>
        </div>
        <div style={{left: 710, top: 485, position: 'absolute', textAlign: 'right' }}><SlotMachineText text="+4.3" delay={1.5} charClassName="text-black text-[24px] font-inter" /></div>
        <div style={{width: 66, left: 696, top: 449, position: 'absolute', textAlign: 'right' }}><SlotMachineText text="SMR" delay={1.6} charClassName="text-black text-[30px] font-inter" /></div>
        <div style={{left: 729, top: 769, position: 'absolute', textAlign: 'right' }}><SlotMachineText text="SQM" delay={1.7} charClassName="text-black text-[30px] font-inter" /></div>
        <div style={{left: 762, top: 295, position: 'absolute', textAlign: 'center' }}><SlotMachineText text="M N S T" delay={1.8} charClassName="text-black text-[30px] font-inter" /></div>
        <div style={{left: 649, top: 35, position: 'absolute', textAlign: 'right' }}><SlotMachineText text="06.20.2025" delay={1.9} charClassName="text-black text-[25px] font-inter" /></div>
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.5 }}
          style={{width: 163, height: 34, left: 635, top: 33, position: 'absolute', border: '2px black solid'}} 
        />
        <div style={{left: 667, top: 71, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <SlotMachineText text="37.8712° N" delay={2.1} charClassName="text-black text-[20px] font-inter" />
          <SlotMachineText text="122.2555° W" delay={2.15} charClassName="text-black text-[20px] font-inter" />
          <SlotMachineText text="# 771" delay={2.2} charClassName="text-black text-[20px] font-inter" />
        </div>
        <div style={{ width: 232.08, height: 67, left: 5, top: 828, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: 'top left' }}>
          <SlotMachineText text="40.7069° N" delay={2.5} charClassName="text-black text-[25px] font-inter" />
          <SlotMachineText text="74.0113° W" delay={2.55} charClassName="text-black text-[25px] font-inter" />
        </div>
      </motion.div>
    </div>
  );
}
