import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Armada", href: "/armada" },
  { name: "Layanan", href: "/layanan" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Kontak", href: "/kontak" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya ingin menanyakan tentang rental mobil."
  );
  const whatsappLink = `https://wa.me/6281380300065?text=${whatsappMessage}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/98 backdrop-blur-lg shadow-2xl border-b border-border/50"
          : "bg-gradient-to-b from-background/80 to-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.webp"
              alt="CV. ROMO GLOBAL JAYA"
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-2",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 after:origin-right",
                  location.pathname === item.href &&
                    "after:scale-x-100 after:origin-left"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+6281380300065"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0813-8030-0065</span>
            </a>
            <Button variant="whatsapp" size="default" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pesan Sekarang
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen ? "max-h-[400px] pb-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2 pt-4 border-t border-border/50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-base font-medium transition-colors duration-200 py-3 px-4",
                  location.pathname === item.href
                    ? "text-foreground bg-card/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/30"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border/50 px-4">
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pesan via WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
