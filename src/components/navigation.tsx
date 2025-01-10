"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  FolderGit2,
  Mail,
  Menu,
  Github,
  Linkedin,
  ExternalLink,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

const navigation = [
  {
    name: "About",
    href: "#about",
    icon: <User className="w-4 h-4" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <FolderGit2 className="w-4 h-4" />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <Mail className="w-4 h-4" />,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

export function Nav() {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("/");
  const { scrollToSection } = useScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => ({
        id: item.href.replace("#", ""),
        top:
          document.getElementById(item.href.replace("#", ""))?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const currentSection = sections.reduce((acc, section) => {
        return scrollPosition >= section.top ? section.id : acc;
      }, "/");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        <Link
          href="/"
          className="font-semibold text-lg hover:text-primary transition-colors relative group"
        >
          nikcladis.dev
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "group relative px-4 py-2 transition-colors hover:text-primary data-[active]:text-primary",
                        activeSection === item.href.replace("#", "") &&
                          "text-primary"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2 pl-2 border-l">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                  <ExternalLink className="absolute -top-2 -right-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            ))}
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Access the main navigation links here.
              </SheetDescription>
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1 text-lg font-medium rounded-md transition-all hover:text-primary hover:bg-muted",
                      activeSection === item.href.replace("#", "") &&
                        "text-primary bg-muted"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
              <SheetFooter className="mt-auto pt-4">
                <div className="flex justify-start gap-4 w-full">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      size="icon"
                      className="hover:text-primary hover:border-primary transition-colors"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group"
                      >
                        {link.icon}
                        <span className="sr-only">{link.name}</span>
                        <ExternalLink className="absolute -top-2 -right-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  ))}
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
