import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya ingin memesan rental mobil."
  );
  const whatsappLink = `https://wa.me/6281380300065?text=${whatsappMessage}`;

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-section.webp"
          alt="Premium car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 gradient-cinematic opacity-90" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`heading-cinematic text-foreground mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Siap Memulai Perjalanan?
          </h2>
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik. Tim kami
            siap membantu Anda 24 jam, 7 hari seminggu.
          </p>

          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-300 ${
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
              <a href="tel:+6281380300065">
                <Phone className="w-5 h-5 mr-2" />
                0813-8030-0065
              </a>
            </Button>
          </div>

          {/* Trust Line */}
          <div
            className={`mt-16 pt-8 border-t border-border/30 transition-all duration-1000 delay-450 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-muted-foreground">
              Melayani Jakarta Barat • Tangerang • Bandara Soekarno-Hatta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
