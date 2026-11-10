# KOMPUTERKU — Digital Learning Center
> Media Pembelajaran Interaktif Informatika SMA Kelas X (Sistem Komputer)

Website aplikasi berbasis React 19 + TypeScript + Vite + Tailwind CSS v4 yang dirancang sepenuhnya mandiri (*standalone*), tanpa ketergantungan API berbayar, dan siap dipublikasikan langsung ke layanan hosting gratis seperti **Netlify**, **Vercel**, atau **GitHub Pages**.

---

## 🚀 Panduan Deployment ke Netlify

Website ini sudah dilengkapi konfigurasi otomatis untuk Netlify (`netlify.toml` dan `public/_redirects`).

### Opsi 1: Hubungkan dengan Git Repository (Direkomendasikan)
1. Unggah (*push*) repositori ini ke akun **GitHub**, **GitLab**, atau **Bitbucket** Anda.
2. Buka dashboard [Netlify](https://app.netlify.com/) dan pilih **"Add new site"** > **"Import an existing project"**.
3. Pilih repositori Git Anda.
4. Netlify akan secara otomatis mendeteksi konfigurasi dari `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Klik **"Deploy KOMPUTERKU"**. Website Anda akan aktif dalam hitungan detik!

### Opsi 2: Netlify Drop (Manual Drag & Drop)
1. Jalankan perintah kompilasi di terminal komputer Anda:
   ```bash
   npm run build
   ```
2. Buka [Netlify Drop](https://app.netlify.com/drop).
3. Tarik (*drag & drop*) folder `dist` yang telah dihasilkan ke jendela browser Netlify.
4. Website langsung daring dengan URL unik gratis (misal: `https://komputerku.netlify.app`).

---

## 🛠️ Menjalankan Proyek Secara Lokal

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas):

```bash
# 1. Pasang dependensi
npm install

# 2. Jalankan server pengembangan lokal (Vite)
npm run dev

# 3. Akses melalui browser di:
# http://localhost:3000
```

Untuk menguji hasil build produksi secara lokal:
```bash
npm run build
npm run preview
```

---

## 📁 Struktur Direktori Penting

```
├── dist/                # Hasil build produksi siap upload (otomatis terisi setelah `npm run build`)
├── public/              # Aset statis & file _redirects Netlify
│   ├── _redirects       # Pengarah rute Single Page Application (SPA) Netlify
│   └── assets/images/   # Salinan aset gambar komponen
├── src/
│   ├── assets/images/   # Sumber gambar resolusi tinggi (CPU, Motherboard, RAM, Rig)
│   ├── components/      # Komponen antarmuka (Navbar, Hero, Materi, Galeri, Kuis, IPOS Simulator, Rangkuman)
│   ├── data/            # Data materi ajar, soal kuis, kurikulum, dan glosarium
│   ├── App.tsx          # Router utama dan pengatur state progres belajar
│   ├── index.css        # Konfigurasi Tailwind CSS v4 & styling cetak
│   └── main.tsx         # Titik masuk React
├── netlify.toml         # Konfigurasi build & header keamanan Netlify
├── vite.config.ts       # Konfigurasi bundler Vite
└── package.json         # Konfigurasi dependensi dan script npm
```

---

## 💡 Keunggulan Proyek
- **Zero Paid APIs**: Berjalan 100% di sisi peramban (*client-side*), tanpa biaya berlangganan API.
- **Standar Kurikulum**: Sesuai Capaian Pembelajaran Informatika SMA Fase E (Kelas 10).
- **Offline & Local Persistence**: Progres belajar dan nilai kuis disimpan di browser pengguna (`localStorage`).
