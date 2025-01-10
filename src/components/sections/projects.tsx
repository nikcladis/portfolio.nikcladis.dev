"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Mousewheel } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";
import { DotsPattern } from "@/components/ui/patterns";

// Animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,var(--primary-color)_0%,transparent_50%)] opacity-10" />
      <DotsPattern />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-40 right-0 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full space-y-12"
      >
        <div className="max-w-6xl mx-auto px-8 space-y-4">
          <motion.div variants={item} className="space-y-4">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Here are some of my recent projects that showcase my skills and
              experience. Each project is briefly described with links to code
              repositories and live demos.
            </p>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative group">
          <Swiper
            /**
             * Capture Swiper instance
             */
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            /**
             * Use Swiper's built-in Mousewheel module
             */
            modules={[Pagination, EffectCoverflow, Mousewheel]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            /**
             * Enable mousewheel scrolling with relevant options
             */
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            className="w-full [--swiper-theme-color:hsl(var(--primary))] touch-pan-y"
            speed={800}
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.title}
                className="max-w-2xl transition-opacity duration-300"
              >
                <div className="p-4">
                  <ProjectCard {...project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div variants={item} className="flex justify-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>View More on GitHub</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
