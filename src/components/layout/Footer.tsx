import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const navigation = {
  layanan: [
    { name: "Rental Harian", href: "/layanan#daily-rental" },
    { name: "Lepas Kunci", href: "/layanan#self-drive" },
    { name: "Dengan Driver", href: "/layanan#with-driver" },
    { name: "Antar-Jemput Bandara", href: "/layanan#airport-transfer" },
    { name: "Event & Wedding", href: "/layanan#event-wedding" },
  ],
  armada: [
    { name: "Toyota Avanza", href: "/armada/avanza" },
    { name: "Toyota Innova", href: "/armada/innova" },
    { name: "Toyota Fortuner", href: "/armada/fortuner" },
    { name: "Toyota Alphard", href: "/armada/alphard" },
    { name: "Toyota Hiace", href: "/armada/hiace" },
  ],
  perusahaan: [
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
    { name: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img
                src="/logo.webp"
                alt="CV. ROMO GLOBAL JAYA"
                className="h-16 w-auto object-contain mb-4"
              />
              <h3 className="font-display text-xl font-semibold text-foreground">
                CV.ROMO GLOBAL JAYA
              </h3>
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-2">
                Rental Mobil Terpercaya
              </p>
            </div>
            <div className="space-y-5 text-sm text-muted-foreground">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                <p className="leading-relaxed">
                  VMFP+CR2, Jl. Husain Sastranegara,
                  <br />
                  Gg. Husain Sankan, RT 05 / RW 008,
                  <br />
                  Kel. Pegadungan, Kec. Kalideres,
                  <br />
                  Jakarta Barat
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <a
                  href="tel:+6281380300065"
                  className="hover:text-foreground transition-colors"
                >
                  0813-8030-0065
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@globalromojaya.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@globalromojaya.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Clock className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>24 Jam (Layanan Booking)</span>
              </div>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Layanan
            </h4>
            <ul className="space-y-4">
              {navigation.layanan.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Armada */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Armada Populer
            </h4>
            <ul className="space-y-4">
              {navigation.armada.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Perusahaan
            </h4>
            <ul className="space-y-4">
              {navigation.perusahaan.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi Kami */}
          <div>
            <h4 className="font-display text-lg font-medium text-foreground mb-6">
              Lokasi Kami
            </h4>
            <div className="rounded-lg overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.031298324674!2d106.6870209!3d-6.1264905999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a03002afdf887%3A0x66151606a5431b81!2sCV%20GLOBAL%20JAYA!5e0!3m2!1sid!2sid!4v1768205918763!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV. ROMO GLOBAL JAYA"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CV.ROMO GLOBAL JAYA. Hak cipta
              dilindungi.
            </p>
            <p className="text-sm text-muted-foreground">
              Melayani Jakarta Barat, Tangerang, dan sekitar Bandara
              Soekarno-Hatta
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
