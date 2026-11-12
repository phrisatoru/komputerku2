import { Chapter } from '../types';

export const chaptersData: Chapter[] = [
  {
    id: 1,
    slug: 'pengertian-sistem-komputer',
    number: 'BAB 1',
    title: 'Pengertian Sistem Komputer',
    subtitle: 'Konsep dasar, fungsi utama, tujuan, dan perannya dalam kehidupan modern.',
    readTime: '6 menit',
    summary: 'Sistem komputer adalah kesatuan utuh yang terdiri dari perangkat keras (hardware), perangkat lunak (software), dan pengguna (brainware) yang saling terhubung dan bekerja sama untuk mengolah data menjadi informasi yang bermanfaat secara cepat, tepat, dan otomatis.',
    keyPoints: [
      'Komputer bukan sekadar benda fisik, melainkan sebuah sistem terpadu.',
      'Sistem komputer tidak akan dapat berfungsi jika salah satu dari hardware, software, atau brainware tidak ada.',
      'Fungsi pokok sistem komputer mencakup penginputan (input), pemrosesan (processing), penyimpanan (storage), dan pengeluaran (output).',
      'Tujuan utama sistem komputer adalah meningkatkan efektivitas, efisiensi kerja, dan akurasi pengolahan data manusia.'
    ],
    content: [
      {
        title: '1. Apa Itu Sistem Komputer?',
        description: 'Secara etimologis, kata "komputer" berasal dari bahasa Latin "computare" yang berarti menghitung. Namun dalam konteks modern, komputer telah berkembang jauh melampaui alat hitung sederhana. Suatu sistem didefinisikan sebagai kumpulan elemen-elemen yang saling berinteraksi untuk mencapai suatu tujuan tertentu. Dengan demikian, Sistem Komputer adalah jaringan elemen terintegrasi yang terdiri dari perangkat keras (hardware), perangkat lunak (software), dan manusia pemakai (brainware) yang saling berkolaborasi untuk menerima data mentah, mengolahnya sesuai instruksi logis dan matematis, menyimpannya, serta menyajikan hasilnya sebagai informasi yang bermakna bagi pengguna.',
        subsections: [
          {
            subtitle: 'Karakteristik Utama Sistem Komputer',
            details: 'Komputer modern bekerja secara terprogram (programmable), mampu mengeksekusi milyaran instruksi per detik (kecepatan tinggi), memiliki tingkat presisi dan akurasi yang konsisten, serta memiliki kemampuan menyimpan data dalam volume sangat besar secara permanen maupun sementara.',
            examples: [
              'Otomatisasi pengolahan nilai rapor sekolah siswa secara digital.',
              'Penyusunan jadwal penerbangan pesawat secara real-time.',
              'Pengenalan wajah (face recognition) untuk presensi kehadiran.'
            ]
          }
        ]
      },
      {
        title: '2. Fungsi Utama Sistem Komputer',
        description: 'Sistem komputer dirancang untuk melakukan empat fungsi mendasar yang terus berlangsung dalam suatu siklus komputasi:',
        subsections: [
          {
            subtitle: 'A. Mengambil Data (Data Input)',
            details: 'Menerima masukan berupa data mentah dari dunia luar melalui berbagai perangkat input seperti keyboard, mikrofon, kamera, atau sensor IoT.',
            examples: ['Mengetik teks artikel', 'Merekam suara rekaman podcast', 'Memindai barcode produk belanjaan']
          },
          {
            subtitle: 'B. Mengolah Data (Data Processing)',
            details: 'Melakukan operasi aritmetika (penjumlahan, pengurangan) dan logika (perbandingan benar/salah) terhadap data yang masuk dengan panduan instruksi dari program perangkat lunak.',
            examples: ['Menghitung rata-rata nilai ujian matematika', 'Menerapkan filter pada foto digital', 'Mengenkripsi password akun pengguna']
          },
          {
            subtitle: 'C. Menyimpan Data (Data Storage)',
            details: 'Menyimpan data mentah maupun hasil olahan, baik untuk pemrosesan sesaat di memori utama (RAM) maupun penyimpanan jangka panjang yang tidak hilang saat listrik padam (SSD/HDD).',
            examples: ['Menyimpan dokumen tugas ke flashdisk', 'Menyimpan riwayat chat WhatsApp di cloud storage', 'Caching website untuk mempercepat akses']
          },
          {
            subtitle: 'D. Menyajikan Informasi (Data Output)',
            details: 'Mengubah sinyal digital hasil pemrosesan komputer menjadi format yang dapat dipahami dan dimanfaatkan oleh manusia atau mesin lain.',
            examples: ['Menampilkan grafik nilai di monitor', 'Mencetak surat keterangan di kertas melalui printer', 'Mengeluarkan suara lagu lewat speaker']
          }
        ]
      },
      {
        title: '3. Tujuan Penggunaan Sistem Komputer',
        description: 'Penerapan sistem komputer di berbagai sendi kehidupan didorong oleh beberapa sasaran pokok:',
        subsections: [
          {
            subtitle: 'Efisiensi Waktu dan Tenaga',
            details: 'Pekerjaan komputasi rumit yang membutuhkan waktu berhari-hari jika dikerjakan manual dapat diselesaikan dalam hitungan mikrodetik.',
            technicalNote: 'Contoh: Perhitungan sensus penduduk jutaan warga.'
          },
          {
            subtitle: 'Akurasi dan Keandalan Tinggi',
            details: 'Komputer tidak mengenal rasa lelah atau bosan, sehingga risiko kesalahan manusia (human error) akibat kelalaian dapat diminimalkan selama program yang dijalankan bebas dari bug.',
            technicalNote: 'Kepatuhan terhadap instruksi biner tanpa deviasi.'
          },
          {
            subtitle: 'Kapasitas Pengolahan Masif (Big Data)',
            details: 'Mampu menangani, menyortir, dan menganalisis volume data berukuran terabyte hingga petabyte secara simultan.'
          }
        ]
      },
      {
        title: '4. Penerapan Nyata di Kehidupan Sehari-hari',
        description: 'Sistem komputer hadir di hampir setiap instrumen kehidupan siswa kelas 10 SMA masa kini:',
        subsections: [
          {
            subtitle: 'Bidang Pendidikan',
            details: 'Platform pembelajaran digital (Google Classroom, portal e-learning sekolah), perpustakaan daring, dan simulasi laboratorium virtual sains.'
          },
          {
            subtitle: 'Bidang Perbankan dan Finansial',
            details: 'Mesin ATM, mobile banking, pembayaran QRIS, dan sistem pencatatan transaksi buku besar bank secara real-time.'
          },
          {
            subtitle: 'Bidang Transportasi',
            details: 'Navigasi satelit GPS, pemesanan tiket kereta api/pesawat secara online, sistem lampu lalu lintas pintar berbasis sensor kepadatan jalan.'
          },
          {
            subtitle: 'Sektor Ritel dan Kasir (POS - Point of Sale)',
            details: 'Pemindai barcode di minimarket yang langsung terhubung ke basis data stok barang dan printer struk pembayaran belanja.'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'komponen-sistem-komputer',
    number: 'BAB 2',
    title: 'Komponen Sistem Komputer',
    subtitle: 'Tiga pilar utama penopang komputasi: Hardware, Software, dan Brainware.',
    readTime: '9 menit',
    summary: 'Sistem komputer berdiri di atas tiga komponen yang tidak dapat dipisahkan: Hardware sebagai raga fisik yang mengeksekusi sirkuit listrik, Software sebagai ruh instruksi dan program logis, serta Brainware sebagai manusia pengarah yang menentukan tujuan dan mengoperasikannya.',
    keyPoints: [
      'Hardware adalah bagian fisik yang dapat dilihat, disentuh, dan dialiri daya listrik.',
      'Software adalah serangkaian instruksi biner tak berwujud fisik yang memberitahu hardware apa yang harus dilakukan.',
      'Brainware adalah faktor penentu kecerdasan operasional sistem, mulai dari operator, programmer, administrator, hingga teknisi.',
      'Ketiga pilar membentuk sinergi tak terpisahkan: ketiadaan satu pilar melumpuhkan seluruh sistem.'
    ],
    content: [
      {
        title: 'A. Hardware (Perangkat Keras)',
        description: 'Hardware adalah komponen fisik elektronika dan mekanik komputer yang dapat diraba secara langsung. Komponen ini menyediakan landasan fisik tempat seluruh perhitungan biner terjadi.',
        subsections: [
          {
            subtitle: '1. CPU (Central Processing Unit / Prosesor)',
            details: 'Sering disebut sebagai "otak" komputer. CPU bertugas memproses dan menginterpretasikan semua instruksi instruksi software. CPU modern memiliki tiga bagian internal inti: ALU (Arithmetic Logic Unit) untuk kalkulasi matematika dan logika, CU (Control Unit) untuk mengatur lalu lintas instruksi dan sinkronisasi clock, serta Register sebagai memori internal super cepat penyimpan data sesaat.',
            examples: ['Intel Core i3/i5/i7/i9', 'AMD Ryzen 3/5/7/9', 'Apple Silicon M-Series']
          },
          {
            subtitle: '2. Motherboard (Papan Induk / Mainboard)',
            details: 'Papan sirkuit cetak utama (PCB) tempat semua komponen komputer terpasang dan saling berkomunikasi melalui jalur bus tembaga berkecepatan tinggi.',
            technicalNote: 'Memuat socket CPU, slot RAM DIMM, slot PCIe untuk kartu ekspansi, chipset pengontrol, dan port I/O belakang.'
          },
          {
            subtitle: '3. RAM (Random Access Memory)',
            details: 'Memori kerja utama berkecepatan tinggi yang bersifat volatile (data akan hilang saat listrik dimatikan). RAM menampung data aplikasi yang sedang aktif dibuka pengguna agar CPU dapat mengaksesnya dalam hitungan nanodetik.',
            examples: ['DDR4 3200MHz', 'DDR5 5600MHz (standar modern)']
          },
          {
            subtitle: '4. ROM (Read-Only Memory)',
            details: 'Memori permanen non-volatile yang isinya telah diprogram sejak pabrik perakitan. ROM menyimpan instruksi dasar seperti BIOS/UEFI yang bertugas melakukan POST (Power-On Self Test) saat komputer pertama kali dinyalakan.',
            technicalNote: 'Isi ROM tidak terhapus meski komputer dimatikan.'
          },
          {
            subtitle: '5. Hard Disk Drive (HDD) dan Solid State Drive (SSD)',
            details: 'Media penyimpanan data sekunder non-volatile permanen tempat sistem operasi, aplikasi, dan file tersimpan. HDD menggunakan piringan magnetik berputar mekanik (kecepatan ~150 MB/s), sedangkan SSD menggunakan chip flash NAND tanpa komponen bergerak dengan kecepatan mencapai 3500-7000 MB/s (NVMe).',
            examples: ['SSD NVMe M.2', 'SSD SATA 2.5 inci', 'HDD Seagate BarraCuda']
          },
          {
            subtitle: '6. GPU (Graphics Processing Unit / Kartu Grafis)',
            details: 'Prosesor khusus dengan ribuan core pemrosesan paralel yang dirancang khusus untuk merender kalkulasi grafis 3D, video resolusi tinggi, animasi, dan komputasi visual ke monitor.',
            examples: ['NVIDIA GeForce RTX', 'AMD Radeon RX', 'Intel Arc Graphics']
          },
          {
            subtitle: '7. Monitor, Keyboard, dan Mouse',
            details: 'Monitor berfungsi sebagai perangkat keluaran visual antarmuka grafis. Keyboard menerima ketukan karakter pengguna, dan mouse menerjemahkan gestur gerak tangan menjadi perpindahan kursor di layar.'
          }
        ],
        comparisonTable: {
          headers: ['Komponen', 'Fungsi Utama', 'Karakteristik Sifat', 'Kecepatan Relatif'],
          rows: [
            ['CPU / Prosesor', 'Menjalankan instruksi komputasi (ALU + CU)', 'Elektronik mikro', 'Sangat Tinggi (GHz)'],
            ['RAM', 'Menyimpan data aplikasi yang sedang berjalan', 'Volatile (sementara)', 'Tinggi (GB/s, ~50-80 ns latency)'],
            ['ROM / BIOS', 'Memuat firmware bootloader dan POST', 'Non-volatile (permanen)', 'Sedang (~MB/s)'],
            ['SSD (NVMe)', 'Penyimpanan file permanen jangka panjang', 'Non-volatile (elektronik flash)', 'Cepat (3.000 - 7.500 MB/s)'],
            ['HDD (Harddisk)', 'Penyimpanan file kapasitas besar ekonomis', 'Non-volatile (mekanik magnetik)', 'Lambat (80 - 160 MB/s)'],
            ['GPU', 'Pemrosesan komputasi grafis dan piksel layar', 'Paralel multi-core', 'Ultra Cepat untuk throughput grafis']
          ]
        }
      },
      {
        title: 'B. Software (Perangkat Lunak)',
        description: 'Software adalah kumpulan program, prosedur, dan aturan biner yang menginstruksikan hardware bagaimana melaksanakan pekerjaan. Software terbagi menjadi tiga kategori besar:',
        subsections: [
          {
            subtitle: '1. Sistem Operasi (Operating System - OS)',
            details: 'Perangkat lunak fundamental yang bertugas mengelola sumber daya hardware, memanajemen memori, mengatur eksekusi proses CPU, menyediakan sistem berkas (file system), dan menyediakan antarmuka pengguna (GUI atau CLI).',
            examples: ['Microsoft Windows 11', 'Linux (Ubuntu, Fedora, Debian)', 'Apple macOS', 'Google Android', 'Apple iOS']
          },
          {
            subtitle: '2. Software Aplikasi (Application Software)',
            details: 'Program siap pakai yang dirancang untuk membantu pengguna menyelesaikan tugas-tugas spesifik, seperti pengolah kata, presentasi, peramban internet, dan media hiburan.',
            examples: ['Microsoft 365 (Word, Excel, PowerPoint)', 'Google Chrome & Mozilla Firefox', 'Adobe Photoshop & Premiere', 'VS Code (Code Editor)']
          },
          {
            subtitle: '3. Software Utilitas (Utility Software)',
            details: 'Perangkat lunak pembantu yang bertugas memelihara, mengoptimalkan, dan mengamankan kinerja sistem komputer.',
            examples: ['Windows Defender & Antivirus', 'WinRAR / 7-Zip (Kompresi file)', 'Disk Cleanup & Defragmenter', 'Backup & Restore Utility']
          }
        ]
      },
      {
        title: 'C. Brainware (Pengguna / Manusia)',
        description: 'Brainware merujuk kepada manusia yang mengoperasikan, mengendalikan, memprogram, dan merawat sistem komputer. Tanpa manusia yang memiliki keahlian, teknologi secanggih apapun tidak akan menghasilkan nilai guna.',
        subsections: [
          {
            subtitle: '1. Operator Komputer',
            details: 'Pengguna yang bertugas menjalankan program dan memasukkan data operasional sehari-hari sesuai instruksi kerja standar (SOP).',
            examples: ['Petugas kasir kasir minimarket', 'Staf entri data administrasi sekolah', 'Petugas ticketing loket stasiun']
          },
          {
            subtitle: '2. Programmer (Pengembang Perangkat Lunak)',
            details: 'Profesional yang merancang, menulis kode (coding), menguji, dan mengembangkan perangkat lunak menggunakan bahasa pemrograman tertentu.',
            examples: ['Web Developer pembuat aplikasi web', 'Mobile App Developer pembuat aplikasi smartphone', 'Game Developer']
          },
          {
            subtitle: '3. Administrator Sistem (System / Network Administrator)',
            details: 'Tenaga ahli yang mengelola, mengatur hak akses, memantau keamanan jaringan komputer, dan memastikan server tetap stabil tanpa gangguan.',
            examples: ['Admin jaringan komputer laboratorium sekolah', 'Cloud Database Administrator perbankan']
          },
          {
            subtitle: '4. Teknisi Komputer (Hardware Technician)',
            details: 'Tenaga ahli yang bertanggung jawab atas pemeliharaan fisik perangkat keras, perakitan unit komputer, dan perbaikan saat terjadi kerusakan komponen elektronika.',
            examples: ['Teknisi reparasi laptop/PC', 'Spesialis maintenance hardware server data center']
          }
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'cara-kerja-sistem-komputer',
    number: 'BAB 3',
    title: 'Cara Kerja Sistem Komputer',
    subtitle: 'Memahami siklus IPOS (Input, Process, Output, Storage) dan siklus instruksi mesin.',
    readTime: '7 menit',
    summary: 'Komputer bekerja melalui siklus teratur berulang yang disebut siklus IPOS: menerima Input (masukan data), melakukan Processing (pengolahan oleh prosesor & memori), menghasilkan Output (keluaran informasi), serta menyimpan data di Storage untuk penggunaan berkelanjutan.',
    keyPoints: [
      'Siklus IPOS (Input - Process - Output - Storage) adalah hukum kerja fundamental komputer.',
      'Data mentah masuk melalui perangkat input, diubah menjadi sinyal listrik biner 0 dan 1.',
      'CPU mengeksekusi siklus mesin Fetch - Decode - Execute untuk setiap instruksi.',
      'Memori RAM bertindak sebagai ruang kerja cepat yang menjembatani CPU dengan media penyimpanan sekunder.'
    ],
    content: [
      {
        title: '1. Siklus IPOS: Konsep Fundamental',
        description: 'Bagaimana sebuah komputer yang hanya tersusun atas sirkuit silikon dan arus listrik dapat menampilkan video 4K atau memproses dokumen teks? Jawabannya terletak pada keselarasan siklus empat tahap yang dinamakan Siklus IPOS (Input, Process, Output, Storage).',
        subsections: [
          {
            subtitle: 'Tahap 1: Input (Pemasukan Data)',
            details: 'Pengguna memberikan perintah atau memasukkan data mentah. Perangkat input menerjemahkan tindakan fisik (misal: penekanan tuts keyboard mekanik atau gelombang suara mikrofon) menjadi pulsa sinyal listrik digital biner (rangkaian angka 0 dan 1) yang dimengerti motherboard.',
            examples: ['Ketika tombol huruf "A" ditekan pada keyboard, mikrokontroler keyboard mengirimkan kode ASCII biner 01000001 ke sistem bus.']
          },
          {
            subtitle: 'Tahap 2: Process (Pengolahan Data)',
            details: 'CPU mengambil kode biner tersebut dari memori RAM, menerjemahkan perintah melalui Control Unit (CU), lalu mengeksekusi operasi aritmetika dan logika di ALU. Jika dibutuhkan data referensi lain, CPU memanggilnya dari cache memori internal.',
            examples: ['CPU menghitung koordinat pergeseran kursor mouse, atau menjalankan rumus perkalian sel di Microsoft Excel.']
          },
          {
            subtitle: 'Tahap 3: Output (Penyajian Hasil)',
            details: 'Hasil perhitungan biner yang selesai diolah oleh prosesor diubah kembali menjadi format yang ramah indra manusia, seperti visual gambar di monitor, suara speaker, atau cetakan fisik printer.',
            examples: ['Huruf "A" muncul di layar monitor pada posisi kursor pengetikan dalam sekejap mata (<16 milidetik).']
          },
          {
            subtitle: 'Tahap 4: Storage (Penyimpanan Data)',
            details: 'Data dan dokumen hasil olahan dapat disimpan ke media penyimpanan sekunder (SSD/HDD/Flashdisk) agar tidak hilang saat komputer dimatikan, atau disinkronisasikan ke server penyimpanan awan (Cloud Storage).',
            examples: ['Pengguna menekan tombol "Simpan" (Ctrl+S) sehingga file tersimpan di partisi SSD C:\\Dokumen.']
          }
        ]
      },
      {
        title: '2. Siklus Mesin CPU: Fetch, Decode, Execute',
        description: 'Di tingkat mikroelektronika dalam prosesor, setiap satu instruksi instruksi kode program dieksekusi melalui siklus mesin (Machine Cycle) yang berputar miliaran kali per detik (diukur dalam Hertz / GHz):',
        subsections: [
          {
            subtitle: '1. Fetch (Pengambilan Instruksi)',
            details: 'Control Unit (CU) mengambil instruksi berikutnya dari memori utama (RAM) berdasarkan alamat yang ditunjuk oleh Program Counter (PC).'
          },
          {
            subtitle: '2. Decode (Penerjemahan Kode)',
            details: 'Instruksi biner diterjemahkan menjadi serangkaian sinyal kendali mikro yang menentukan sirkuit ALU mana yang harus diaktifkan.'
          },
          {
            subtitle: '3. Execute (Eksekusi Operasi)',
            details: 'ALU mengeksekusi kalkulasi matematis atau perbandingan logika yang diminta dan menuliskan hasilnya kembali ke register CPU atau memori RAM.'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'perangkat-keras-komputer',
    number: 'BAB 4',
    title: 'Perangkat Keras Komputer (Deep Dive)',
    subtitle: 'Klasifikasi mendalam perangkat Input, Process, Output, dan Storage modern.',
    readTime: '8 menit',
    summary: 'Hardware komputer terbagi rapi ke dalam empat rumpun fungsional: perangkat masukan (input) pengubah data analog ke biner, perangkat pemroses (processing) pengolah instruksi, perangkat keluaran (output) penampil informasi, dan media penyimpan (storage) penjaga keutuhan data.',
    keyPoints: [
      'Perangkat input modern kini mencakup sensor biometrik dan sensor gerak.',
      'Kinerja perangkat proses dipengaruhi oleh arsitektur clock speed, jumlah core/threads, dan ukuran cache memori.',
      'Perangkat output modern berorientasi pada resolusi tinggi, color gamut luas, dan latensi ultra rendah.',
      'Penyimpanan terbagi menjadi primer (RAM/ROM) dan sekunder (SSD NVMe PCIe 4.0/5.0, HDD).'
    ],
    content: [
      {
        title: '1. Perangkat Masukan (Input Devices)',
        description: 'Perangkat masukan bertugas mengubah fenomena fisik dunia luar (tekanan tombol, pantulan cahaya, getaran suara) menjadi representasi sinyal digital:',
        subsections: [
          {
            subtitle: 'Keyboard & Mouse',
            details: 'Keyboard menggunakan switch membran atau mekanik untuk mendeteksi penutupan sirkuit tombol. Mouse menggunakan sensor optik LED/laser beresolusi tinggi (DPI) untuk membaca mikrotekstur permukaan meja.'
          },
          {
            subtitle: 'Scanner & Barcode/QR Reader',
            details: 'Memanfaatkan sensor optik CCD/CIS untuk menangkap pola cahaya pantulan dokumen fisik dan mengubahnya menjadi file gambar digital atau rangkaian kode string produk.'
          },
          {
            subtitle: 'Mikrofon & Webcam',
            details: 'Mikrofon mengubah gelombang getaran suara di udara menjadi sinyal audio digital melalui konverter ADC (Analog-to-Digital Converter). Webcam merekam frame video visual secara kontinu.'
          }
        ]
      },
      {
        title: '2. Perangkat Pemroses (Processing Devices)',
        description: 'Pusat komputasi tempat instruksi matematika dan logika dijalankan:',
        subsections: [
          {
            subtitle: 'CPU (Multi-Core Processor)',
            details: 'Memiliki core fisik independen yang mampu menjalankan banyak instruksi (multithreading) secara bersamaan. Dilengkapi L1, L2, dan L3 Cache berkecepatan ekstra tinggi di dekat die silikon.'
          },
          {
            subtitle: 'Motherboard & Chipset',
            details: 'Chipset mengatur komunikasi antara CPU dengan komponen bandwidth tinggi (RAM, GPU) dan jalur ekspansi lambat (port USB, audio, LAN, SATA).'
          },
          {
            subtitle: 'GPU (Dedicated Graphics Card)',
            details: 'Memiliki VRAM (Video RAM) khusus seperti GDDR6/GDDR6X berkecepatan ratusan gigabyte per detik untuk menampung tekstur gambar, model 3D, dan buffer frame layar.'
          }
        ]
      },
      {
        title: '3. Perangkat Keluaran (Output Devices)',
        description: 'Menyajikan informasi hasil pengolahan ke format yang dapat dimengerti panca indra manusia:',
        subsections: [
          {
            subtitle: 'Monitor (Layar Tampilan)',
            details: 'Menggunakan panel IPS, VA, atau OLED yang memancarkan jutaan sub-piksel merah, hijau, dan biru (RGB). Parameter penting mencakup refresh rate (Hz), resolusi (FHD, 2K, 4K), dan response time (ms).'
          },
          {
            subtitle: 'Printer (Pencetak Fisik)',
            details: 'Mengubah dokumen digital menjadi cetakan fisik di atas kertas menggunakan teknologi semprotan tinta mikroskopik (Inkjet) atau serbuk toner yang dipanaskan laser (Laserjet).'
          },
          {
            subtitle: 'Speaker & Headphone',
            details: 'Menggunakan konverter DAC (Digital-to-Analog Converter) untuk mengubah data audio biner menjadi getaran elektromagnetik membran speaker yang terdengar sebagai bunyi musik atau suara percakapan.'
          }
        ]
      },
      {
        title: '4. Perangkat Penyimpanan (Storage Devices)',
        description: 'Penyimpanan dalam sistem komputer dibagi menjadi dua tingkatan utama berdasarkan hierarki memori:',
        subsections: [
          {
            subtitle: 'Penyimpanan Primer (Memori Utama)',
            details: 'Berada dekat dengan prosesor, berkecepatan sangat tinggi namun berkapasitas terbatas. Meliputi Register CPU, Cache CPU (L1/L2/L3), RAM, dan ROM.'
          },
          {
            subtitle: 'Penyimpanan Sekunder (Media Permanen)',
            details: 'Berada di luar jalur langsung eksekusi CPU, berkecepatan lebih rendah namun berkapasitas besar dan bersifat non-volatile. Meliputi SSD NVMe M.2 (kecepatan hingga 7000 MB/s), SSD SATA (550 MB/s), Hard Disk Drive (HDD magnetik 150 MB/s), dan USB Flash Drive.'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'perangkat-lunak-komputer',
    number: 'BAB 5',
    title: 'Perangkat Lunak Komputer',
    subtitle: 'Arsitektur software: Sistem Operasi, Aplikasi, Bahasa Pemrograman, dan Program Utilitas.',
    readTime: '8 menit',
    summary: 'Perangkat lunak (software) adalah instruksi tak berwujud fisik yang mengendalikan hardware. Software tersusun dalam lapisan hierarki mulai dari kernel sistem operasi terdekat dengan mesin, hingga aplikasi produktivitas yang berinteraksi langsung dengan pengguna.',
    keyPoints: [
      'Sistem Operasi bertindak sebagai penerjemah jembatan antara aplikasi dan perangkat keras.',
      'Aplikasi dirancang khusus untuk memecahkan kebutuhan praktis pengguna akhir.',
      'Bahasa pemrograman memungkinkan manusia menyusun instruksi logika yang kemudian dikompilasi menjadi kode mesin biner.',
      'Software utilitas menjamin kesehatan, keamanan, dan efisiensi kerja sistem operasi.'
    ],
    content: [
      {
        title: '1. Sistem Operasi (Operating System)',
        description: 'Sistem Operasi adalah program utama yang dimuat pertama kali saat komputer dinyalakan (booting). Tanpa sistem operasi, komputer hanyalah rakitan logam dan silikon mati yang tidak dapat menerima instruksi pengguna.',
        subsections: [
          {
            subtitle: 'Tugas Pokok Sistem Operasi',
            details: '1) Manajemen Proses (penjadwalan instruksi di CPU); 2) Manajemen Memori Utama (alokasi dan dealokasi ruang RAM); 3) Manajemen Sistem Berkas / File System (mengatur struktur folder dan file di SSD/HDD); 4) Manajemen Input/Output (driver perangkat); 5) Keamanan dan Hak Akses Pengguna.'
          },
          {
            subtitle: 'Perbedaan GUI dan CLI',
            details: 'GUI (Graphical User Interface) menyajikan elemen visual seperti jendela, ikon, dan tombol yang mudah diklik dengan mouse atau sentuhan layar (contoh: Windows Desktop, macOS Finder). CLI (Command Line Interface) menyajikan antarmuka teks murni di mana pengguna mengetikkan perintah baris demi baris (contoh: Linux Terminal, Windows Command Prompt).'
          }
        ]
      },
      {
        title: '2. Perangkat Lunak Aplikasi',
        description: 'Aplikasi dibuat untuk mempermudah manusia menyelesaikan tugas spesifik dalam profesi, pendidikan, atau hiburan sehari-hari:',
        subsections: [
          {
            subtitle: 'Aplikasi Perkantoran & Produktivitas',
            details: 'Pengolah kata (Word, Google Docs), lembar kerja kalkulasi data (Excel, Google Sheets), dan perancang presentasi (PowerPoint, Canva).'
          },
          {
            subtitle: 'Aplikasi Peramban Web (Web Browser)',
            details: 'Menerjemahkan kode HTML, CSS, dan JavaScript dari server internet menjadi halaman web interaktif yang dapat dibaca (Chrome, Edge, Firefox, Safari).'
          },
          {
            subtitle: 'Aplikasi Multimedia & Desain Grafis',
            details: 'Editor gambar bitmap (Photoshop, GIMP), desain vektor (Illustrator, CorelDraw), serta pemutar video dan audio (VLC Media Player, Spotify).'
          }
        ]
      },
      {
        title: '3. Bahasa Pemrograman (Programming Languages)',
        description: 'Perangkat lunak khusus yang digunakan oleh programmer untuk menciptakan program dan aplikasi baru:',
        subsections: [
          {
            subtitle: 'Bahasa Tingkat Rendah (Low-Level Language)',
            details: 'Sangat dekat dengan instruksi fisik mesin. Contoh: Machine Code (bilangan biner murni) dan Assembly Language (menggunakan kode mnemonik singkat seperti MOV, ADD). Sangat cepat tapi sulit dipelajari manusia.'
          },
          {
            subtitle: 'Bahasa Tingkat Tinggi (High-Level Language)',
            details: 'Menggunakan kosakata bahasa Inggris dan sintaks logika yang mudah dipahami manusia. Contoh: Python, C++, Java, JavaScript, PHP, dan C#. Kode ini kemudian diubah ke bahasa mesin melalui Kompiler (Compiler) atau Penerjemah (Interpreter).'
          }
        ]
      },
      {
        title: '4. Perangkat Lunak Utilitas (Utility Tools)',
        description: 'Program pendukung untuk mengoptimalkan keandalan sistem komputer:',
        subsections: [
          {
            subtitle: 'Antivirus dan Antimalware',
            details: 'Memindai, mengisolasi (quarantine), dan menghapus virus, worm, ransomware, serta spyware yang mengancam keamanan data (contoh: Microsoft Defender, Malwarebytes).'
          },
          {
            subtitle: 'Program Kompresi File',
            details: 'Mengurangi ukuran file dengan algoritma pemadatan data tanpa merusak konten aslinya (contoh: 7-Zip, WinRAR).'
          },
          {
            subtitle: 'Alat Pengoptimalan Disk',
            details: 'Disk Defragmenter untuk menata ulang sektor penyimpanan pada HDD, serta TRIM utility untuk mengoptimalkan kinerja blok sel pada SSD.'
          }
        ]
      }
    ]
  },
  {
    id: 6,
    slug: 'hubungan-hardware-software-brainware',
    number: 'BAB 6',
    title: 'Hubungan Hardware, Software, dan Brainware',
    subtitle: 'Sinergi trikomponen komputasi: bagaimana ketiganya berkolaborasi menciptakan sistem yang utuh.',
    readTime: '7 menit',
    summary: 'Hardware, software, dan brainware saling membutuhkan dalam siklus timbal balik yang erat. Hardware tanpa software hanyalah benda mati; software tanpa hardware tidak memiliki media untuk beroperasi; dan keduanya tanpa brainware tidak memiliki maksud, tujuan, maupun kendali.',
    keyPoints: [
      'Ketiga komponen membentuk mata rantai komputasi: jika satu rantai putus, sistem mati total.',
      'Analogi tubuh manusia: Hardware adalah raga, Software adalah pikiran/prosedur, Brainware adalah jiwa dan kehendak.',
      'Arsitektur lapis komputer menunjukkan bagaimana perintah manusia merambat turun hingga menjadi denyut listrik pada chip silikon.',
      'Keberhasilan suatu sistem teknologi sangat ditentukan oleh keselarasan ketiga komponen.'
    ],
    content: [
      {
        title: '1. Mengapa Ketiganya Wajib Ada?',
        description: 'Banyak orang keliru menganggap komputer semata-mata adalah monitor, CPU, dan keyboard di atas meja. Padahal, tanpa interaksi harmonis antara tiga komponen pokok, komputasi tidak akan pernah terjadi.',
        subsections: [
          {
            subtitle: 'Kasus 1: Hardware Tanpa Software',
            details: 'Anda memiliki komputer rakitan termahal di dunia dengan prosesor terbaru dan GPU tercanggih, namun hard disknya kosong tanpa Sistem Operasi. Saat dinyalakan, komputer hanya akan menampilkan layar hitam bertuliskan "No bootable device found". Komputer tidak dapat digunakan sama sekali karena tidak ada program yang mengatur aliran instruksi.'
          },
          {
            subtitle: 'Kasus 2: Software Tanpa Hardware',
            details: 'Anda memiliki flashdisk yang berisi file installer sistem operasi Windows 11 dan aplikasi editing profesional berlisensi resmi. Namun jika Anda tidak memiliki perangkat fisik komputer tempat menancapkannya, file software tersebut hanyalah deretan data biner yang tersimpan pasif tanpa dapat dieksekusi.'
          },
          {
            subtitle: 'Kasus 3: Hardware dan Software Tanpa Brainware',
            details: 'Komputer lengkap beserta sistem operasi dan aplikasinya menyala di atas meja kantor. Namun tidak ada seorang pun manusia di ruangan tersebut. Komputer hanya akan berada dalam posisi standby atau layar screensaver tanpa pernah menghasilkan karya, laporan, maupun perhitungan.'
          }
        ]
      },
      {
        title: '2. Diagram Lapisan Arsitektur Interaksi',
        description: 'Interaksi ketiga komponen dapat dimodelkan dalam lapisan konsentris berlapis dari luar ke dalam:',
        subsections: [
          {
            subtitle: 'Lapisan 1: Brainware (Manusia)',
            details: 'Berada di lapisan paling luar. Mengamati antarmuka layar dan memberikan input keputusan melalui perangkat kendali.'
          },
          {
            subtitle: 'Lapisan 2: Software Aplikasi',
            details: 'Menerima masukan dari pengguna dan menerjemahkannya menjadi tugas logika pemecahan masalah.'
          },
          {
            subtitle: 'Lapisan 3: Sistem Operasi & Driver',
            details: 'Menerjemahkan instruksi aplikasi menjadi panggilan fungsi tingkat rendah (system calls) dan bahasa sinyal mesin biner.'
          },
          {
            subtitle: 'Lapisan 4: Hardware (Perangkat Keras)',
            details: 'Berada di inti terdalam. Mengeksekusi tegangan arus listrik tinggi (1) dan rendah (0) pada gerbang logika transistor silicon microchip.'
          }
        ]
      }
    ]
  },
  {
    id: 7,
    slug: 'manfaat-dan-perkembangan-sistem-komputer',
    number: 'BAB 7',
    title: 'Manfaat dan Perkembangan Sistem Komputer',
    subtitle: 'Dampak revolusioner di berbagai sektor dan napak tilas lima generasi evolusi komputer.',
    readTime: '9 menit',
    summary: 'Sistem komputer telah merevolusi peradaban manusia di bidang pendidikan, kesehatan, industri, dan komunikasi. Perkembangannya bermula dari tabung hampa udara raksasa sebesar ruangan hingga mikroprosesor modern berskala nanometer dengan kecerdasan buatan terintegrasi.',
    keyPoints: [
      'Komputer mendongkrak produktivitas di bidang kedokteran, riset ilmiah, manufaktur, dan edukasi.',
      'Evolusi komputer dibagi menjadi 5 generasi berdasarkan lompatan teknologi komponen elektronika dasarnya.',
      'Hukum Moore memprediksi peningkatan densitas transistor dan percepatan daya komputasi secara eksponensial.',
      'Generasi ke-5 kini memadukan kecerdasan buatan (AI), pembelajaran mesin (machine learning), dan komputasi kuantum.'
    ],
    content: [
      {
        title: '1. Manfaat Sistem Komputer di Berbagai Bidang',
        description: 'Peran komputer tidak lagi sekadar membantu administrasi, melainkan telah menjadi fondasi utama operasional peradaban modern:',
        subsections: [
          {
            subtitle: 'A. Bidang Pendidikan',
            details: 'Akses sumber ilmu pengetahuan global melalui internet, perpustakaan daring tanpa batas geografi, simulasi fenomena fisika/kimia di layar monitor, dan kemudahan kolaborasi belajar antar siswa dan guru secara asinkron.',
            examples: ['Platform pembelajaran daring sekolah', 'Ujian Berbasis Komputer (ANBK)', 'Laboratorium bahasa digital']
          },
          {
            subtitle: 'B. Bidang Kesehatan & Medis',
            details: 'Peralatan rekam medis canggih seperti CT Scan, MRI (Magnetic Resonance Imaging), USG 4D, alat pemantau tanda vital pasien di ICU, hingga analisis struktur molekul genom DNA untuk penemuan obat-obatan baru.',
            examples: ['Sistem pencatatan rekam medis terpadu rumah sakit', 'Robot bedah presisi tinggi']
          },
          {
            subtitle: 'C. Bidang Industri dan Manufaktur',
            details: 'Penerapan robot otomatis di pabrik perakitan mobil, pemodelan desain mekanik menggunakan CAD (Computer-Aided Design), dan manajemen rantai pasok global secara terukur.',
            examples: ['Lini perakitan robotik otomotif', 'Pencetakan purwarupa 3D Printing']
          },
          {
            subtitle: 'D. Bidang Komunikasi dan Transportasi',
            details: 'Penyampaian informasi ke seluruh penjuru dunia dalam sepersekian detik melalui satelit komunikasi dan kabel fiber optik bawah laut, pemantauan rute navigasi kapal laut dan pesawat terbang otomatis (autopilot).',
            examples: ['Panggilan video konferensi internasional', 'Sistem kontrol lalu lintas udara (Air Traffic Control)']
          }
        ]
      },
      {
        title: '2. Evolusi 5 Generasi Komputer dari Masa ke Masa',
        description: 'Perjalanan panjang teknologi komputer ditandai dengan pergantian komponen dasar sirkuit elektronika:',
        subsections: [
          {
            subtitle: 'Generasi Pertama (1940 - 1956): Tabung Hampa Udara (Vacuum Tube)',
            details: 'Komputer berukuran raksasa memenuhi satu ruangan penuh, mengonsumsi ribuan watt daya listrik, cepat panas, dan sangat sering rusak. Contoh terkenal adalah ENIAC (Electronic Numerical Integrator and Computer) dan UNIVAC.',
            technicalNote: 'Bahasa pemrograman yang digunakan masih berupa Bahasa Mesin (Machine Language) biner murni 0 dan 1.'
          },
          {
            subtitle: 'Generasi Kedua (1956 - 1963): Transistor',
            details: 'Ditemukannya transistor menggantikan tabung vakum yang rapuh. Ukuran komputer menyusut drastis, lebih hemat listrik, lebih dingin, dan lebih dapat diandalkan. Mulai diperkenalkannya bahasa pemrograman tingkat tinggi seperti FORTRAN dan COBOL.',
            technicalNote: 'Transistor menggunakan bahan semikonduktor germanium dan silikon.'
          },
          {
            subtitle: 'Generasi Ketiga (1964 - 1971): Integrated Circuit (IC)',
            details: 'Robert Noyce dan Jack Kilby menemukan Sirkuit Terpadu (IC) yang menggabungkan puluhan hingga ribuan transistor ke dalam satu keping silikon kecil (chip). Komputer menjadi jauh lebih cepat dan terjangkau, serta mulai menggunakan monitor dan keyboard menggantikan pita berlubang (punched cards).',
            technicalNote: 'Lahirnya sistem operasi yang memungkinkan satu komputer menjalankan banyak program sekaligus (multiprogramming).'
          },
          {
            subtitle: 'Generasi Keempat (1971 - Sekarang): Mikroprosesor (VLSI & ULSI)',
            details: 'Penyatuan jutaan hingga miliaran transistor ke dalam satu keping mikroprosesor tunggal (LSI / VLSI). Lahirnya komputer pribadi (Personal Computer - PC) seperti Apple II dan IBM PC. Lahirnya laptop, smartphone, dan internet publik.',
            technicalNote: 'Diawali oleh peluncuran mikroprosesor Intel 4004 pada tahun 1971.'
          },
          {
            subtitle: 'Generasi Kelima (Sekarang & Masa Depan): Artificial Intelligence & Quantum Computing',
            details: 'Komputer yang dibekali kemampuan penalaran berbasis kecerdasan buatan (AI), pemrosesan bahasa alami (Natural Language Processing), komputasi paralel masif, serta eksplorasi komputer kuantum (Qubit) yang mampu memproses komputasi super rumit dalam hitungan detik.',
            technicalNote: 'Teknologi fabrikasi prosesor modern telah mencapai skala litografi 3 nanometer.'
          }
        ],
        comparisonTable: {
          headers: ['Generasi', 'Periode', 'Komponen Utama', 'Ciri Khas & Bahasa'],
          rows: [
            ['Generasi 1', '1940 - 1956', 'Tabung Hampa (Vacuum Tube)', 'Ukuran raksasa, panas tinggi, bahasa mesin biner'],
            ['Generasi 2', '1956 - 1963', 'Transistor', 'Lebih ringkas, hemat daya, bahasa assembly & FORTRAN'],
            ['Generasi 3', '1964 - 1971', 'Integrated Circuit (IC)', 'Ribuan transistor dalam 1 chip, monitor & keyboard'],
            ['Generasi 4', '1971 - Kini', 'Mikroprosesor (VLSI/ULSI)', 'PC, laptop, smartphone, miliaran transistor, internet'],
            ['Generasi 5', 'Kini & Depan', 'AI & Komputasi Kuantum', 'Kecerdasan buatan, qubit, pemrosesan bahasa alami']
          ]
        }
      }
    ]
  }
];
