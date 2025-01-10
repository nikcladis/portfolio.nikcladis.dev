"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileDown, Briefcase, GraduationCap, Terminal } from "lucide-react";
import { GridPattern } from "@/components/ui/patterns";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const skills = {
  "Frontend Development": [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  "Backend Development": [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "REST API",
  ],
  "Developer Tools": ["Git", "VS Code", "Docker", "Figma", "Postman"],
};

const timeline = [
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Company Name",
    description: "Working on modern web applications using React and Next.js",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    year: "2022",
    title: "BSc in Computer Science",
    company: "University Name",
    description: "Graduated with honors, focusing on web technologies",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2020",
    title: "Started Programming",
    company: "Self-taught",
    description: "Began learning web development through online resources",
    icon: <Terminal className="w-5 h-5" />,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--secondary-color)_0%,transparent_100%)] opacity-10" />
      <GridPattern />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full space-y-12 p-8"
      >
        <motion.div variants={item} className="space-y-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">About Me</h2>
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  Hi! I&apos;m Nick, a software engineer based in Greece. I
                  enjoy creating beautiful and reliable applications that solve
                  real-world problems.
                </p>
                <p>
                  My journey in web development started back in 2020 when I
                  decided to dive into programming. Since then, I&apos;ve had
                  the privilege of building software for various projects and
                  companies.
                </p>
                <p>
                  These days, my primary focus is building accessible, inclusive
                  products and digital experiences for a variety of clients.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Experience</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: { delay: index * 0.2 },
                        },
                      }}
                      className="relative pl-6 border-l border-muted-foreground/20 group"
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-background rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            {item.year}
                          </span>
                          <h4 className="text-base font-medium">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.company}
                        </p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <motion.div
                variants={item}
                className="space-y-4 bg-muted/50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold">Technical Skills</h3>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Side Content */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <motion.div variants={item}>
                <Card className="p-6 bg-card/50 backdrop-blur">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Quick Facts</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-center gap-2 group">
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          🎓
                        </span>
                        <span>BSc in Computer Science</span>
                      </li>
                      <li className="flex items-center gap-2 group">
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          📍
                        </span>
                        <span>Based in Greece</span>
                      </li>
                      <li className="flex items-center gap-2 group">
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          💼
                        </span>
                        <span>Open to opportunities</span>
                      </li>
                      <li className="flex items-center gap-2 group">
                        <span className="text-xl group-hover:scale-110 transition-transform">
                          🌱
                        </span>
                        <span>Always learning</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Button className="w-full group" asChild>
                  <a href="/cv.pdf" download>
                    <FileDown className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
