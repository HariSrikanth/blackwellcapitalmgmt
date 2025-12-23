"use client";

import { type ReactNode, type MouseEvent } from "react";
import { usePageTransition } from "./PageTransition";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TransitionLink({ href, children, className, style }: TransitionLinkProps) {
  const { triggerTransition, isTransitioning } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isTransitioning) {
      triggerTransition(href);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}

