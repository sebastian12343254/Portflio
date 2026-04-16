"use client";
import { motion } from "framer-motion";

export const HeroName = () => {
  return (
    <motion.h1
      className="text-7xl md:text-9xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-blue-900 to-black bg-size-[200%_auto]"
      animate={{ backgroundPosition: ["0% center", "200% center"] }} 
      transition={{ duration: 7, ease: "linear", repeat: Infinity }}
    >
      Sebastian
    </motion.h1>
  );
};