import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Play,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";

// Type untuk gallery item
export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  src: string;
  thumbnail: string;
  alt: string;
}

// Data galeri dari folder public/galeri-armada/
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "video",
    src: "/galeri-armada/galeri-armada-1.mp4",
    thumbnail: "/galeri-armada/galeri-armada-1.mp4",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "2",
    type: "video",
    src: "/galeri-armada/galeri-armada-2.mp4",
    thumbnail: "/galeri-armada/galeri-armada-2.mp4",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "3",
    type: "video",
    src: "/galeri-armada/galeri-armada-3.mp4",
    thumbnail: "/galeri-armada/galeri-armada-3.mp4",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "4",
    type: "video",
    src: "/galeri-armada/galeri-armada-4.mp4",
    thumbnail: "/galeri-armada/galeri-armada-4.mp4",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "5",
    type: "video",
    src: "/galeri-armada/galeri-armada-5.mp4",
    thumbnail: "/galeri-armada/galeri-armada-5.mp4",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "6",
    type: "video",
    src: "/galeri-armada/galeri-armada-6.mp4",
    thumbnail: "/galeri-armada/galeri-armada-6.mp4",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "8",
    type: "photo",
    src: "/galeri-armada/galeri-armada-8.webp",
    thumbnail: "/galeri-armada/galeri-armada-8.webp",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "9",
    type: "photo",
    src: "/galeri-armada/galeri-armada-9.webp",
    thumbnail: "/galeri-armada/galeri-armada-9.webp",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "10",
    type: "photo",
    src: "/galeri-armada/galeri-armada-10.webp",
    thumbnail: "/galeri-armada/galeri-armada-10.webp",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "11",
    type: "photo",
    src: "/galeri-armada/galeri-armada-11.webp",
    thumbnail: "/galeri-armada/galeri-armada-11.webp",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "12",
    type: "photo",
    src: "/galeri-armada/galeri-armada-12.webp",
    thumbnail: "/galeri-armada/galeri-armada-12.webp",
    alt: "Galeri Armada Romo Global Jaya",
  },
  {
    id: "13",
    type: "photo",
    src: "/galeri-armada/galeri-armada-13.webp",
    thumbnail: "/galeri-armada/galeri-armada-13.webp",
    alt: "Galeri Armada Romo Global Jaya",
  },
];

export function FleetGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
        : (lightboxIndex + 1) % galleryItems.length;
    setLightboxIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  return (
    <>
      <section ref={sectionRef} className="section-dark py-24 md:py-32">
        <div className="container-custom">
          {/* Section Header */}
          <div
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className={`text-sm font-medium text-primary uppercase tracking-widest mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Galeri Armada
            </p>
            <h2
              className={`heading-section text-foreground mb-6 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Dokumentasi Armada Kami
            </h2>
            <p
              className={`text-muted-foreground text-lg transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Lihat langsung kondisi armada rental mobil kami melalui foto dan
              video dokumentasi kegiatan.
            </p>
          </div>

          {/* Gallery Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-[4/3] overflow-hidden bg-muted rounded-xl cursor-pointer transition-all duration-500 hover:shadow-xl ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
                onClick={() => openLightbox(item, index)}
              >
                {/* Image/Video Display */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-primary-foreground" />
                    </div>
                    {item.type === "video" && (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                        <Play className="w-4 h-4" />
                        Tonton Video
                      </span>
                    )}
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                      item.type === "video"
                        ? "bg-red-500/90 text-white"
                        : "bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    {item.type === "video" ? (
                      <span className="flex items-center gap-1">
                        <Play className="w-3 h-3" />
                        Video
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <ImageIcon className="w-3 h-3" />
                        Foto
                      </span>
                    )}
                  </span>
                </div>

                {/* Number Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground rounded">
                    {index + 1}/{galleryItems.length}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button variant="outline-light" size="lg">
              <ImageIcon className="w-5 h-5 mr-2" />
              Lihat Semua Galeri
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Content */}
          <div
            className="max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "video" ? (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="w-full aspect-video rounded-lg"
              >
                Browser Anda tidak mendukung tag video.
              </video>
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 mt-2">
                {lightboxIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 md:hidden">
            <button
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
