import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { vehicles } from "@/data/fleet";

export function FleetPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show only 6 featured vehicles (premium lineup)
  const featuredVehicleIds = [
    "alphard",
    "hiace-premio",
    "innova-zenix",
    "innova-reborn",
    "fortuner",
    "pajero",
  ];
  const featuredVehicles = vehicles.filter((v) =>
    featuredVehicleIds.includes(v.id)
  );

  const whatsappMessage = (vehicleName: string) =>
    encodeURIComponent(
      `Halo CV.ROMO GLOBAL JAYA, saya tertarik dengan ${vehicleName}. Apakah tersedia?`
    );

  return (
    <section ref={sectionRef} className="section-dark py-24 md:py-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p
              className={`text-sm font-medium text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Armada Kami
            </p>
            <h2
              className={`heading-section text-foreground transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Pilihan Unit untuk Setiap Kebutuhan
            </h2>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button variant="outline-light" asChild>
              <Link to="/armada">
                Lihat Semua Armada
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Fleet Grid with Cinematic Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredVehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`group relative bg-card overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                  <Link
                    to={`/armada/${vehicle.id}`}
                    className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium"
                  >
                    Lihat Detail
                  </Link>
                  <a
                    href={`https://wa.me/6281380300065?text=${whatsappMessage(
                      vehicle.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                  >
                    Tanya Harga
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground uppercase tracking-wider">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-2">
                      {vehicle.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{vehicle.capacity} Penumpang</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{vehicle.transmission}</span>
                    </div>
                  </div>
                  <Button variant="whatsapp" size="sm" asChild>
                    <a
                      href={`https://wa.me/6281380300065?text=${whatsappMessage(
                        vehicle.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tanya Harga
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
