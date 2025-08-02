import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { RealiknLogo } from "@/components/RealiknLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/products", label: t("nav.products") },
    { href: "/solutions", label: t("nav.solutions") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative group-hover:scale-110 transition-transform duration-300">
            <RealiknLogo className="group-hover:animate-glow-pulse" />
          </div>
          <span className="text-xl font-bold bg-gradient-web3 bg-clip-text text-transparent group-hover:text-primary transition-all duration-300">
            Realink Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-web3 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA Button and Toggles */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            className="bg-gradient-web3 hover:opacity-90 transition-opacity border-0"
            size="sm"
          >
            {t("nav.getStarted")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Theme & Language</span>
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>
              <Button
                className="w-full bg-gradient-web3 hover:opacity-90 transition-opacity border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.getStarted")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
