"use client";
import { ReactNode } from "react";
import useScrollProgress from "@/components/hooks/useScrollProgress";
import { motion } from "framer-motion";

import React from "react";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  const scrollProgress = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >{children}</motion.main>
      <span
        style={{ transform: `translateY(${scrollProgress - 100}%)` }}
        className={`fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700 transform translate-y-${100 - scrollProgress}`}
      ></span>

      <div className="h-full"></div>
    </>
  );
};

export default Template;
