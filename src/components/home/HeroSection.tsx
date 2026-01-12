import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  { id: "keluarga", label: "Keluarga", filter: "MPV" },
  { id: "bisnis", label: "Bisnis", filter: "Premium" },
  { id: "event", label: "Event", filter: "Premium" },
  { id: "bandara", label: "Bandara", filter: "MPV" },
];

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setParallaxY(scrollY * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCategoryClick = (filter: string) => {
    navigate(`/armada?category=${filter}`);
  };

  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya ingin memesan rental mobil."
  );
  const whatsappLink = `https://wa.me/6281380300065?text=${whatsappMessage}`;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <img
          src="/hero-section.webp"
          alt="Premium car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 gradient-dark-left" />
      <div className="absolute inset-0 gradient-dark-bottom" />
      <div className="absolute inset-0 bg-background/30" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div
            className={`flex items-center gap-2 text-muted-foreground mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm tracking-wider uppercase">
              Jakarta Barat • Tangerang • Soekarno-Hatta
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`heading-cinematic text-foreground mb-8 transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Mobilitas Premium untuk Perjalanan Anda
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Armada terawat, driver profesional, layanan 24 jam. CV.ROMO GLOBAL
            Jaya melayani kebutuhan transportasi bisnis dan keluarga Anda.
          </p>

          {/* Quick Category Selector */}
          <div
            className={`mb-12 transition-all duration-1000 delay-450 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
              Butuh mobil untuk?
            </p>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.filter)}
                  className="px-6 py-3 border border-border/50 bg-card/30 backdrop-blur-sm text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pesan via WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <Link to="/armada">Lihat Armada</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-20 pt-10 border-t border-border/20 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              <div>
                <p className="font-display text-4xl md:text-5xl font-semibold text-primary">
                  2+
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Tahun Pengalaman
                </p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-semibold text-accent">
                  50+
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Unit Armada
                </p>
              </div>
              <div>
                <p className="font-display text-4xl md:text-5xl font-semibold text-foreground">
                  5K+
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Pelanggan Puas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
