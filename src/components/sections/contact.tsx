"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, MapPin, Send } from "lucide-react";
import { CirclePattern } from "@/components/ui/patterns";
import { motion } from "framer-motion";

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

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className="h-5 w-5" />,
    username: "@yourusername",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="h-5 w-5" />,
    username: "Nick Kladis",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[conic-gradient(from_0deg_at_50%_50%,var(--primary-color)_0%,transparent_60%)] opacity-10" />
      <CirclePattern />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full space-y-12 p-8"
      >
        <motion.div variants={item} className="space-y-4">
          <h2 className="text-3xl font-semibold sm:text-4xl gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            I&apos;m always interested in hearing about new opportunities and
            collaborations. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={item}>
            <Card className="p-8 bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-300">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="text-muted-foreground text-sm">
                    Feel free to reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email Button */}
                  <Button
                    variant="outline"
                    className="w-full justify-start group hover:border-primary"
                    asChild
                  >
                    <a href="mailto:nikcladis@gmail.com">
                      <Mail className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                      nikcladis@gmail.com
                      <ArrowRight className="ml-auto h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </Button>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Athens, Greece</span>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-muted-foreground">
                      Social Profiles
                    </h4>
                    <div className="flex flex-col gap-3">
                      {socialLinks.map((link) => (
                        <Button
                          key={link.name}
                          variant="outline"
                          className="justify-start group hover:border-primary"
                          asChild
                        >
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            {link.icon}
                            <span className="ml-2">{link.username}</span>
                            <ArrowRight className="ml-auto h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="p-8 bg-card/50 backdrop-blur hover:shadow-xl transition-all duration-300">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Quick Message</h3>
                  <p className="text-muted-foreground text-sm">
                    Send me an email directly.
                  </p>
                </div>

                <Button size="lg" className="w-full group" asChild>
                  <a
                    href="mailto:nikcladis@gmail.com"
                    className="flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    Send Email
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
