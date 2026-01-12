import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCTABar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage > 25 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya butuh mobil hari ini."
  );
  const whatsappLink = `https://wa.me/6281380300065?text=${whatsappMessage}`;

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 p-4 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="container-custom">
        <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg p-4 flex items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 items-center justify-center bg-primary/20 rounded-full">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-display text-lg font-medium text-foreground">
                Butuh mobil hari ini?
              </p>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Tim kami siap membantu 24 jam via WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm transition-colors whitespace-nowrap"
            >
              Chat WhatsApp
            </a>
            <button
              onClick={handleDismiss}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
