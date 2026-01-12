import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { services, packages } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Layanan = () => {
  const [activeService, setActiveService] = useState(0);

  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya ingin menanyakan tentang layanan rental mobil."
  );
  const whatsappLink = `https://wa.me/628561433002?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Layanan Rental Mobil - CV.ROMO GLOBAL JAYA</title>
        <meta
          name="description"
          content="Layanan rental mobil lengkap: harian, lepas kunci, dengan driver, antar-jemput bandara, dan event wedding. Melayani Jakarta Barat dan sekitarnya."
        />
      </Helmet>

      <Layout>
        {/* Cinematic Hero */}
        <section className="relative min-h-[70vh] flex items-center section-dark overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src="/hero-section.webp"
                alt="Service"
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Layanan Premium
                </span>
              </motion.div>

              <h1 className="heading-cinematic text-foreground mb-6">
                Solusi Transportasi
                <span className="block text-primary">Profesional</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Dari rental harian hingga layanan eksklusif untuk event spesial,
                kami siap melayani dengan standar tertinggi.
              </p>

              {/* Service quick nav */}
              <div className="flex flex-wrap gap-3">
                {services.slice(0, 4).map((service, index) => (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={() => {
                      document
                        .getElementById(service.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full text-sm text-foreground hover:bg-card hover:border-primary/50 transition-all"
                  >
                    {service.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services - Interactive Showcase */}
        <section className="bg-secondary py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Layanan Kami
              </p>
              <h2 className="heading-section text-secondary-foreground">
                Pilih Layanan Sesuai Kebutuhan
              </h2>
            </motion.div>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                    activeService === index
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-background text-secondary-foreground hover:bg-background/80 border border-border"
                  )}
                >
                  {service.title}
                </motion.button>
              ))}
            </div>

            {/* Active Service Display */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              <div id={services[activeService].id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="heading-section text-secondary-foreground mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {services[activeService].description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-secondary-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <Button variant="whatsapp" size="lg" asChild>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tanya Layanan Ini
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="section-dark py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="heading-section text-foreground mb-4">
                Semua Layanan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jelajahi berbagai layanan yang kami tawarkan untuk memenuhi
                kebutuhan transportasi Anda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full bg-card rounded-2xl overflow-hidden hover-lift">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        <span>Selengkapnya</span>
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages - Premium Cards */}
        <section className="bg-secondary py-24">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
                Paket & Promo
              </p>
              <h2 className="heading-section text-secondary-foreground mb-4">
                Pilih Paket Terbaik
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dapatkan harga spesial dengan paket rental yang disesuaikan
                dengan durasi perjalanan Anda.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={cn(
                    "relative bg-background rounded-2xl p-8 border-2 transition-all duration-300",
                    pkg.popular
                      ? "border-primary shadow-xl shadow-primary/20"
                      : "border-border hover:border-primary/50"
                  )}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        POPULER
                      </span>
                    </div>
                  )}

                  <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    {pkg.duration}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {pkg.description}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <span className="text-lg font-bold text-primary">
                      {pkg.discount}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative section-dark py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-section.webp"
              alt="CTA Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="heading-section text-foreground mb-6">
                Butuh Layanan Khusus?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Kami bisa menyesuaikan layanan sesuai kebutuhan spesifik Anda.
                Hubungi tim kami untuk konsultasi gratis.
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Layanan;
