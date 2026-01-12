import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya ingin menanyakan tentang rental mobil."
  );
  const whatsappLink = `https://wa.me/628561433002?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat via WhatsApp"
    >
      <Button
        variant="whatsapp-floating"
        size="icon-lg"
        className="shadow-2xl p-0 overflow-hidden"
      >
        <img
          src="/wa.png"
          alt="WhatsApp"
          className="w-full h-full object-cover"
        />
      </Button>
    </a>
  );
}
