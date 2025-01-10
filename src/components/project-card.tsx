"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-muted/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative aspect-video bg-muted"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all" />
      </motion.div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="px-2 py-0.5 text-xs bg-muted/50"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="group/button relative overflow-hidden"
            asChild
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/button:translate-y-0 transition-transform" />
              <Code className="w-4 h-4 transition-colors relative z-10" />
              <span className="relative z-10">View Code</span>
            </a>
          </Button>
          <Button
            size="sm"
            className="group/button relative overflow-hidden"
            asChild
          >
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover/button:translate-y-0 transition-transform" />
              <ExternalLink className="w-4 h-4 transition-colors relative z-10" />
              <span className="relative z-10">Live Demo</span>
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
