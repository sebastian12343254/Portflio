"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Gamepad2, Globe, MonitorSmartphone, Code2, Lock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    React: <svg viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="2" fill="#06b6d4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/></svg>,
    NextJS: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M15 15l-5-6v6l5-6"/></svg>,
    MySQL: <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" className="w-5 h-5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>,
    Tailwind: <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" className="w-5 h-5"><path d="M12 4C8 4 6 8 6 12c2-2 4-2 6-1 1.5.75 2.5 2.5 4.5 2.5 4 0 6-4 6-8-2 2-4 2-6 1-1.5-.75-2.5-2.5-4.5-2.5zM6 12c-4 0-6 4-6 8 2-2 4-2 6-1 1.5.75 2.5 2.5 4.5 2.5 4 0 6-4 6-8-2 2-4 2-6 1-1.5-.75-2.5-2.5-4.5-2.5z"/></svg>,
    TypeScript: <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" className="w-5 h-5"><path d="M4 4h16v16H4z"/><path d="M9 10v6M7 10h4M14 16c-1.5 0-2-.5-2-1.5v-1c0-1 .5-1.5 2-1.5s2-.5 2-1.5v-1c0-1-.5-1.5-2-1.5"/></svg>,
    Java: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#ED8B00]"><path d="M14.5 4h-9V2h9v2zM15 6H3v8.5C3 17.5 5.5 20 8.5 20h1c3 0 5.5-2.5 5.5-5.5V6zm2 0h-1v6h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 4h1V8h-1v2zM5.2 22h7.6v2H5.2z"/></svg>,
  };
  return icons[name] || <span className="text-[10px] font-bold px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 whitespace-nowrap">{name}</span>;
};

type Category = "all" | "web" | "games" | "tools";

const projectsData = [
  {
    id: 1, 
    title: "Punto de venta en la nube",
    category: "web" as Category,
    desc: {
      ES: "Sistema Full Stack de inventario y punto de venta. Arquitectura en la nube (Vercel/Render) con dashboard dinámico, exportación a Excel y API protegida con Spring Security. Usuario: admin, Contraseña: admin123",
      EN: "Full Stack cloud inventory and POS system. Features microservices architecture, dynamic dashboard, Excel bulk data import, and API secured with Spring Security. User: admin, Password: admin123"
    },
    img: "./inventario.png", 
    tech: ["React", "Tailwind", "Java", "Spring Boot", "PostgreSQL"], 
    link: "https://inventario-4c6on8kcr-sebastian12343254s-projects.vercel.app/", 
    github: "https://github.com/sebastian12343254/Inventario-app"
  },
  {
    id: 2, 
    title: "Sitio administrativo y pagina web para escuela",
    category: "web" as Category,
    desc: {
      ES: "Plataforma web integral desarrollada para una institución educativa. Cuenta con un portal público optimizado para SEO y un sistema interno de gestión académica respaldado por una API robusta en Java.",
      EN: "Comprehensive web platform developed for an educational institution. Features an SEO-optimized public portal and an internal academic management system backed by a robust Java API."
    },
    img: "./escuela.png", 
    tech: ["NextJS", "Tailwind", "Java", "Spring Boot", "MySQL"], 
    link: "", 
    github: "" 
  },
  {
    id: 3, 
    title: "Mario Whac-A-Mole",
    category: "games" as Category,
    desc: {
      ES: "Juego de escritorio con temática de Super Mario. Implementa mecánicas de aparición dinámica y prevención de superposición usando Timers en Java Swing.",
      EN: "Super Mario themed desktop game. Implements dynamic spawning mechanics and overlap prevention using Java Swing Timers."
    },
    img: "https://github.com/user-attachments/assets/ed5aa009-ad65-4109-ba2e-00f26e6c1927",
    tech: ["Java", "Java Swing"], 
    link: "https://github.com/sebastian12343254/MarioGame",
    github: "https://github.com/sebastian12343254/MarioGame"
  },
  {
    id: 4, 
    title: "Classic Snake Game",
    category: "games" as Category,
    desc: {
      ES: "Implementación de Snake con Java Swing. Incluye sistema de rejilla, crecimiento dinámico mediante ArrayList y validación de colisiones.",
      EN: "Snake implementation with Java Swing. Includes a grid system, dynamic growth via ArrayList, and collision validation."
    },
    img: "https://github.com/user-attachments/assets/3d175d1b-0c0b-400e-9da1-d055547dc3c1",
    tech: ["Java", "Java Swing"], 
    link: "https://github.com/sebastian12343254/SnakeGame",
    github: "https://github.com/sebastian12343254/SnakeGame"
  },
  {
    id: 5, 
    title: "Pac-Man Classic",
    category: "games" as Category,
    desc: {
      ES: "Recreación del arcade con motor TileMap basado en texto e inteligencia artificial básica para el movimiento de los cuatro fantasmas.",
      EN: "Arcade recreation with a text-based TileMap engine and basic AI for the movement of the four ghosts."
    },
    img: "https://github.com/user-attachments/assets/5001e5e4-20fc-4f66-9bb8-3354adcaf0e8",
    tech: ["Java", "Java Swing"], 
    link: "https://github.com/sebastian12343254/PacMan",
    github: "https://github.com/sebastian12343254/PacMan"
  },
  {
    id: 6, 
    title: "Java Modern Calculator",
    category: "tools" as Category,
    desc: {
      ES: "Calculadora funcional con diseño moderno. Soporta operaciones básicas, cálculos porcentuales y formateo inteligente de decimales.",
      EN: "Functional calculator with a modern design. Supports basic operations, percentage calculations, and smart decimal formatting."
    },
    img: "https://github.com/user-attachments/assets/48c709ef-8370-4694-af2d-ab26f9ef21b9",
    tech: ["Java", "Java Swing"], 
    link: "https://github.com/sebastian12343254/Calculator",
    github: "https://github.com/sebastian12343254/Calculator"
  },
  {
    id: 7, 
    title: "Algorithmic Challenges UI",
    category: "tools" as Category,
    desc: {
      ES: "Interfaz gráfica para resolver retos algorítmicos como Insertion Sort y validación de Palíndromos. Gestión de dependencias con Maven.",
      EN: "Graphical interface to solve algorithmic challenges like Insertion Sort and Palindrome validation. Dependency management with Maven."
    },
    img: "https://github.com/user-attachments/assets/2913b10b-686c-483f-a9b6-8723b58b9919",
    tech: ["Java", "Maven", "JUnit", "Java Swing"], 
    link: "https://github.com/sebastian12343254/VariosProblemas",
    github: "https://github.com/sebastian12343254/VariosProblemas"
  },
  {
    id: 8,
    title: "Colección de Sitios Web Estáticos",
    category: "web" as Category,
    desc: {
      ES: "Desarrollo de múltiples landing pages y sitios web estáticos para clientes privados. Proyectos enfocados en diseño responsivo, accesibilidad, optimización SEO y alto rendimiento (Lighthouse). Por acuerdos de confidencialidad, los enlaces y el código fuente no son públicos.",
      EN: "Development of multiple landing pages and static websites for private clients. Projects focused on responsive design, accessibility, SEO optimization, and high performance (Lighthouse). Due to NDAs, links and source code are not public."
    },
    img: "./estatico.png",
    tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind"], 
    link: "", 
    github: ""
  }
];

