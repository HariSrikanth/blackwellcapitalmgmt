"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SlotMachineText from '~/components/SlotMachineText';

export default function FundsPage() {
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
          <SlotMachineText text="FUNDS" delay={0.2} charClassName="text-black text-[80px] font-impact font-black" />
        </div>

        {/* Fund listings */}
        <div style={{ maxWidth: '700px' }}>
          <div style={{ marginBottom: '40px' }}>
            <SlotMachineText 
              text="Our Investment Vehicles" 
              delay={0.5} 
              charClassName="text-black text-[32px] font-inter font-bold" 
            />
          </div>
          
          {/* Fund 1 */}
          <div style={{ marginBottom: '30px', textAlign: 'left', border: '1px solid #ccc', padding: '20px' }}>
            <SlotMachineText 
              text="Blackwell Growth Fund I" 
              delay={0.8} 
              charClassName="text-black text-[24px] font-inter font-bold" 
            />
            <div style={{ marginTop: '10px' }}>
              <SlotMachineText 
                text="Focus: High-growth technology and renewable energy sectors" 
                delay={1.0} 
                charClassName="text-black text-[16px] font-inter" 
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <SlotMachineText 
                text="AUM: $125M | Inception: 2021" 
                delay={1.2} 
                charClassName="text-[#878787] text-[14px] font-inter" 
              />
            </div>
          </div>

          {/* Fund 2 */}
          <div style={{ marginBottom: '30px', textAlign: 'left', border: '1px solid #ccc', padding: '20px' }}>
            <SlotMachineText 
              text="Blackwell Digital Assets Fund" 
              delay={1.4} 
              charClassName="text-black text-[24px] font-inter font-bold" 
            />
            <div style={{ marginTop: '10px' }}>
              <SlotMachineText 
                text="Focus: Cryptocurrency and blockchain technology investments" 
                delay={1.6} 
                charClassName="text-black text-[16px] font-inter" 
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <SlotMachineText 
                text="AUM: $75M | Inception: 2022" 
                delay={1.8} 
                charClassName="text-[#878787] text-[14px] font-inter" 
              />
            </div>
          </div>

          {/* Fund 3 */}
          <div style={{ textAlign: 'left', border: '1px solid #ccc', padding: '20px' }}>
            <SlotMachineText 
              text="Blackwell Value Fund" 
              delay={2.0} 
              charClassName="text-black text-[24px] font-inter font-bold" 
            />
            <div style={{ marginTop: '10px' }}>
              <SlotMachineText 
                text="Focus: Undervalued equity positions in established markets" 
                delay={2.2} 
                charClassName="text-black text-[16px] font-inter" 
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <SlotMachineText 
                text="AUM: $200M | Inception: 2020" 
                delay={2.4} 
                charClassName="text-[#878787] text-[14px] font-inter" 
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 