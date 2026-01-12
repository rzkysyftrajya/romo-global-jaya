import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () =>
      scrollContainer?.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.querySelector(".testimonial-card")?.clientWidth ||
        400;
      const scrollAmount =
        direction === "left" ? -cardWidth - 24 : cardWidth + 24;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="section-graphite py-24 md:py-32 overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <p
              className={`text-sm font-medium text-primary uppercase tracking-widest mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Testimoni
            </p>
            <h2
              className={`heading-section text-foreground transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Apa Kata Pelanggan Kami
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div
            className={`flex gap-3 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => handleCardClick(index)}
              className={`testimonial-card flex-shrink-0 w-[350px] md:w-[420px] p-8 cursor-pointer snap-start transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${
                activeIndex === index
                  ? "bg-background border border-primary/30"
                  : "bg-background/50 border border-transparent hover:bg-background/80"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      activeIndex === index
                        ? "fill-primary text-primary"
                        : "fill-muted-foreground/50 text-muted-foreground/50"
                    } transition-colors duration-300`}
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className={`leading-relaxed mb-8 text-lg ${
                  activeIndex === index
                    ? "text-foreground"
                    : "text-muted-foreground"
                } transition-colors duration-300`}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
