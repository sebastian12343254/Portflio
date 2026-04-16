"use client";
import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <div className="relative w-full flex justify-center items-center py-20 overflow-hidden">
      <div className="absolute w-[80%] h-px bg-linear-to-r from-transparent via-zinc-500/30 to-transparent" />

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
        className="absolute w-[20%] h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50"
      />

      <div className="relative z-10 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-zinc-800 dark:bg-white border border-zinc-500 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
      </div>
    </div>
  );
};