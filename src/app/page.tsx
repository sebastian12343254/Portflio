"use client";
import { motion } from "framer-motion";
import { HeroName } from "@/components/ui/HeroName"; 
import { useLanguage } from "@/components/LanguageProvider";
import { useEffect, useState } from "react";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { SectionDivider } from "@/components/SectionDivider";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const { lang } = useLanguage();
  const [gridColors, setGridColors] = useState<string[]>([]);

  useEffect(() => {
    const colors = [
      "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-white", "bg-zinc-700",
    ];
    const generatedColors = Array(49).fill(null).map(() => colors[Math.floor(Math.random() * colors.length)]);
    setGridColors(generatedColors);
  }, []);

  const content = {
    ES: { desc: "Desarrollador Fullstack. Enfocado en hacer que las cosas se vean increíbles y funcionen aún mejor." },
    EN: { desc: "Fullstack Dev. Focused on making things look great and work even better." }
  };

  return (
    <main className="bg-zinc-50 dark:bg-gray-950 text-black dark:text-zinc-100 transition-colors duration-500">
      
      <section id="hero" className="min-h-screen p-10 flex items-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full mt-0">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-4">
            <div className="flex justify-start"><HeroName /></div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="text-lg md:text-xl font-light text-zinc-900 dark:text-white max-w-xl leading-relaxed tracking-wide">
              {content[lang as keyof typeof content].desc}            
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex gap-3 mt-2">
              <a href="https://github.com/sebastian12343254" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="p-2.5 rounded-full bg-zinc-200 dark:bg-zinc-900 group-hover:bg-blue-600 text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-blue-500/40">
                  <GithubIcon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sebastian-diaz-518294285" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="p-2.5 rounded-full bg-zinc-200 dark:bg-zinc-900 group-hover:bg-blue-700 text-zinc-500 dark:text-zinc-400 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-blue-600/40">
                  <LinkedinIcon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="flex justify-center md:justify-end">
            <div className="relative group p-10 bg-black/5 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative grid grid-cols-7 gap-1">
                {gridColors.length > 0 ? (
                  gridColors.map((color, index) => (
                    <motion.div key={index} className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${color}`} animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1, 0.8] }} transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }} whileHover={{ scale: 1.5, backgroundColor: "#3b82f6", boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.8)", transition: { duration: 0.1 } }} />
                  ))
                ) : (
                  Array(49).fill(null).map((_, i) => <div key={i} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-transparent" />)
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <SectionDivider />          
      <Skills />
      <SectionDivider />          
      <Projects />
      <Contact />

    </main>
  );
}