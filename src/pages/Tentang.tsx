import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Users,
  Clock,
  MapPin,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Tentang = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const whatsappMessage = encodeURIComponent(
    "Halo CV.ROMO GLOBAL JAYA, saya ingin mengetahui lebih lanjut tentang layanan Anda."
  );
  const whatsappLink = `https://wa.me/6281380300065?text=${whatsappMessage}`;

  const stats = [
    { number: "2+", label: "Tahun Pengalaman", icon: Clock },
    { number: "50+", label: "Unit Armada", icon: Award },
    { number: "5000+", label: "Pelanggan Puas", icon: Users },
    { number: "3", label: "Area Layanan", icon: MapPin },
  ];

  const values = [
    {
      icon: Heart,
      title: "Kepercayaan",
      description:
        "Kami menghargai kepercayaan yang diberikan pelanggan. Setiap janji yang kami buat, kami tepati tanpa kompromi.",
    },
    {
      icon: Award,
      title: "Kualitas",
      description:
        "Armada prima, driver profesional, dan layanan responsif adalah standar minimum yang kami jaga konsisten.",
    },
    {
      icon: Target,
      title: "Integritas",
      description:
        "Harga transparan, tanpa biaya tersembunyi. Apa yang kami sampaikan, itulah yang Anda dapatkan.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Awal Mula",
      desc: "Bermula dengan 3 unit kendaraan dan komitmen layanan terbaik",
    },
    {
      year: "2024",
      title: "Tumbuh Pesat",
      desc: "Memperluas armada hingga 20 unit dengan berbagai jenis mobil",
    },
    {
      year: "2025",
      title: "Layanan Premium",
      desc: "Menambahkan unit Alphard, Fortuner, dan Hiace untuk kebutuhan VIP",
    },
    {
      year: "2026",
      title: "50+ Armada",
      desc: "Menjadi rental mobil terlengkap di Jakarta Barat dan sekitarnya",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Kami - CV.ROMO GLOBAL JAYA</title>
        <meta
          name="description"
          content="CV.ROMO GLOBAL JAYA adalah perusahaan rental mobil terpercaya di Jakarta Barat dengan pengalaman lebih dari 2 tahun melayani kebutuhan transportasi."
        />
      </Helmet>

      <Layout>
        {/* Cinematic Hero */}
        <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src="/hero-section.webp"
                alt="About Hero"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          </div>

          <div className="container-custom relative z-10 pt-32 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6"
                >
                  <span className="text-sm font-medium text-primary">
                    Sejak 2023
                  </span>
                </motion.div>

                <h1 className="heading-cinematic text-foreground mb-6">
                  Mitra Perjalanan
                  <span className="block text-primary">Terpercaya</span>
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Lebih dari dua tahun mengantarkan ribuan pelanggan ke tujuan
                  mereka dengan aman, nyaman, dan tepat waktu.
                </p>

                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hubungi Kami
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Story Section - Split Layout */}
        <section
          ref={containerRef}
          className="section-stone py-32 overflow-hidden"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  style={{ y }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src="/tentang-kami.png"
                    alt="Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl"
                >
                  <div className="text-5xl font-bold">2+</div>
                  <div className="text-sm opacity-80">Tahun Melayani</div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Cerita Kami
                </p>
                <h2 className="heading-section text-secondary-foreground mb-8">
                  Dari Garasi Kecil Menuju Armada Lengkap
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    CV.ROMO GLOBAL JAYA didirikan pada tahun 2023 dengan visi
                    sederhana: menyediakan layanan rental mobil yang bisa
                    dipercaya sepenuhnya oleh masyarakat Jakarta dan sekitarnya.
                  </p>
                  <p>
                    Bermula dari 3 unit kendaraan dan tim kecil yang solid, kami
                    tumbuh menjadi perusahaan dengan lebih dari 50 unit armada
                    beragam. Dari Toyota Avanza untuk keluarga, hingga Toyota
                    Alphard untuk kebutuhan eksekutif dan wedding.
                  </p>
                  <p>
                    Selama lebih dari dua tahun, kami telah melayani ribuan
                    pelanggan — dari mahasiswa yang butuh mobil untuk wisuda,
                    pengusaha yang memerlukan transportasi bisnis, hingga
                    keluarga besar yang ingin libur dengan nyaman.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-dark py-32">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Perjalanan Kami
              </p>
              <h2 className="heading-section text-foreground">
                Milestone & Pencapaian
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 === 0
                          ? "lg:text-right lg:pr-16"
                          : "lg:order-2 lg:pl-16"
                      }`}
                    >
                      <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">{milestone.desc}</p>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden lg:block" />

                    <div className={index % 2 === 0 ? "lg:order-2" : ""} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission - Cards */}
        <section className="section-stone py-32">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-3xl p-10 lg:p-12"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-section text-secondary-foreground mb-6">
                  Visi
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi perusahaan rental mobil pilihan utama di Jakarta Barat
                  dan sekitarnya, yang dikenal karena kualitas armada,
                  profesionalisme layanan, dan kepercayaan pelanggan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-background rounded-3xl p-10 lg:p-12"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-section text-secondary-foreground mb-6">
                  Misi
                </h3>
                <ul className="space-y-4">
                  {[
                    "Menyediakan armada yang terawat, bersih, dan layak jalan.",
                    "Memberikan layanan yang responsif, ramah, dan profesional.",
                    "Menawarkan harga yang transparan dan kompetitif.",
                    "Membangun hubungan jangka panjang berdasarkan kepercayaan.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <span className="font-display text-lg font-bold text-primary">
                        0{index + 1}
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-dark py-32">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Nilai-Nilai Kami
              </p>
              <h2 className="heading-section text-foreground mb-4">
                Prinsip yang Kami Pegang Teguh
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative section-stone py-32 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="container-custom"
          >
            <div className="relative bg-primary rounded-3xl p-12 md:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')] bg-cover bg-center opacity-10" />

              <div className="relative z-10">
                <h2 className="heading-section text-primary-foreground mb-6">
                  Siap Bekerja Sama dengan Kami?
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Hubungi kami untuk mendiskusikan kebutuhan transportasi Anda.
                  Tim kami siap memberikan solusi terbaik.
                </p>
                <Button variant="beige" size="xl" asChild>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hubungi Kami Sekarang
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default Tentang;
