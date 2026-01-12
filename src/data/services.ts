export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: "daily-rental",
    title: "Rental Harian",
    description:
      "Sewa mobil harian dengan fleksibilitas maksimal. Cocok untuk keperluan bisnis, wisata, atau kebutuhan pribadi sehari-hari.",
    features: [
      "Durasi minimal 12 jam",
      "Kilometer tidak terbatas dalam kota",
      "Tersedia opsi lepas kunci atau dengan driver",
      "Penjemputan dan pengantaran gratis area Jakarta Barat",
    ],
    image: "/layanan/rental-mobil-harian.webp",
  },
  {
    id: "self-drive",
    title: "Lepas Kunci",
    description:
      "Kebebasan berkendara tanpa driver. Ideal untuk Anda yang terbiasa menyetir sendiri dan menginginkan privasi penuh.",
    features: [
      "Deposit sesuai ketentuan",
      "Wajib memiliki SIM A aktif",
      "Asuransi kecelakaan termasuk",
      "Bebas ke mana saja sesuai kesepakatan",
    ],
    image: "/layanan/lepas-kunci.webp",
  },
  {
    id: "with-driver",
    title: "Dengan Driver",
    description:
      "Perjalanan nyaman dengan driver berpengalaman. Fokus pada aktivitas Anda, biarkan kami yang mengemudi.",
    features: [
      "Driver profesional berseragam",
      "Hafal rute Jakarta, Tangerang, dan sekitarnya",
      "Sopan dan ramah",
      "Overtime dihitung per jam",
    ],
    image: "/layanan/dengan-driver.webp",
  },
  {
    id: "airport-transfer",
    title: "Antar-Jemput Bandara",
    description:
      "Layanan eksklusif transfer dari dan ke Bandara Soekarno-Hatta. Tepat waktu, nyaman, tanpa ribet.",
    features: [
      "Monitoring jadwal penerbangan",
      "Gratis waktu tunggu hingga 60 menit",
      "Meet & greet di arrival hall",
      "Bantuan bagasi oleh driver",
    ],
    image: "/layanan/antar-jemput-bandara.webp",
  },
  {
    id: "event-wedding",
    title: "Event & Wedding",
    description:
      "Armada premium untuk acara istimewa Anda. Alphard, Vellfire, dan unit eksklusif lainnya siap menemani hari spesial.",
    features: [
      "Dekorasi mobil sesuai request",
      "Driver berpakaian formal",
      "Mobil dikondisikan khusus untuk pengantin",
      "Backup unit standby untuk antisipasi",
    ],
    image: "/layanan/event-dan-weeding.webp",
  },
];

export interface Package {
  id: string;
  name: string;
  duration: string;
  description: string;
  discount: string;
  popular?: boolean;
}

export const packages: Package[] = [
  {
    id: "harian",
    name: "Paket Harian",
    duration: "1 hari (12 jam)",
    description:
      "Fleksibel untuk kebutuhan sehari-hari. Bisa dengan driver atau lepas kunci.",
    discount: "Harga normal",
  },
  {
    id: "mingguan",
    name: "Paket Mingguan",
    duration: "7 hari",
    description:
      "Hemat hingga 15% dari harga harian. Ideal untuk perjalanan bisnis atau liburan panjang.",
    discount: "Hemat 15%",
    popular: true,
  },
  {
    id: "bulanan",
    name: "Paket Bulanan",
    duration: "30 hari",
    description:
      "Solusi ekonomis untuk kebutuhan jangka panjang. Diskon spesial untuk kontrak bulanan.",
    discount: "Hemat 25%",
  },
  {
    id: "wisata",
    name: "Paket Wisata",
    duration: "Sesuai destinasi",
    description:
      "Paket all-in untuk wisata ke Bandung, Jogja, Bali, dan destinasi favorit lainnya.",
    discount: "All-inclusive",
  },
];
