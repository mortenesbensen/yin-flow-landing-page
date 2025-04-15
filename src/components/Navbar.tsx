
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Hjem", href: "#home" },
    { title: "Om Mig", href: "#about" },
    { title: "Yin Yoga", href: "#yin-yoga" },
    { title: "Holdplan", href: "#schedule" },
    { title: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-serif text-yin-deep font-semibold"
        >
          Line Jakobsen Yin Yoga
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-yin-text hover:text-yin transition-colors"
            >
              {link.title}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-yin hover:bg-yin-dark text-white"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Nu
          </Button>
        </div>

        <button
          className="md:hidden text-yin-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-yin-text hover:text-yin transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-yin hover:bg-yin-dark text-white w-full"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              Book Nu
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
