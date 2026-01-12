import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Kontak = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = encodeURIComponent(
      `Halo CV.ROMO GLOBAL JAYA,\n\nNama: ${formData.name}\nTelepon: ${formData.phone}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    );
    const whatsappLink = `https://wa.me/628561433002?text=${whatsappMessage}`;

    setTimeout(() => {
      window.open(whatsappLink, "_blank");
      setIsSubmitting(false);
      toast({
        title: "Mengarahkan ke WhatsApp",
        description: "Silakan lanjutkan percakapan di WhatsApp.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: (
        <>
          CV.ROMO GLOBAL JAYA
          <br />
          VMFP+CR2, Jl. Husain Sastranegara,
          <br />
          Gg. Husain Sankan, RT 05 / RW 008,
          <br />
          Kel. Pegadungan, Kec. Kalideres,
          <br />
          Jakarta Barat
        </>
      ),
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0856-1433-002",
      link: "tel:+628561433002",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@globalromojaya.com",
      link: "mailto:info@globalromojaya.com",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: (
        <>
          Booking: 24 Jam
          <br />
          Kantor: Senin - Sabtu, 08.00 - 17.00 WIB
        </>
      ),
    },
  ];

  const quickActions = [
    {
      label: "Rental Harian",
      message: "Halo, saya ingin menanyakan rental mobil harian.",
    },
    {
      label: "Dengan Driver",
      message: "Halo, saya butuh rental mobil dengan driver.",
    },
    {
      label: "Antar Bandara",
      message: "Halo, saya butuh layanan antar-jemput bandara.",
    },
    {
      label: "Event/Wedding",
      message: "Halo, saya ingin rental mobil untuk acara/wedding.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Kontak - CV.ROMO GLOBAL JAYA</title>
        <meta
          name="description"
          content="Hubungi CV.ROMO GLOBAL JAYA untuk rental mobil di Jakarta Barat. Alamat: Jl. Husain Sastranegara, Kalideres. Telepon: 0856-1433-002. Layanan 24 jam."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>

          <div className="container-custom relative z-10 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Respon Cepat
                </span>
              </motion.div>

              <h1 className="heading-cinematic text-foreground mb-6">
                Hubungi
                <span className="block text-primary">Kami</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                Kami siap membantu kebutuhan transportasi Anda. Hubungi kami
                melalui WhatsApp untuk respon tercepat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Action Buttons */}
        <section className="bg-secondary py-8 border-b border-border">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {quickActions.map((action, index) => (
                <motion.a
                  key={action.label}
                  href={`https://wa.me/628561433002?text=${encodeURIComponent(
                    action.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-background border border-border rounded-full text-sm font-medium text-secondary-foreground hover:border-primary hover:text-primary transition-all"
                >
                  {action.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="bg-secondary py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Contact Info - Left Side */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                    Informasi Kontak
                  </p>
                  <h2 className="heading-section text-secondary-foreground mb-8">
                    Temukan Kami
                  </h2>
                </motion.div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-5 p-5 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="whatsapp"
                    size="xl"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/628561433002?text=Halo%20CV.ROMO%20GLOBAL%20JAYA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Chat WhatsApp Langsung
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Contact Form - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <div className="bg-background rounded-3xl p-8 md:p-10 border border-border">
                  <h2 className="heading-card text-secondary-foreground mb-2">
                    Kirim Pesan
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Isi form di bawah dan pesan akan dikirim via WhatsApp
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-secondary-foreground mb-2"
                        >
                          Nama Lengkap *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Masukkan nama Anda"
                          required
                          className="bg-card border-border h-12"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-secondary-foreground mb-2"
                        >
                          Nomor WhatsApp *
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="08xx-xxxx-xxxx"
                          required
                          className="bg-card border-border h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary-foreground mb-2"
                      >
                        Email (Opsional)
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="email@anda.com"
                        className="bg-card border-border h-12"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-secondary-foreground mb-2"
                      >
                        Pesan *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tuliskan kebutuhan rental mobil Anda: jenis mobil, tanggal, tujuan, dll..."
                        rows={5}
                        required
                        className="bg-card border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="whatsapp"
                      size="xl"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
                          />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Kirim via WhatsApp
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>Respon cepat dalam 5 menit</span>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section - Full Width */}
        <section className="section-dark py-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Lokasi
              </p>
              <h2 className="heading-section text-foreground">
                Kunjungi Kantor Kami
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-border"
            >
              <div className="aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.69!3d-6.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDcnNDguMCJTIDEwNsKwNDEnMjQuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi CV.ROMO GLOBAL JAYA"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl p-6 max-w-sm border border-border shadow-xl">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  CV.ROMO GLOBAL JAYA
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Jl. Husain Sastranegara, Kalideres, Jakarta Barat
                </p>
                <Button variant="outline-light" size="sm" asChild>
                  <a
                    href="https://maps.google.com/?q=CV.ROMO+GLOBAL+JAYA+Kalideres"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buka di Google Maps
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Kontak;
