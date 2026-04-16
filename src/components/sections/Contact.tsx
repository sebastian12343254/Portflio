"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, User, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { lang } = useLanguage();
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xwvaeygw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000); 
      } else {
        alert(lang === 'ES' ? "Hubo un problema al enviar el mensaje." : "There was a problem sending the message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(lang === 'ES' ? "Error de conexión." : "Connection error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const text = {
    ES: { 
      title: "Contacto", 
      aboutTitle: "Sobre mí",
      aboutDesc: "Desarrollador Full Stack con experiencia en Java, Spring Boot, PHP, Vue.js y SQL. Desarrollo APIs REST y aplicaciones web escalables. Buscando oportunidades para seguir creciendo como ingeniero de software.",
      location: "Celaya, Guanajuato, México",
      formName: "Tu Nombre",
      formEmail: "Tu Correo",
      formMessage: "Tu Mensaje",
      btnSend: "Enviar Mensaje",
      btnSending: "Enviando...",
      btnSuccess: "¡Mensaje Enviado!"
    },
    EN: { 
      title: "Contact", 
      aboutTitle: "About me",
      aboutDesc: "Full-Stack Developer with experience in Java, Spring Boot, PHP, Vue.js, and SQL. I develop REST APIs and scalable web applications. I am looking for opportunities to continue growing as a software engineer.",
      location: "Celaya, Guanajuato, Mexico",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      btnSend: "Send Message",
      btnSending: "Sending...",
      btnSuccess: "Message Sent!"
    }
  };

  const t = text[lang as keyof typeof text] || text.EN;

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-10 relative overflow-hidden">    
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                {t.aboutTitle}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                {t.aboutDesc}
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="font-medium">{t.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 uppercase tracking-widest font-bold mb-1">Email</p>
                  <p className="font-medium">msdp.sebastian.diaz@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-zinc-100 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 shadow-xl">
              
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.formName}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"/>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.formEmail}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"/>
              </div>

              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t.formMessage}
                  className="w-full p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all resize-none"/>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className="group relative w-full flex items-center justify-center gap-2 py-4 mt-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] disabled:shadow-none overflow-hidden">
                {isSubmitting ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  </motion.div>
                ) : submitted ? (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    <span>{t.btnSuccess}</span>
                  </motion.div>
                ) : (
                  <>
                    <span>{t.btnSend}</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}