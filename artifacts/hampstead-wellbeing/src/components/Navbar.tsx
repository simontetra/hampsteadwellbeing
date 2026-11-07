import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import hwLogo from "@/assets/hw-logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const anchorLinks = [
    { name: "Education", href: isHome ? "#education" : "/#education" },
    { name: "Wellbeing", href: isHome ? "#wellbeing" : "/#wellbeing" },
  ];

  const linkClass = "text-foreground/80 hover:text-primary font-sans text-sm tracking-wide uppercase transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full";
  const activeLinkClass = "text-primary font-sans text-sm tracking-wide uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-px after:bg-primary";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo — clicking returns to home */}
        <Link href="/" aria-label="Return to home" className={cn(
          "flex items-center gap-2 group rounded-full transition-all duration-500 p-1.5",
          !isScrolled && "bg-white/30 backdrop-blur-sm"
        )}>
          <img
            src={hwLogo}
            alt="Hampstead Wellbeing logo"
            className="h-20 md:h-24 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))" }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {anchorLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={linkClass}
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/directory"
            className={location.startsWith("/directory") ? activeLinkClass : linkClass}
          >
            Directory
          </Link>
          <Link
            href="/team"
            className={location === "/team" ? activeLinkClass : linkClass}
          >
            Our Team
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen border-t border-border/50" : "max-h-0"
        )}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          {anchorLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/90 font-display text-2xl hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/directory"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground/90 font-display text-2xl hover:text-primary transition-colors"
          >
            Directory
          </Link>
          <Link
            href="/team"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground/90 font-display text-2xl hover:text-primary transition-colors"
          >
            Our Team
          </Link>
        </div>
      </div>
    </nav>
  );
}
