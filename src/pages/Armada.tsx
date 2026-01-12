import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { vehicles, categories, VehicleCategory } from "@/data/fleet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Gauge, ChevronDown } from "lucide-react";

const Armada = () => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory | "all">(
    "all"
  );
  const [hoveredVehicle, setHoveredVehicle] = useState<string | null>(null);

  const filteredVehicles =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  // Stats for hero
  const stats = [
    { number: "50+", label: "Unit Armada" },
    { number: "2+", label: "Tahun Pengalaman" },
    { number: "5000+", label: "Pelanggan Puas" },
  ];

  return (
    <>
      <Helmet>
        <title>Armada Rental Mobil - CV.ROMO GLOBAL JAYA</title>
        <meta
          name="description"
          content="Pilihan armada rental mobil lengkap: Avanza, Innova, Fortuner, Alphard, Hiace dan lainnya. Semua unit terawat dan siap antar ke lokasi Anda."
        />
      </Helmet>

      <Layout>
        {/* Cinematic Hero */}
        <section className="relative min-h-[80vh] flex items-center section-dark overflow-hidden">
          {/* Background with parallax */}
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src="/hero-section.webp"
                alt="Luxury Car"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>

          <div className="container-custom relative z-10 pt-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6"
                >
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    Armada Lengkap & Terawat
                  </span>
                </motion.div>

                <h1 className="heading-cinematic text-foreground mb-6">
                  Pilihan Kendaraan
                  <span className="block text-primary">Premium</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Dari MPV ekonomis hingga minibus mewah, semua unit kami
                  terawat prima dan siap menemani perjalanan Anda.
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-foreground">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-2 text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  onClick={() =>
                    document
                      .getElementById("fleet-grid")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className="text-sm">Jelajahi Armada</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Featured vehicle preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 overflow-hidden">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                      <img
                        src={vehicles.find((v) => v.id === "fortuner")?.image}
                        alt={vehicles.find((v) => v.id === "fortuner")?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-sm text-primary mb-1">
                          Unit Favorit
                        </p>
                        <h3 className="text-2xl font-display font-semibold text-foreground">
                          {vehicles.find((v) => v.id === "fortuner")?.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <Button variant="whatsapp" size="sm" asChild>
                          <a
                            href={`https://wa.me/628561433002?text=Halo%20CV.ROMO%20GLOBAL%20JAYA%2C%20saya%20ingin%20informasi%20tentang%20${encodeURIComponent(
                              vehicles.find((v) => v.id === "fortuner")?.name ||
                                ""
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
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section id="fleet-grid" className="bg-secondary py-8">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.value)}
                  className={cn(
                    "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category.value
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-background/80 text-secondary-foreground hover:bg-background border border-border"
                  )}
                >
                  {category.label}
                  {category.value !== "all" && (
                    <span className="ml-2 text-xs opacity-60">
                      (
                      {
                        vehicles.filter((v) => v.category === category.value)
                          .length
                      }
                      )
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Fleet Grid - Cinematic Cards */}
        <section className="bg-secondary py-16 pb-24">
          <div className="container-custom">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {filteredVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                    onMouseLeave={() => setHoveredVehicle(null)}
                  >
                    <Link
                      to={`/armada/${vehicle.id}`}
                      className="group block h-full"
                    >
                      <div className="relative bg-background rounded-2xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                        {/* Image Container */}
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <motion.img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-full h-full object-cover object-center"
                            animate={{
                              scale: hoveredVehicle === vehicle.id ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.6 }}
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                          {/* Category badge */}
                          <div className="absolute top-4 right-4">
                            <motion.span
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="px-4 py-2 bg-background/90 backdrop-blur-md text-xs font-semibold text-foreground rounded-full border border-border/50"
                            >
                              {vehicle.category}
                            </motion.span>
                          </div>

                          {/* Quick info on hover */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: hoveredVehicle === vehicle.id ? 1 : 0,
                              y: hoveredVehicle === vehicle.id ? 0 : 20,
                            }}
                            className="absolute bottom-4 left-4 right-4 flex gap-3"
                          >
                            <div className="flex items-center gap-2 px-3 py-2 bg-background/90 backdrop-blur-md rounded-full text-sm">
                              <Users className="w-4 h-4 text-primary" />
                              <span className="text-foreground">
                                {vehicle.capacity} Orang
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-background/90 backdrop-blur-md rounded-full text-sm">
                              <Gauge className="w-4 h-4 text-primary" />
                              <span className="text-foreground">
                                {vehicle.transmission}
                              </span>
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {vehicle.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                            {vehicle.description}
                          </p>

                          {/* CTA Button */}
                          <div className="pt-4 border-t border-border">
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-primary font-medium mb-3"
                            >
                              <span>Lihat Detail</span>
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                            <Button
                              variant="whatsapp"
                              size="sm"
                              className="w-full"
                              asChild
                            >
                              <a
                                href={`https://wa.me/628561433002?text=Halo%20CV.ROMO%20GLOBAL%20JAYA%2C%20saya%20ingin%20pemesanan%20${encodeURIComponent(
                                  vehicle.name
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Pesan ${vehicle.name} via WhatsApp`}
                              >
                                Pesan via WhatsApp
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-dark py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-section.webp')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="heading-section text-foreground mb-6">
                Tidak Menemukan yang Dicari?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Hubungi kami untuk konsultasi gratis. Tim kami siap membantu
                menemukan kendaraan yang tepat untuk kebutuhan Anda.
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/628561433002?text=Halo%20CV.ROMO%20GLOBAL%20JAYA%2C%20saya%20ingin%20konsultasi%20tentang%20rental%20mobil."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi via WhatsApp
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

export default Armada;
