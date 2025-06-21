"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

interface SlotMachineTextProps {
  text: string;
  delay?: number;
  className?: string;
  charClassName?: string;
  enableSlotEffect?: boolean;
  slotCycles?: number;
  slotSpeed?: number;
  slotDuration?: number;
  cyclingColor?: string;
  finalColor?: string;
  slotUntilTime?: number; // Time in seconds when slot should stop and transition to final color
}

const SlotMachineText: React.FC<SlotMachineTextProps> = ({ 
  text, 
  delay = 0, 
  className, 
  charClassName,
  enableSlotEffect = true,
  slotCycles = 2,
  slotSpeed = 50,
  slotDuration = 100,
  cyclingColor,
  finalColor,
  slotUntilTime
}) => {
  const words = text.split(' ');
  
  // Simple character pools for the slot effect
  const getRandomChar = (finalChar: string): string => {
    if (finalChar === ' ') return ' ';
    
    if (/[A-Z]/.test(finalChar)) {
      const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      return chars[Math.floor(Math.random() * chars.length)] ?? finalChar;
    } else if (/[a-z]/.test(finalChar)) {
      const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      return chars[Math.floor(Math.random() * chars.length)] ?? finalChar;
    } else if (/[0-9]/.test(finalChar)) {
      const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      return chars[Math.floor(Math.random() * chars.length)] ?? finalChar;
    } else {
      return finalChar;
    }
  };

  const SlotChar: React.FC<{
    finalChar: string;
    globalDelay: number;
    className?: string;
    enableSlot: boolean;
    cycles: number;
    speed: number;
    duration: number;
    cyclingColor?: string;
    finalColor?: string;
    slotUntilTime?: number;
  }> = ({ finalChar, globalDelay, className, enableSlot, cycles, speed, duration, cyclingColor, finalColor, slotUntilTime }) => {
    const [currentChar, setCurrentChar] = useState(finalChar);
    const [isSlotting, setIsSlotting] = useState(false);
    const [hasSettled, setHasSettled] = useState(false);
    
    useEffect(() => {
      if (!enableSlot) return;
      
      const startTime = globalDelay * 1000;
      
      const timeout = setTimeout(() => {
        setIsSlotting(true);
        let cycleCount = 0;
        const startCyclingTime = Date.now();
        
        const interval = setInterval(() => {
          // If slotUntilTime is provided, cycle until that time
          if (slotUntilTime) {
            const elapsedTime = (Date.now() - startCyclingTime) / 1000;
            if (elapsedTime < (slotUntilTime - globalDelay)) {
              setCurrentChar(getRandomChar(finalChar));
            } else {
              setCurrentChar(finalChar);
              setIsSlotting(false);
              setHasSettled(true);
              clearInterval(interval);
            }
          } else {
            // Original cycle-based logic
            if (cycleCount < cycles) {
              setCurrentChar(getRandomChar(finalChar));
              cycleCount++;
            } else {
              setCurrentChar(finalChar);
              setIsSlotting(false);
              setHasSettled(true);
              clearInterval(interval);
            }
          }
        }, speed);
        
        return () => clearInterval(interval);
      }, startTime);
      
      return () => clearTimeout(timeout);
    }, [finalChar, globalDelay, enableSlot, cycles, speed, slotUntilTime]);

    // Determine the color based on slot state
    const getTextColor = () => {
      if (!enableSlot || hasSettled) {
        return finalColor ?? '';
      }
      if (isSlotting && cyclingColor) {
        return cyclingColor;
      }
      return '';
    };

    return (
      <motion.span
        className={className}
        style={{ display: 'inline-block' }}
        animate={{ 
          y: 0, 
          opacity: 1,
          color: getTextColor()
        }}
        initial={{ y: '20%', opacity: 0 }} // Reduced height for smoother animation
        transition={{
          y: { delay: globalDelay, duration: 0.3, ease: [0.4, 0, 0.2, 1] as Easing },
          opacity: { delay: globalDelay, duration: 0.3, ease: [0.4, 0, 0.2, 1] as Easing },
          color: { duration: 0.6, ease: 'easeInOut' } // Smooth color transition
        }}
      >
        {currentChar}
      </motion.span>
    );
  };

  return (
    <div className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'flex', marginRight: '0.25em' }}>
          {word.split('').map((char, charIndex) => {
            const globalIndex = words.slice(0, wordIndex).join(' ').length + charIndex;
            return (
              <span key={charIndex} style={{ display: 'inline-block', overflow: 'hidden' }}>
                <SlotChar
                  finalChar={char}
                  globalDelay={delay + globalIndex * 0.02}
                  className={charClassName}
                  enableSlot={enableSlotEffect}
                  cycles={slotCycles}
                  speed={slotSpeed}
                  duration={slotDuration}
                  cyclingColor={cyclingColor}
                  finalColor={finalColor}
                  slotUntilTime={slotUntilTime}
                />
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default SlotMachineText; 