export default function Projects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const text = {
    ES: { 
      title: "Proyectos", 
      subtitle: "Explora mi trabajo real y aplicaciones desarrolladas.", 
      view: "Visitar Proyecto",
      private: "Privado",
      tabs: { all: "Todos", web: "Web Dev", games: "Videojuegos", tools: "Herramientas & Algoritmos" }
    },
    EN: { 
      title: "Projects", 
      subtitle: "Explore my real-world work and developed applications.", 
      view: "View Project",
      private: "Private",
      tabs: { all: "All", web: "Web Dev", games: "Video Games", tools: "Tools & Algorithms" }
    }
  };

  const t = text[lang as keyof typeof text];

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="min-h-screen w-full flex flex-col items-center py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto">        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-light tracking-wide italic">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          {[
            { id: "all", label: t.tabs.all, icon: MonitorSmartphone },
            { id: "web", label: t.tabs.web, icon: Globe },
            { id: "games", label: t.tabs.games, icon: Gamepad2 },
            { id: "tools", label: t.tabs.tools, icon: Code2 }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as Category)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === tab.id 
                  ? "text-white" 
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 bg-zinc-100 dark:bg-zinc-900/50 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {activeCategory === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <tab.icon size={16} />
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col bg-white dark:bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/5 hover:border-blue-500/30 transition-colors duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
                  <img
                    src={project.img} 
                    alt={project.title} 
                    className="max-w-full max-h-full object-contain opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[2px]">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white text-blue-900 rounded-full font-bold text-xs tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                        {t.view} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="px-6 py-2 bg-zinc-800/80 text-zinc-300 border border-zinc-600/50 rounded-full font-bold text-xs tracking-wider flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-not-allowed shadow-xl">
                        {t.private} <Lock size={14} />
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">{project.title}</h3>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors">
                        <GithubIcon size={18} />
                      </a>
                    ) : (
                      <div className="text-zinc-500/50 flex items-center" title={t.private}>
                        <Lock size={18} />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 grow">
                    {project.desc[lang as "ES" | "EN"]}
                  </p>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-100 dark:border-white/5 overflow-x-auto pb-1 scrollbar-hide">
                    {project.tech.map((tech) => (
                      <div key={tech} className="shrink-0 transition-colors" title={tech}>
                        <TechIcon name={tech} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}