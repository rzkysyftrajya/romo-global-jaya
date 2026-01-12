import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Armada Terawat Prima",
    description:
      "Setiap unit melewati pemeriksaan menyeluruh sebelum diserahkan. Interior bersih, mesin optimal, AC dingin – standar yang tidak kami kompromikan.",
  },
  {
    number: "02",
    title: "Driver Berpengalaman",
    description:
      "Tim driver profesional kami hafal rute Jabodetabek, berseragam rapi, dan terlatih memberikan pengalaman perjalanan yang nyaman.",
  },
  {
    number: "03",
    title: "Responsif 24 Jam",
    description:
      "Booking tengah malam? Perubahan jadwal mendadak? Tim customer service kami selalu siap merespons kapanpun Anda membutuhkan.",
  },
  {
    number: "04",
    title: "Harga Transparan",
    description:
      "Apa yang kami tawarkan adalah apa yang Anda bayar. Tidak ada biaya tersembunyi, tidak ada kejutan di akhir perjalanan.",
  },
];

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".feature-item");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-light py-24 md:py-32">
      <div className="container-custom">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Sticky Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Mengapa Memilih Kami
            </p>
            <h2 className="heading-section text-secondary-foreground mb-6">
              Kepercayaan yang Dibangun dari Pengalaman
            </h2>
            <p className="text-lg text-secondary-foreground/70 leading-relaxed mb-8">
              Lebih dari dua tahun melayani kebutuhan transportasi di Jakarta
              Barat dan sekitarnya. Kami memahami bahwa setiap perjalanan adalah
              kepercayaan yang harus dijaga.
            </p>
            <div className="h-1 w-24 bg-primary" />
          </div>

          {/* Right: Features List */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                data-index={index}
                className={`feature-item transition-all duration-700 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <span className="font-display text-5xl font-semibold text-primary/30">
                      {feature.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-2xl font-medium text-secondary-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-foreground/70 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
