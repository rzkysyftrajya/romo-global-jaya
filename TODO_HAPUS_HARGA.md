# Rencana Penghapusan Harga dari Seluruh Halaman

## 📋 Audit Temuan

### File dengan Harga:

1. `src/data/fleet.ts` - Data kendaraan dengan `pricePerDay` dan `priceWithDriver`
2. `src/pages/Armada.tsx` - Menampilkan harga di hero section dan vehicle cards
3. `src/pages/ArmadaDetail.tsx` - Menampilkan harga di meta description, pricing section, dan related vehicles
4. `src/components/home/FleetPreviewSection.tsx` - Menampilkan harga di fleet preview

---

## 📝 Rencana Edit

### 1. `src/data/fleet.ts`

- [x] Hapus field `pricePerDay` dari interface Vehicle
- [x] Hapus field `priceWithDriver` dari interface Vehicle
- [x] Hapus semua nilai price dari data kendaraan
- [x] Hapus fungsi `formatPrice`

### 2. `src/pages/Armada.tsx`

- [x] Hapus import `formatPrice`
- [x] Hapus bagian "Mulai dari" dan harga di featured vehicle preview (hero section)
- [x] Hapus bagian price di vehicle card (bagian "Mulai dari" dan formatPrice)
- [x] Ganti dengan button "Tanya Harga" yang linked ke WhatsApp

### 3. `src/pages/ArmadaDetail.tsx`

- [x] Hapus import `formatPrice`
- [x] Update meta description tanpa harga
- [x] Hapus atau ubah pricing section (hapus harga, ganti dengan benefits dan "Tanya Harga & Booking")
- [x] Hapus harga di related vehicles

### 4. `src/components/home/FleetPreviewSection.tsx`

- [x] Hapus import `formatPrice`
- [x] Hapus bagian harga di setiap vehicle card
- [x] Ganti dengan button "Tanya Harga" yang linked ke WhatsApp

---

## ✅ Progress

- [x] Audit seluruh halaman
- [x] Buat rencana edit
- [x] Edit `src/data/fleet.ts` - Hapus field harga
- [x] Edit `src/pages/Armada.tsx` - Hapus tampilan harga
- [x] Edit `src/pages/ArmadaDetail.tsx` - Hapus tampilan harga
- [x] Edit `src/components/home/FleetPreviewSection.tsx` - Hapus tampilan harga
- [ ] Verifikasi TypeScript

---

## 🎯 Hasil Akhir

- Tidak ada harga yang ditampilkan di seluruh halaman
- Tampilan tetap menarik dengan fokus pada fitur, spesifikasi kendaraan, dan CTA ke WhatsApp
- Pengguna tertarik untuk menghubungi langsung via WhatsApp untuk informasi harga

---

## 🔄 Perubahan yang Dilakukan

### Armada.tsx

- Hero section: Ganti harga dengan button "Tanya Harga" WhatsApp
- Vehicle cards: Hapus section harga, tetap pertahankan CTA "Lihat Detail"

### ArmadaDetail.tsx

- Meta description: Hapus harga
- Booking card: Hapus pricing section, ganti dengan benefits list dan button "Tanya Harga & Booking"
- Related vehicles: Ganti harga dengan category

### FleetPreviewSection.tsx

- Vehicle cards: Ganti harga dengan button "Tanya Harga" WhatsApp

### fleet.ts

- Interface Vehicle: Hapus `pricePerDay` dan `priceWithDriver`
- Data: Hapus semua nilai price
- Export: Hapus fungsi `formatPrice`
