"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Globe } from "lucide-react"; 
import { ThemeToggle } from "../ui/ThemeToggle";
import { useLanguage } from "@/components/LanguageProvider";

export const Navbar = () => {
  const { lang, toggleLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 250;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });

      if (window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: lang === "ES" ? "Inicio" : "Home", href: "#hero", id: "hero" },
    { name: lang === "ES" ? "Habilidades" : "Skills", href: "#skills", id: "skills" },
    { name: lang === "ES" ? "Proyectos" : "Projects", href: "#projects", id: "projects" },
    { name: lang === "ES" ? "Contacto" : "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="fixed top-0 w-full z-50 flex justify-center p-6">
      <div className="flex items-center justify-between w-full max-w-7xl px-6 py-3 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full transition-colors duration-500 shadow-sm">        
        
        <div className="text-xl font-black uppercase tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-blue-600 to-blue-900 bg-size-[200%_auto] animate-[flow_5s_linear_infinite]">
            Portfolio
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative text-sm font-medium transition-colors uppercase tracking-widest py-2 ${
                activeSection === link.id ? "text-blue-600 dark:text-blue-400" : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              }`}>
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="active-nav-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}/>
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleLang} className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all">
            <Globe size={14} />
            {lang}
          </button>
          <a href="/SebastianDiazCV.pdf" download className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full transition-all active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
            <span>CV</span>
            <Download size={14} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};