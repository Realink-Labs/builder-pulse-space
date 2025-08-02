import { Link } from "react-router-dom";
import { Globe, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Products",
      links: [
        { href: "/tokenization", label: "RWA Tokenization" },
        { href: "/compliance", label: "Compliance Suite" },
        { href: "/api", label: "Developer API" },
        { href: "/analytics", label: "Analytics" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { href: "/institutional", label: "Institutional" },
        { href: "/retail", label: "Retail Investors" },
        { href: "/developers", label: "Developers" },
        { href: "/partners", label: "Partners" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/docs", label: "Documentation" },
        { href: "/whitepaper", label: "Whitepaper" },
        { href: "/blog", label: "Blog" },
        { href: "/support", label: "Support" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/press", label: "Press" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:contact@realinklabs.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="relative">
                <Globe className="h-8 w-8 text-primary group-hover:animate-glow-pulse transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-web3 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-web3 bg-clip-text text-transparent">
                Realink Labs
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Connecting the real world with blockchain financial infrastructure
              through secure, transparent, and compliant on-chain solutions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:animate-glow-pulse"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Realink Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
