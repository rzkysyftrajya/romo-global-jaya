import { useEffect, useRef } from "react";
import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Show only 5 FAQs on homepage
  const displayedFaqs = faqs.slice(0, 5);

  return (
    <section ref={sectionRef} className="section-dark py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Header */}
          <div>
            <p className="animate-on-scroll opacity-0 text-sm font-medium text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2
              className="animate-on-scroll opacity-0 heading-section text-foreground mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              Pertanyaan yang Sering Diajukan
            </h2>
            <p
              className="animate-on-scroll opacity-0 text-muted-foreground leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Temukan jawaban untuk pertanyaan umum seputar layanan rental mobil
              kami. Jika masih ada yang perlu ditanyakan, jangan ragu untuk
              menghubungi tim kami via WhatsApp.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div
            className="animate-on-scroll opacity-0"
            style={{ animationDelay: "0.3s" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {displayedFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
