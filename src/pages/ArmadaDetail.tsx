import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { vehicles } from "@/data/fleet";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Users,
  Fuel,
  Settings,
  Check,
  Shield,
  Clock,
  MapPin,
  Star,
  ChevronRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const ArmadaDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  // Get related vehicles
  const relatedVehicles = vehicles
    .filter((v) => v.category === vehicle?.category && v.id !== vehicle?.id)
    .slice(0, 3);

  if (!vehicle) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center section-dark">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h1 className="heading-section text-foreground mb-4">
              Kendaraan Tidak Ditemukan
            </h1>
            <p className="text-muted-foreground mb-8">
              Maaf, kendaraan yang Anda cari tidak tersedia.
            </p>
            <Button asChild variant="whatsapp">
              <Link to="/armada">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Armada
              </Link>
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Halo CV.ROMO GLOBAL JAYA, saya ingin memesan ${vehicle.name}. Mohon informasi ketersediaan dan harga.`
  );
  const whatsappLink = `https://wa.me/6281380300065?text=${whatsappMessage}`;

  const highlights = [
    { icon: Shield, label: "Asuransi Lengkap", desc: "All-risk coverage" },
    { icon: Clock, label: "24/7 Support", desc: "Bantuan darurat" },
    { icon: MapPin, label: "Free Delivery", desc: "Area Jakarta Barat" },
  ];

  return (
    <>
      <Helmet>
        <title>Sewa {vehicle.name} - CV.ROMO GLOBAL JAYA</title>
        <meta
          name="description"
          content={`Sewa ${vehicle.name}. ${vehicle.description}`}
        />
      </Helmet>

      <Layout>
        {/* Hero Section with Full-width Image */}
        <section className="relative min-h-[60vh] section-dark overflow-hidden">
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="container-custom relative z-10 pt-32 pb-16">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link
                to="/armada"
                className="hover:text-foreground transition-colors"
              >
                Armada
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{vehicle.name}</span>
            </motion.div>

            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-4"
              >
                <span className="text-sm font-medium text-primary">
                  {vehicle.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-cinematic text-foreground mb-4"
              >
                {vehicle.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground mb-8"
              >
                {vehicle.description}
              </motion.p>

              {/* Quick specs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-foreground">
                    {vehicle.capacity} Penumpang
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                  <Settings className="w-4 h-4 text-primary" />
                  <span className="text-foreground">
                    {vehicle.transmission}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                  <Fuel className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{vehicle.fuel}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-secondary py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Details */}
              <div className="lg:col-span-2 space-y-12">
                {/* Vehicle Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-card text-secondary-foreground mb-4">
                    {vehicle.name}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {vehicle.description}
                  </p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-card text-secondary-foreground mb-6">
                    Fitur Kendaraan
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {vehicle.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-secondary-foreground font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="heading-card text-secondary-foreground mb-6">
                    Keunggulan Layanan
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-6 bg-background rounded-xl border border-border"
                      >
                        <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                          <item.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-semibold text-secondary-foreground mb-1">
                          {item.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Booking Card (Sticky) */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-32"
                >
                  <div className="bg-background rounded-2xl p-6 shadow-xl border border-border">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        4.9 (120+ review)
                      </span>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 mb-6">
                      {[
                        "Free delivery area Jakarta Barat",
                        "Asuransi all-risk",
                        "Support 24/7",
                        "Driver berpengalaman",
                        "BBM termasuk",
                      ].map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="whatsapp"
                      size="xl"
                      className="w-full"
                      asChild
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tanya Harga & Booking
                      </a>
                    </Button>

                    <p className="text-center text-xs text-muted-foreground mt-4">
                      Respon cepat via WhatsApp
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <section className="section-dark py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-between items-end mb-12"
              >
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                    Rekomendasi
                  </p>
                  <h2 className="heading-section text-foreground">
                    Kendaraan Serupa
                  </h2>
                </div>
                <Button variant="ghost-light" asChild>
                  <Link to="/armada">
                    Lihat Semua
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedVehicles.map((v, index) => (
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={`/armada/${v.id}`} className="group block">
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-lg font-semibold text-foreground">
                            {v.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {v.category}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back Button */}
        <section className="bg-secondary py-8">
          <div className="container-custom">
            <Link
              to="/armada"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Daftar Armada
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ArmadaDetail;
