# Instruksi Menambahkan Foto/Video ke Galeri Armada

## Langkah-langkah

### 1. Siapkan File Media

Siapkan foto dan video real armada Anda dengan format:

- **Foto**: JPG, PNG, atau WebP
- **Video**: MP4 atau WebM

### 2. Simpan File ke Folder

Simpan file-file Anda ke folder:

```
public/galeri-armada/
```

### 3. Edit Data Galeri

Buka file:

```
src/components/home/FleetGallerySection.tsx
```

Di bagian atas file, Anda akan menemukan array `galleryItems`:

```typescript
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    type: "photo",
    src: "/galeri-armada/foto-1.jpg",
    thumbnail: "/galeri-armada/foto-1-thumb.jpg",
    alt: "Galeri Armada Romo Global Jaya",
  },
  // ... tambahkan item lainnya
];
```

### 4. Format Penamaan File

Untuk kemudahan, gunakan format penamaan:

- Foto: `foto-1.jpg`, `foto-2.jpg`, `foto-3.jpg`, dll.
- Video: `video-1.mp4`, `video-2.mp4`, dll.
- Thumbnail: `foto-1-thumb.jpg`, `video-1-thumb.jpg`, dll.

### 5. Tipe Item

- `type: "photo"` - untuk gambar/foto
- `type: "video"` - untuk video

### 6. Edit Deskripsi

Field `alt` digunakan untuk teks alternatif pada gambar (untuk aksesibilitas).

## Contoh Pengisian Data

### Contoh Foto:

```typescript
{
  id: "1",
  type: "photo",
  src: "/galeri-armada/armada-avanza-jakarta.jpg",
  thumbnail: "/galeri-armada/armada-avanza-jakarta-thumb.jpg",
  alt: " Armada rental di Jakarta",
}
```

### Contoh Video:

```typescript
{
  id: "10",
  type: "video",
  src: "/galeri-armada/video-walkthrough-alphard.mp4",
  thumbnail: "/galeri-armada/video-walkthrough-alphard-thumb.jpg",
  alt: "Video walkthrough armada",
}
```

## Catatan Penting

1. **Ukuran File**:

   - Foto: Maksimal 500KB - 1MB per gambar
   - Video: Maksimal 10MB - 20MB per video

2. **Dimensi Gambar**:

   - Thumbnail: 600x450px (4:3 aspect ratio)
   - Full size: Minimal 1200px lebar

3. **Kualitas Video**:

   - Gunakan format MP4 dengan codec H.264
   - Resolution: 720p atau 1080p

4. **Jumlah Item**:
   - Tidak ada batasan jumlah item
   - Disarankan 6-12 item untuk tampilan optimal

## Troubleshooting

**Gambar tidak muncul?**

- Periksa path file di `src` sudah benar
- Pastikan file sudah di-copy ke folder `public/galeri-armada/`
- Refresh browser (Ctrl+F5)

**Video tidak bisa diputar?**

- Pastikan format video didukung browser (MP4/WebM)
- Periksa ukuran file tidak terlalu besar

**Lightbox tidak berfungsi?**

- Periksa console browser untuk error
- Pastikan tidak ada konflik dengan script lain
