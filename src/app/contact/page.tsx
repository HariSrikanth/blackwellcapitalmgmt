"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SlotMachineText from '~/components/SlotMachineText';

export default function ContactPage() {
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
          <SlotMachineText text="CONTACT" delay={0.2} charClassName="text-black text-[80px] font-impact font-black" />
        </div>

        {/* Contact information */}
        <div style={{ maxWidth: '600px' }}>
          <div style={{ marginBottom: '30px' }}>
            <SlotMachineText 
              text="Get In Touch" 
              delay={0.5} 
              charClassName="text-black text-[32px] font-inter font-bold" 
            />
          </div>
          
          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
              <SlotMachineText 
                text="Office Address" 
                delay={0.8} 
                charClassName="text-black text-[20px] font-inter font-bold" 
              />
              <div style={{ marginTop: '5px' }}>
                <SlotMachineText 
                  text="One Wall Street, Suite 3401" 
                  delay={1.0} 
                  charClassName="text-black text-[16px] font-inter" 
                />
              </div>
              <div>
                <SlotMachineText 
                  text="New York, NY 10005" 
                  delay={1.2} 
                  charClassName="text-black text-[16px] font-inter" 
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <SlotMachineText 
                text="Phone" 
                delay={1.4} 
                charClassName="text-black text-[20px] font-inter font-bold" 
              />
              <div style={{ marginTop: '5px' }}>
                <SlotMachineText 
                  text="+1 (212) 555-0123" 
                  delay={1.6} 
                  charClassName="text-black text-[16px] font-inter" 
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <SlotMachineText 
                text="Email" 
                delay={1.8} 
                charClassName="text-black text-[20px] font-inter font-bold" 
              />
              <div style={{ marginTop: '5px' }}>
                <SlotMachineText 
                  text="contact@blackwellcapital.com" 
                  delay={2.0} 
                  charClassName="text-black text-[16px] font-inter" 
                />
              </div>
            </div>

            <div>
              <SlotMachineText 
                text="Business Hours" 
                delay={2.2} 
                charClassName="text-black text-[20px] font-inter font-bold" 
              />
              <div style={{ marginTop: '5px' }}>
                <SlotMachineText 
                  text="Monday - Friday: 9:00 AM - 6:00 PM EST" 
                  delay={2.4} 
                  charClassName="text-black text-[16px] font-inter" 
                />
              </div>
            </div>
          </div>

          {/* Coordinates from main page */}
          <div style={{ marginTop: '30px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
            <SlotMachineText text="40.7069° N, 74.0113° W" delay={2.6} charClassName="text-[#878787] text-[18px] font-inter" />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 