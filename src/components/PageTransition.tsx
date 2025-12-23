"use client";

import { motion, AnimatePresence } from "framer-motion";
import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionContextType {
  isTransitioning: boolean;
  triggerTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return context;
}

interface PageTransitionProviderProps {
  children: ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<"idle" | "enter" | "hold" | "exit">("idle");
  const router = useRouter();
  const pathname = usePathname();
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  // Check if we need to play exit animation on mount (coming from a transition)
  useEffect(() => {
    const wasTransitioning = sessionStorage.getItem("page-transitioning");
    if (wasTransitioning === "true") {
      sessionStorage.removeItem("page-transitioning");
      setShowOverlay(true);
      setAnimationPhase("exit");
    }
  }, [pathname]);

  const triggerTransition = useCallback((href: string) => {
    if (isTransitioning || href === pathname) return;
    
    setPendingHref(href);
    setIsTransitioning(true);
    setShowOverlay(true);
    setAnimationPhase("enter");
  }, [isTransitioning, pathname]);

  const handleEnterComplete = useCallback(() => {
    if (pendingHref) {
      // Store flag so the next page knows to play exit animation
      sessionStorage.setItem("page-transitioning", "true");
      // Navigate immediately
      router.push(pendingHref);
      setPendingHref(null);
      setIsTransitioning(false);
    }
  }, [pendingHref, router]);

  const handleExitComplete = useCallback(() => {
    setShowOverlay(false);
    setAnimationPhase("idle");
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      {children}
      
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="page-transition-overlay"
            className="fixed inset-0 z-[9999]"
            style={{ backgroundColor: "#000000" }}
            initial={{ y: animationPhase === "enter" ? "100%" : "0%" }}
            animate={{ y: animationPhase === "exit" ? "-100%" : "0%" }}
            transition={{
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => {
              if (animationPhase === "enter") {
                handleEnterComplete();
              } else if (animationPhase === "exit") {
                handleExitComplete();
              }
            }}
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
