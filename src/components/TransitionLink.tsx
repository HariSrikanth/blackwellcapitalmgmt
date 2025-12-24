"use client";

import { type ReactNode, type MouseEvent } from "react";
import { usePageTransition } from "./PageTransition";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function TransitionLink({ href, children, className, style, onClick }: TransitionLinkProps) {
  const { triggerTransition, isTransitioning } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!isTransitioning) {
      onClick?.();
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

