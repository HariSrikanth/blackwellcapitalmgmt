"use client";
import React from 'react';
import { motion } from 'framer-motion';
import type { Easing } from 'framer-motion';

const variants = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 1.0,
      ease: [0.4, 0, 0.2, 1] as Easing,
    },
  }),
};

interface SlotMachineTextProps {
  text: string;
  delay?: number;
  className?: string;
  charClassName?: string;
}

const SlotMachineText: React.FC<SlotMachineTextProps> = ({ text, delay = 0, className, charClassName }) => {
  const words = text.split(' ');

  return (
    <div className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'flex', marginRight: '0.25em' }}>
          {word.split('').map((char, charIndex) => {
            const globalIndex = words.slice(0, wordIndex).join(' ').length + charIndex;
            return (
              <span key={charIndex} style={{ display: 'inline-block', overflow: 'hidden' }}>
                <motion.span
                  style={{ display: 'inline-block' }}
                  className={charClassName}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  custom={delay + globalIndex}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
};

export default SlotMachineText; 