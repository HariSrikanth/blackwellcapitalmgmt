"use client";

import { useState, useEffect } from "react";
import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SlotMachineText from '~/components/SlotMachineText';
import { TypingAnimation } from "~/components/magicui/typing-animation";

export default function FundsPage() {
  const [selectedFund, setSelectedFund] = useState<'blue' | 'red'>('blue');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const fundData = {
    blue: {
      title: '[blue]',
      thesis: 'A Web3-focused fund specializing in secure staking protocols and systematic yield farming strategies. Our approach provides cryptocurrency exposure through institutional-grade risk management, avoiding the volatility of speculative tokens while maintaining upside potential in the digital asset ecosystem.',
      aum: '200k+ AUM',
      returns: '25%+ Return',
      substack: 'https://substacklink.com',
      color: '#002147',
      accentColor: '#001122',
      image: '/images/imageBlue.png'
    },
    red: {
      title: '[red]',
      thesis: 'We invest in exceptional public companies with durable competitive advantages and compelling secular tailwinds. Through rigorous fundamental analysis and intentional research, we identify high-quality businesses positioned for sustained growth before broader market recognition.',
      aum: '500k AUM',
      returns: '30%+ Return',
      substack: 'https://redstacklink.com',
      color: '#880808',
      accentColor: '#660606',
      image: '/images/imageRed.png'
    }
  };

  const currentFund = fundData[selectedFund];

  const containerVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as Easing,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as Easing },
    },
  };

  const paragraphSlideUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 2.5 } },
  };

  if (isMobile) {
    return (
      <div style={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#FFFFFF',
        overflow: 'auto',
        position: 'relative',
        padding: '20px'
      }}>
        {/* Mobile Back to Home */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            alignSelf: 'flex-end',
            marginBottom: '20px'
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <p style={{ fontSize: 16, color: 'black' }}>back to home</p>
          </Link>
        </motion.div>

        {/* Mobile Fund Navigation */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '30px'
          }}
        >
          <motion.button
            onClick={() => setSelectedFund('red')}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '10px'
            }}
          >
            <SlotMachineText 
              text="[red]" 
              delay={0.5} 
              charClassName={`text-[24px] font-inter ${selectedFund === 'red' ? 'text-[#880808]' : 'text-[#878787]'}`}
              enableSlotEffect={false}
            />
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5"
              style={{ backgroundColor: '#880808', width: '100%' }}
              initial={{ opacity: selectedFund === 'red' ? 1 : 0 }}
              animate={{ opacity: selectedFund === 'red' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedFund('blue')}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              padding: '10px'
            }}
          >
            <SlotMachineText 
              text="[blue]" 
              delay={0.6} 
              charClassName={`text-[24px] font-inter ${selectedFund === 'blue' ? 'text-[#002147]' : 'text-[#878787]'}`}
              enableSlotEffect={false}
            />
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5"
              style={{ backgroundColor: '#002147', width: '100%' }}
              initial={{ opacity: selectedFund === 'blue' ? 1 : 0 }}
              animate={{ opacity: selectedFund === 'blue' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Mobile Fund Image */}
        <motion.div 
          key={selectedFund}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '300px',
            height: '350px',
            position: 'relative',
            margin: '0 auto 30px',
            alignSelf: 'center'
          }}
        >
          <Image 
            src={currentFund.image} 
            alt={`${selectedFund} fund image`} 
            fill 
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        {/* Mobile Fund Card */}
        <motion.div 
          key={`card-${selectedFund}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(128, 128, 128, 0.75)',
            padding: '30px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            marginBottom: '20px'
          }}
        >
          {/* Mobile Fund Title */}
          <div style={{ marginBottom: '20px', minHeight: '38px' }}>
            <TypingAnimation
              as="h2"
              duration={100}
              delay={500}
              className="font-medium leading-none tracking-normal"
              style={{ 
                fontSize: 32, 
                fontWeight: 500, 
                color: currentFund.color,
                textAlign: 'center'
              }}
            >
              {currentFund.title}
            </TypingAnimation>
          </div>

          {/* Mobile Metrics */}
          <div style={{ marginBottom: '20px', marginTop: '-20px', textAlign: 'center', minHeight: '49px' }}>
            <TypingAnimation
              as="p"
              duration={100}
              delay={1000}
              className="font-medium leading-none tracking-normal"
              style={{ 
                fontSize: 20, 
                fontWeight: 500, 
                color: 'white',
                marginBottom: '5px'
              }}
            >
              {currentFund.aum}
            </TypingAnimation>
            <TypingAnimation
              as="p"
              duration={100}
              delay={1300}
              className="font-medium leading-none tracking-normal"
              style={{ 
                fontSize: 20, 
                fontWeight: 500, 
                color: 'white'
              }}
            >
              {currentFund.returns}
            </TypingAnimation>
          </div>

          {/* Mobile Thesis */}
          <motion.div
            variants={paragraphSlideUp}
            initial="hidden"
            animate="visible"
            style={{ 
              fontSize: 16, 
              lineHeight: 1.5, 
              color: 'white',
              textAlign: 'left',
              marginBottom: '20px'
            }}
          >
            <p>{currentFund.thesis}</p>
          </motion.div>

          {/* Mobile Invest Button */}
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <motion.div
              whileTap={{ scale: 0.95 }}
              style={{
                background: currentFund.color,
                color: 'white',
                padding: '12px 24px',
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              invest
            </motion.div>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      background: '#FFFFFF',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Left Panel with Images */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{
          width: '30%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FFFFFF'
        }}
      >
        {/* Fund Image */}
        <motion.div 
          key={selectedFund}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{
            width: '500px',
            height: '600px',
            position: 'relative',
            marginBottom: '40px',
            marginTop: '-100px',
            marginLeft: selectedFund === 'blue' ? '--50px' : '-50px'
          }}
        >
          <Image 
            src={currentFund.image} 
            alt={`${selectedFund} fund image`} 
            fill 
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        {/* Fund Navigation with Landing Page Button Style */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'flex-start',
            marginTop: '-20px'
          }}
        >
          <motion.button
            onClick={() => setSelectedFund('red')}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              padding: 0
            }}
            className="group"
          >
            <div className={`group-hover:text-black transition-colors duration-200 ${selectedFund === 'red' ? 'text-black' : 'text-[#878787]'}`}>
              <SlotMachineText 
                text="[red]" 
                delay={0.5} 
                charClassName={`text-[25px] font-inter transition-colors duration-200 ${selectedFund === 'red' ? 'text-black' : 'text-[#878787] group-hover:text-black'}`}
                enableSlotEffect={false}
              />
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5"
              style={{ backgroundColor: selectedFund === 'red' ? '#880808' : '#000000' }}
              initial={{ width: selectedFund === 'red' ? '100%' : 0 }}
              animate={{ width: selectedFund === 'red' ? '100%' : 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.button>
          
          <motion.button
            onClick={() => setSelectedFund('blue')}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              height: '35px',
              display: 'flex',
              alignItems: 'center',
              padding: 0
            }}
            className="group"
          >
            <div className={`group-hover:text-black transition-colors duration-200 ${selectedFund === 'blue' ? 'text-black' : 'text-[#878787]'}`}>
              <SlotMachineText 
                text="[blue]" 
                delay={0.6} 
                charClassName={`text-[25px] font-inter transition-colors duration-200 ${selectedFund === 'blue' ? 'text-black' : 'text-[#878787] group-hover:text-black'}`}
                enableSlotEffect={false}
              />
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5"
              style={{ backgroundColor: selectedFund === 'blue' ? '#002147' : '#000000' }}
              initial={{ width: selectedFund === 'blue' ? '100%' : 0 }}
              animate={{ width: selectedFund === 'blue' ? '100%' : 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Panel with Overlapping Geometric Shapes */}
      <motion.div 
        key={selectedFund}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          width: '70%',
          height: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px',
          paddingLeft: '20px',
          overflow: 'hidden'
        }}
      >
        {/* Overlapping Geometric Shapes */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          {/* Large Square */}
          <motion.div
            key={`square1-${selectedFund}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              width: '800px',
              height: '800px',
              background: `${currentFund.color}15`,
              top: '-200px',
              right: '-300px',
              border: `2px solid ${currentFund.color}15`
            }}
          />
          
          
          
          {/* Small Square */}
          <motion.div
            key={`square2-${selectedFund}`}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: `${currentFund.color}10`,
              top: '400px',
              right: '-100px',
              border: `1px solid ${currentFund.color}10`
            }}
          />
          

          
          {/* Medium Square */}
          <motion.div
            key={`square3-${selectedFund}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              background: `${currentFund.color}14`,
              bottom: '-100px',
              left: '100px',
              border: `2px solid ${currentFund.color}18`
            }}
          />
          
          {/* Small Square */}
          <motion.div
            key={`square3-${selectedFund}`}
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 25 }}
            transition={{ duration: 1.3, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: `${currentFund.color}16`,
              bottom: '200px',
              right: '-50px',
              transform: 'rotate(25deg)',
              border: `1px solid ${currentFund.color}20`
            }}
          />
        </div>
        {/* Back to Home Button */}
        <motion.div
          variants={itemVariants}
          style={{ 
            position: 'absolute', 
            top: '35px', 
            right: '120px', 
            zIndex: 20 
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                cursor: 'pointer'
              }}
            >
              <span className="text-[#878787] text-[18px] font-inter">
                back to home
              </span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Grey Glass Panel with Lines */}
        <motion.div 
          style={{
            width: '600px',
            height: '700px',
            background: 'rgba(245, 245, 245, 0.75)',
            backdropFilter: 'blur(20px) saturate(120%)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '60px 50px',
            boxShadow: `
              0 25px 50px rgba(0, 0, 0, 0.1),
              0 8px 32px rgba(0, 0, 0, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `,
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '40px',
            marginLeft: '50px',
            zIndex: 10
          }}

        >


          {/* Content */}
          <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Fund Title with Typewriter Effect */}
            <motion.div 
              style={{ marginBottom: '60px', minHeight: '60px' }}
            >
              <TypingAnimation
                as="h1"
                duration={100}
                delay={800}
                className="text-black text-[50px] font-inter font-bold"
              >
                {currentFund.title}
              </TypingAnimation>
            </motion.div>

            {/* Fund Thesis with Slide Up */}
            <motion.div 
              variants={paragraphSlideUp}
              initial="hidden"
              animate="visible"
              style={{ marginBottom: '40px', flex: 1 }}
            >
              <p className="text-black text-[20px] font-inter leading-relaxed">
                {currentFund.thesis}
              </p>
            </motion.div>

            {/* Stats with Typewriter Effects */}
            <motion.div 
              style={{ marginBottom: '60px', marginTop: '-20px', minHeight: '92px' }}
            >
              <div style={{ marginBottom: '20px', minHeight: '43px' }}>
                <TypingAnimation
                  as="p"
                  duration={100}
                  delay={1400}
                  className="text-black text-[36px] font-inter font-bold"
                >
                  {currentFund.aum}
                </TypingAnimation>
              </div>
              <div style={{ minHeight: '43px' }}>
                <TypingAnimation
                  as="p"
                  duration={100}
                  delay={1800}
                  className="text-black text-[36px] font-inter font-bold"
                >
                  {currentFund.returns}
                </TypingAnimation>
              </div>
            </motion.div>

            {/* Substack Link with Slide Up */}
            <motion.div 
              variants={paragraphSlideUp}
              initial="hidden"
              animate="visible"
              style={{ marginBottom: '40px' }}
            >
              <p className="text-black text-[20px] font-inter">
                Substack: {currentFund.substack}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Invest Button Below Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          style={{ alignSelf: 'center', marginTop: '-20px', zIndex: 20 }}
        >
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                padding: '5px 10px'
              }}
              className="group"
            >
              <span className="text-[#878787] group-hover:text-black text-[30px] font-inter transition-colors duration-200">
                invest
              </span>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-black"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
} 