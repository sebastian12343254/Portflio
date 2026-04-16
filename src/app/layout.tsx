import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importamos una fuente optimizada
import { Navbar } from "@/components/sections/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

// 1. Configuramos la fuente con display: 'swap' para arreglar el LCP
const inter = Inter({ 
  subsets: ["latin"], 
  display: "swap",
  weight: ["300", "400", "700", "900"] 
});

export const metadata: Metadata = {
  title: "Sebastian | Portafolio",
  description: "Desarrollador Fullstack especializado en Java, Next.js y diseño creativo.",
  keywords: ["Desarrollador Fullstack", "Java", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Sebastian" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-zinc-50 dark:bg-[#030712] text-zinc-900 dark:text-zinc-100 antialiased transition-colors duration-500`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="grow">
                {children}
              </main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}