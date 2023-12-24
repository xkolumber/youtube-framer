"use client";

import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
