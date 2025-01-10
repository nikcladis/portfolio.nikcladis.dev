"use client";

import { Button } from "@/components/ui/button";
import { Eye, FileDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CirclePattern } from "@/components/ui/patterns";
import { useScroll } from "@/hooks/use-scroll";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { scrollToSection } = useScroll();

  const handleViewWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("projects");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary-color)_0%,transparent_100%)] opacity-20" />
      <CirclePattern />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl w-full space-y-8 p-8"
      >
        <div className="space-y-4">
          <motion.p
            variants={item}
            className="text-sm sm:text-base text-primary font-medium"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-7xl"
          >
            Nick Kladis
            <span className="block text-3xl sm:text-6xl text-muted-foreground mt-2">
              I build things for the web.
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg text-muted-foreground sm:text-xl max-w-2xl"
          >
            I&apos;m a frontend developer specializing in building exceptional
            digital experiences. Currently, I&apos;m focused on building
            accessible, human-centered products.
          </motion.p>
        </div>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="#projects" onClick={handleViewWork}>
              <Eye className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="secondary"
            asChild
            size="lg"
            className="group shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/cv.pdf" download>
              <FileDown className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator (Mouse shape + bouncing dot) */}
        <motion.div
          variants={item}
          className="hidden sm:flex absolute bottom-20 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <div className="mouse-indicator">
            <div className="mouse-dot" />
          </div>
        </motion.div>

        {/* Inline CSS for the scroll indicator */}
        <style jsx>{`
          .mouse-indicator {
            width: 24px;
            height: 36px;
            border: 2px solid rgba(255, 255, 255, 0.3); /* Adjust color as needed */
            border-radius: 9999px;
            position: relative;
          }
          .mouse-dot {
            width: 4px;
            height: 4px;
            background-color: hsl(var(--primary)); /* Adjust color as needed */
            border-radius: 9999px;
            position: absolute;
            left: 50%;
            top: 8px;
            transform: translateX(-50%);
            animation: scroll-bounce 1.2s infinite ease-in-out;
          }
          @keyframes scroll-bounce {
            0% {
              transform: translate(-50%, 0);
            }
            50% {
              transform: translate(-50%, 18px);
            }
            100% {
              transform: translate(-50%, 0);
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
