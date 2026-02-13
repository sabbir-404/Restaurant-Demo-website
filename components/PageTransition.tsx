import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  // Casting to any to bypass TypeScript error with framer-motion types in this setup
  const motionProps: any = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" }
  };

  return (
    <motion.div
      {...motionProps}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};