export type VehicleCategory =
  | "MPV"
  | "SUV"
  | "Premium"
  | "Minibus"
  | "City Car"
  | "Pickup Truck";

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  capacity: number;
  transmission: string;
  fuel: string;
  features: string[];
  description: string;
}

export const vehicles: Vehicle[] = [
  // MPV
  {
    id: "agya",
    name: "Toyota Agya",
    category: "MPV",
    image: "/armada/agya.webp",
    capacity: 5,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "Power Window", "Kaca Film"],
    description:
      "Hatchback compact yang ekonomis dan irit bahan bakar. Cocok untuk mobilitas sehari-hari di perkotaan.",
  },
  {
    id: "avanza",
    name: "Toyota Avanza",
    category: "MPV",
    image: "/armada/avanza.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC Double Blower", "Audio System", "USB Charger", "Kaca Film"],
    description:
      "Pilihan ekonomis untuk keluarga dengan kapasitas 7 penumpang. Cocok untuk perjalanan dalam kota dan antar kota.",
  },
  {
    id: "ayla",
    name: "Toyota Ayla",
    category: "MPV",
    image: "/armada/ayla.webp",
    capacity: 5,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "Power Window", "Central Lock"],
    description:
      "Mobil keluarga ekonomis dengan desain modern. Nyaman untuk penggunaan sehari-hari.",
  },
  {
    id: "brio",
    name: "Honda Brio",
    category: "City Car",
    image: "/armada/brio.webp",
    capacity: 5,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "USB Port", "Smart Key"],
    description:
      "City car responsif dengan desain sporty. Cocok untuk muda-mudi dan profesional muda.",
  },
  {
    id: "calya",
    name: "Toyota Calya",
    category: "MPV",
    image: "/armada/calya.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC Double Blower", "Audio System", "USB Charger", "Kaca Film"],
    description:
      "MPV 7 penumpang dengan harga terjangkau. Ideal untuk keluarga besar.",
  },
  {
    id: "sigra",
    name: "Toyota Sigra",
    category: "MPV",
    image: "/armada/sigra.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "Power Window", "Central Lock"],
    description:
      "MPV praktis dengan kabin luas. Cocok untuk keluarga Indonesia.",
  },
  {
    id: "innova-reborn",
    name: "Toyota Innova Reborn",
    category: "MPV",
    image: "/armada/innova-reborn.webp",
    capacity: 7,
    transmission: "Matic",
    fuel: "Diesel",
    features: ["AC Digital", "Leather Seat", "Cruise Control", "Keyless Entry"],
    description:
      "Legenda MPV Indonesia dengan kenyamanan premium. Ideal untuk perjalanan bisnis dan keluarga.",
  },
  {
    id: "innova-zenix",
    name: "Toyota Innova Zenix",
    category: "MPV",
    image: "/armada/innova-zenix.webp",
    capacity: 7,
    transmission: "Matic",
    fuel: "Bensin Hybrid",
    features: ["Hybrid Engine", "TSS Safety", "Captain Seat", "Panoramic Roof"],
    description:
      "Generasi terbaru Innova dengan teknologi hybrid. Efisien dan ramah lingkungan.",
  },
  {
    id: "mitsubishi-xpander",
    name: "Mitsubishi Xpander",
    category: "MPV",
    image: "/armada/mitsubishi-xpander.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC Digital", "Leather Seat", "Audio System", "Kaca Film"],
    description:
      "MPV dengan desain maskulin dan ruang bagasi luas. Cocok untuk keluarga aktif.",
  },
  {
    id: "suzuki-ertiga",
    name: "Suzuki Ertiga",
    category: "MPV",
    image: "/armada/suzuki-ertiga.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "USB Port", "Power Window"],
    description:
      "MPV irit bahan bakar dengan kabin nyaman. Cocok untuk penggunaan sehari-hari.",
  },
  {
    id: "suzuki-ertiga-hybrid",
    name: "Suzuki Ertiga Hybrid",
    category: "MPV",
    image: "/armada/suzuki-ertiga-hybrid.webp",
    capacity: 7,
    transmission: "Matic",
    fuel: "Bensin Hybrid",
    features: ["Hybrid System", "Smart Hybrid", "AC", "Audio System"],
    description:
      "Ertiga dengan teknologi hybrid untuk efisiensi bahan bakar maksimal.",
  },
  // SUV
  {
    id: "rush",
    name: "Toyota Rush",
    category: "SUV",
    image: "/armada/toyota-rush.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "Power Window", "Kaca Film"],
    description:
      "SUV dengan ground clearance tinggi. Cocok untuk jalan tidak rata dan outdoor.",
  },
  {
    id: "terios",
    name: "Daihatsu Terios",
    category: "SUV",
    image: "/armada/terios.webp",
    capacity: 7,
    transmission: "Manual / Matic",
    fuel: "Bensin",
    features: ["AC", "Audio System", "Power Window", "Kaca Film"],
    description:
      "SUV tangguh dengan desain sporty. Cocok untuk petualangan keluarga.",
  },
  {
    id: "fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    image: "/armada/toyota-fortuner.webp",
    capacity: 7,
    transmission: "Matic",
    fuel: "Diesel",
    features: ["4x4 Available", "Leather Interior", "Rear AC", "Hill Assist"],
    description:
      "SUV tangguh untuk segala medan. Sempurna untuk perjalanan wisata dan bisnis eksekutif.",
  },
  {
    id: "pajero",
    name: "Mitsubishi Pajero Sport",
    category: "SUV",
    image: "/armada/pajero.webp",
    capacity: 7,
    transmission: "Matic",
    fuel: "Diesel",
    features: ["Super Select 4WD", "8 Airbags", "360 Camera", "Leather Seat"],
    description:
      "SUV premium dengan kemampuan off-road legendaris. Cocok untuk petualangan dan tampil prestisius.",
  },
  // Premium
  {
    id: "alphard",
    name: "Toyota Alphard",
    category: "Premium",
    image: "/armada/toyota-alphard.webp",
    capacity: 7,
    transmission: "Matic",
    fuel: "Bensin",
    features: ["Executive Lounge", "Ottoman Seat", "JBL Sound", "Sunroof"],
    description:
      "Raja MPV premium Indonesia. Kenyamanan kelas satu untuk eksekutif dan acara spesial.",
  },
  // Minibus
  {
    id: "hiace-commuter",
    name: "Toyota Hiace Commuter",
    category: "Minibus",
    image: "/armada/hiace-commuter.webp",
    capacity: 15,
    transmission: "Matic",
    fuel: "Diesel",
    features: [
      "AC Ducting",
      "Reclining Seat",
      "Luggage Space",
      "Entertainment",
    ],
    description:
      "Minibus ideal untuk rombongan besar. Cocok untuk wisata, gathering, dan antar-jemput karyawan.",
  },
  {
    id: "hiace-premio",
    name: "Toyota Hiace Premio",
    category: "Minibus",
    image: "/armada/hiace-premio.webp",
    capacity: 10,
    transmission: "Matic",
    fuel: "Diesel",
    features: ["Captain Seat", "Individual AC", "USB Port", "Premium Interior"],
    description:
      "Hiace versi premium dengan kursi captain. Nyaman untuk perjalanan jauh dan VIP transport.",
  },
  {
    id: "isuzu-elf-minibus",
    name: "Isuzu Elf Long",
    category: "Minibus",
    image: "/armada/isuzu-elf-minibus.webp",
    capacity: 19,
    transmission: "Manual",
    fuel: "Diesel",
    features: ["AC Ducting", "Reclining Seat", "Large Luggage", "Microphone"],
    description:
      "Pilihan terbaik untuk rombongan besar hingga 19 orang. Efisien untuk tour dan gathering.",
  },
  // Pickup Truck
  {
    id: "hilux-double-cabin",
    name: "Toyota Hilux Double Cabin",
    category: "Pickup Truck",
    image: "/armada/hilux-double-cabin.webp",
    capacity: 5,
    transmission: "Manual / Matic",
    fuel: "Diesel",
    features: ["4x4", "Leather Seat", "Audio System", "Kaca Film"],
    description:
      "Pickup truck tangguh dengan kabin nyaman. Cocok untuk off-road dan kerja berat.",
  },
];

export const categories: { value: VehicleCategory | "all"; label: string }[] = [
  { value: "all", label: "Semua Unit" },
  { value: "MPV", label: "MPV" },
  { value: "SUV", label: "SUV" },
  { value: "Premium", label: "Premium" },
  { value: "Minibus", label: "Minibus" },
  { value: "City Car", label: "City Car" },
  { value: "Pickup Truck", label: "Pickup Truck" },
];
