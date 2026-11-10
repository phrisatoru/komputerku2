import {
  heroComputerSystem,
  componentCpuProcessor,
  componentMotherboard,
  componentRamStorage,
} from '../assets/images';

export interface MateriTopic {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
}

export interface ComponentItem {
  id: string;
  name: string;
  category: 'pemrosesan' | 'penyimpanan' | 'input-output' | 'daya-pendingin';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  specs: { label: string; value: string }[];
  mainFunction: string;
  roleInSystem: string;
  troubleshootingTip: string;
  image: string;
  fallbackGradient: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface IPOSScenario {
  id: string;
  title: string;
  description: string;
  steps: {
    stage: 'input' | 'process' | 'output' | 'storage';
    device: string;
    action: string;
    techDetail: string;
  }[];
}

// 1. IPOS Scenarios for interactive simulator
export const IPOS_SCENARIOS: IPOSScenario[] = [
  {
    id: 'typing',
    title: 'Mengetik Dokumen dan Menyimpan File',
    description: 'Siswa mengetik tugas makalah di Microsoft Word / Google Docs lalu menyimpannya ke SSD.',
    steps: [
      {
        stage: 'input',
        device: 'Keyboard Mekanikal',
        action: 'Siswa menekan tombol huruf "K"',
        techDetail: 'Key switch menutup sirkuit dan menghasilkan sinyal scan-code biner (misal ASCII 01001011) yang dikirim melalui bus USB ke motherboard.'
      },
      {
        stage: 'process',
        device: 'CPU (Control Unit & ALU) & RAM',
        action: 'CPU memproses instruksi pengetikan',
        techDetail: 'Interupsi hardware diterima oleh CPU, diterjemahkan oleh OS ke font glyph, dan disimpan sementara di buffer memory RAM utama.'
      },
      {
        stage: 'output',
        device: 'Monitor LED 1080p',
        action: 'Huruf "K" muncul di layar dokumen Word',
        techDetail: 'GPU merender buffer tampilan frame grafis dan mengirim sinyal piksel visual melalui kabel HDMI/DisplayPort pada refresh rate 60Hz/144Hz.'
      },
      {
        stage: 'storage',
        device: 'SSD NVMe PCIe Gen 4',
        action: 'Siswa menekan Ctrl+S untuk menyimpan berkas',
        techDetail: 'Data teks dari RAM ditulis secara permanen ke chip flash NAND non-volatile di SSD dengan kecepatan transfer hingga 5000 MB/s.'
      }
    ]
  },
  {
    id: 'streaming',
    title: 'Menonton Video Streaming YouTube 4K',
    description: 'Membuka peramban web dan menonton video pembelajaran informatika secara daring.',
    steps: [
      {
        stage: 'input',
        device: 'Mouse & Network Card (Wi-Fi 6)',
        action: 'Klik thumbnail video pada browser',
        techDetail: 'Perintah klik dikirim ke peramban, lalu kartu jaringan mengirim paket request HTTP/HTTPS ke server YouTube.'
      },
      {
        stage: 'process',
        device: 'CPU & GPU Hardware Decoder (AV1/HEVC)',
        action: 'CPU mengelola paket data dan GPU melakukan decoding video',
        techDetail: 'Paket streaming didekompresi secara real-time oleh media engine GPU, membagi aliran frame visual dan stream audio ke buffer RAM.'
      },
      {
        stage: 'output',
        device: 'Monitor 4K & Headphone Audio',
        action: 'Video bergerak mulus dan narasi terdengar jernih',
        techDetail: 'Display controller memproyeksikan 60 frame per detik ke panel monitor, sementara DAC (Digital-to-Analog Converter) menghasilkan gelombang suara ke headphone.'
      },
      {
        stage: 'storage',
        device: 'SSD Cache & RAM Buffer',
        action: 'Menyimpan potongan video sementara (Cache)',
        techDetail: 'Segment video disimpan dalam memory cache browser agar pemutaran tidak mengalami buffering (stuttering).'
      }
    ]
  },
  {
    id: 'gaming',
    title: 'Bermain Game Komputer 3D',
    description: 'Menjalankan game simulasi grafis tinggi dengan kontrol controller/keyboard.',
    steps: [
      {
        stage: 'input',
        device: 'Gamepad / Keyboard & Mouse',
        action: 'Pemain mengarahkan karakter bergerak maju',
        techDetail: 'Sumbu analog joystick mengirim koordinat posisi X/Y 1000 kali per detik (polling rate 1000Hz).'
      },
      {
        stage: 'process',
        device: 'CPU Multi-Core & Dedicated GPU (RTX)',
        action: 'Kalkulasi fisika 3D dan ray-tracing cahaya',
        techDetail: 'CPU menghitung deteksi tabrakan & logika kecerdasan AI musuh, sementara GPU merender poligon 3D serta pencahayaan grafis.'
      },
      {
        stage: 'output',
        device: 'Monitor Gaming High Refresh Rate',
        action: 'Tampilan grafis bergerak sangat responsif',
        techDetail: 'Frame visual disinkronkan dengan adaptive sync (FreeSync/G-Sync) pada 144 FPS tanpa tearing layar.'
      },
      {
        stage: 'storage',
        device: 'M.2 NVMe SSD',
        action: 'Auto-save checkpoint progres permainan',
        techDetail: 'Status posisi karakter, inventori, dan level disimpan otomatis dalam hitungan milidetik ke file savegame di penyimpanan.'
      }
    ]
  }
];

// 2. Hardware Detail Catalog
export const COMPUTER_COMPONENTS: ComponentItem[] = [
  {
    id: 'cpu',
    name: 'Central Processing Unit (CPU)',
    category: 'pemrosesan',
    categoryLabel: 'Pemrosesan',
    shortDesc: 'Otak utama komputer yang mengeksekusi instruksi program dan mengendalikan seluruh sistem.',
    fullDesc: 'CPU (Prosesor) bertanggung jawab membaca, menerjemahkan, dan menjalankan perintah komputasi. Terdiri atas ALU (Aritmatika & Logika), CU (Unit Kontrol), dan Register (memori internal sangat cepat). Kinerja CPU diukur berdasarkan Clock Speed (GHz), jumlah Core (inti prosesor), dan Cache (L1, L2, L3).',
    specs: [
      { label: 'Komponen Utama', value: 'ALU, CU, Register, Cache' },
      { label: 'Satuan Kecepatan', value: 'Gigahertz (GHz) & IPC' },
      { label: 'Teknologi Modern', value: 'Multi-core (6 - 16 Cores), 4nm/5nm' },
      { label: 'Produsen Terkemuka', value: 'Intel (Core i3/i5/i7/i9), AMD (Ryzen)' }
    ],
    mainFunction: 'Menjalankan siklus Fetch-Decode-Execute untuk seluruh instruksi sistem.',
    roleInSystem: 'Pusat komputasi di mana semua kalkulasi matematika dan keputusan logika perangkat lunak dieksekusi.',
    troubleshootingTip: 'Jika komputer sering restart sendiri atau lag berat, periksa suhu CPU (thermal throttling) dan ganti pasta pendingin (thermal paste).',
    image: componentCpuProcessor,
    fallbackGradient: 'from-cyan-950 to-slate-900'
  },
  {
    id: 'motherboard',
    name: 'Motherboard (Mainboard)',
    category: 'pemrosesan',
    categoryLabel: 'Pemrosesan',
    shortDesc: 'Papan sirkuit cetak utama yang menjadi tulang punggung penghubung seluruh komponen fisik.',
    fullDesc: 'Motherboard menyediakan jalur komunikasi elektronik (bus) berkecepatan tinggi yang menghubungkan CPU, RAM, kartu grafis, dan media penyimpanan. Dilengkapi dengan chipset pengatur lalu lintas data, soket CPU, slot ekspansi PCIe, VRM (pengatur voltase), dan chip BIOS/UEFI.',
    specs: [
      { label: 'Form Factor', value: 'ATX, Micro-ATX, Mini-ITX' },
      { label: 'Soket CPU', value: 'LGA1700 (Intel), AM5 (AMD)' },
      { label: 'Slot Ekspansi', value: 'PCIe 5.0 x16, M.2 NVMe, DDR5 DIMM' },
      { label: 'Firmware', value: 'UEFI (Unified Extensible Firmware Interface)' }
    ],
    mainFunction: 'Menghubungkan, mendistribusikan daya listrik, dan memfasilitasi pertukaran data antar komponen.',
    roleInSystem: 'Tanpa motherboard, komponen komputer hanyalah modul-modul terpisah yang tidak dapat saling berkomunikasi.',
    troubleshootingTip: 'Periksa lampu debug LED di motherboard jika komputer menyala namun tidak menampilkan gambar (POST error).',
    image: componentMotherboard,
    fallbackGradient: 'from-blue-950 to-slate-900'
  },
  {
    id: 'ram',
    name: 'Random Access Memory (RAM)',
    category: 'penyimpanan',
    categoryLabel: 'Penyimpanan Primer',
    shortDesc: 'Memori kerja berkecepatan sangat tinggi yang menyimpan data sementara saat komputer hidup.',
    fullDesc: 'RAM adalah media penyimpanan primer yang bersifat VOLATILE (data hilang ketika arus listrik diputus). Berfungsi menampung aplikasi yang sedang aktif dan data yang sedang diproses oleh CPU agar tidak perlu membaca terus-menerus dari SSD/HDD yang jauh lebih lambat.',
    specs: [
      { label: 'Sifat Memori', value: 'Volatile (Sementara)' },
      { label: 'Generasi Standar', value: 'DDR4 (3200 MT/s) & DDR5 (6000+ MT/s)' },
      { label: 'Kapasitas Umum', value: '8 GB, 16 GB, 32 GB' },
      { label: 'Bandwidth', value: 'Dual-Channel hingga 80+ GB/s' }
    ],
    mainFunction: 'Menyediakan akses data berkecepatan tinggi dalam satuan nanodetik bagi CPU.',
    roleInSystem: 'Menentukan seberapa lancar komputer melakukan multitasking (membuka puluhan tab browser & aplikasi bersamaan).',
    troubleshootingTip: 'Bunyi "beep" berulang saat menyalakan PC sering kali menandakan konektor kuningan RAM kotor atau kendor.',
    image: componentRamStorage,
    fallbackGradient: 'from-indigo-950 to-slate-900'
  },
  {
    id: 'ssd',
    name: 'Solid State Drive (SSD NVMe)',
    category: 'penyimpanan',
    categoryLabel: 'Penyimpanan Sekunder',
    shortDesc: 'Media penyimpanan permanen berbasis chip flash NAND berkecepatan tinggi tanpa komponen bergerak.',
    fullDesc: 'SSD menggunakan sel memori non-volatile berbasis chip flash, berbeda dengan hard disk tradisional yang menggunakan piringan magnetik berputar. Protokol NVMe (Non-Volatile Memory Express) lewat jalur PCIe memungkinkan kecepatan baca-tulis hingga puluhan kali lipat lebih cepat daripada HDD mekanik.',
    specs: [
      { label: 'Tipe Konektor', value: 'M.2 PCIe NVMe & SATA III' },
      { label: 'Kecepatan Baca', value: '3.500 MB/s (Gen3) - 7.500 MB/s (Gen4)' },
      { label: 'Sifat Memori', value: 'Non-Volatile (Permanen)' },
      { label: 'Daya Tahan', value: 'TBW (Terabytes Written)' }
    ],
    mainFunction: 'Menyimpan sistem operasi, software, dokumen, dan game secara aman dan permanen.',
    roleInSystem: 'Membuat waktu booting Windows hanya memakan waktu 5-10 detik dan membuka aplikasi berat menjadi instan.',
    troubleshootingTip: 'Jangan melakukan proses disk defragmentasi pada SSD karena tidak berguna dan justru memperpendek umur siklus flash NAND.',
    image: componentRamStorage,
    fallbackGradient: 'from-sky-950 to-slate-900'
  },
  {
    id: 'gpu',
    name: 'Graphics Processing Unit (GPU / VGA)',
    category: 'pemrosesan',
    categoryLabel: 'Pemrosesan Grafis',
    shortDesc: 'Prosesor khusus dengan ribuan core paralel untuk mengolah komputasi grafis dan video 3D.',
    fullDesc: 'GPU dirancang untuk memproses ribuan alur data secara simultan (paralel), menjadikannya sangat unggul untuk merender tekstur 3D game, animasi video, simulasi fisika, dan kecerdasan buatan. Dilengkapi memori khusus berkecepatan ekstrem bernama VRAM (GDDR6/GDDR6X).',
    specs: [
      { label: 'Arsitektur', value: 'Thousands of Stream Processors / CUDA Cores' },
      { label: 'Memori Khusus', value: '8 GB - 24 GB GDDR6 / GDDR6X VRAM' },
      { label: 'Antarmuka', value: 'PCIe 4.0 / 5.0 x16' },
      { label: 'Port Output', value: 'HDMI 2.1, DisplayPort 1.4/2.1' }
    ],
    mainFunction: 'Mengubah instruksi biner grafis menjadi sinyal visual yang dapat ditampilkan oleh monitor.',
    roleInSystem: 'Meringankan beban CPU dari pekerjaan komputasi visual yang masif.',
    troubleshootingTip: 'Layar bergaris-garis artefak warna-warni saat bermain game biasanya menandakan VRAM GPU mengalami panas berlebih atau rusak.',
    image: heroComputerSystem,
    fallbackGradient: 'from-emerald-950 to-slate-900'
  },
  {
    id: 'psu',
    name: 'Power Supply Unit (PSU)',
    category: 'daya-pendingin',
    categoryLabel: 'Daya & Pasokan Listrik',
    shortDesc: 'Penyuplai daya listrik yang mengubah arus AC tegangan tinggi menjadi arus DC tegangan rendah.',
    fullDesc: 'PSU mengonversi arus bolak-balik (AC 220V dari stopkontak PLN) menjadi arus searah (DC) dengan voltase presisi (+12V, +5V, dan +3.3V) yang aman untuk komponen komputer. Memiliki sertifikasi efisiensi 80 Plus (Bronze, Gold, Platinum).',
    specs: [
      { label: 'Kapasitas Daya', value: '450W - 1000W' },
      { label: 'Sertifikasi Efisiensi', value: '80 Plus (Standard, Bronze, Gold, Platinum)' },
      { label: 'Proteksi Listrik', value: 'OVP, UVP, OCP, OPP, SCP, OTP' },
      { label: 'Tipe Kabel', value: 'Non-Modular, Semi-Modular, Full Modular' }
    ],
    mainFunction: 'Mendistribusikan energi listrik stabil ke motherboard, CPU, GPU, dan drive penyimpanan.',
    roleInSystem: 'Jantung pasokan energi; PSU yang buruk dapat merusak seluruh komponen internal komputer saat terjadi lonjakan listrik.',
    troubleshootingTip: 'Selalu gunakan PSU berlabel 80 Plus asli dengan proteksi lengkap untuk mencegah lonjakan listrik membakar motherboard.',
    image: heroComputerSystem,
    fallbackGradient: 'from-amber-950 to-slate-900'
  },
  {
    id: 'cooling',
    name: 'Sistem Pendingin (Cooler & Fans)',
    category: 'daya-pendingin',
    categoryLabel: 'Pendingin Sistem',
    shortDesc: 'Menjaga suhu operasional komponen krusial agar tidak mengalami thermal throttling.',
    fullDesc: 'Ketika CPU dan GPU bekerja keras, miliaran transistor menghasilkan panas tinggi. Sistem pendingin menggunakan heatsink aluminium/tembaga dengan kipas (Air Cooler) atau pompa cairan tertutup (AIO Liquid Cooler) untuk membuang panas ke luar casing.',
    specs: [
      { label: 'Varian', value: 'Air Cooler (Tower Heatpipe) & AIO Liquid Cooler' },
      { label: 'Bahan Pendingin', value: 'Copper Baseplate + Aluminum Fins' },
      { label: 'Konektor Kipas', value: '4-Pin PWM (Pulse Width Modulation)' },
      { label: 'Target Suhu Ideal', value: 'Idle: 35-45°C, Full Load: < 80°C' }
    ],
    mainFunction: 'Mendisipasi panas yang dihasilkan oleh prosesor dan komponen daya secara kontinu.',
    roleInSystem: 'Menjaga performa komputasi tetap maksimal dan mencegah kerusakan silikon akibat panas ekstrem.',
    troubleshootingTip: 'Kipas yang mendengung sangat kencang terus-menerus biasanya tanda pasta pendingin kering atau debu menyumbat kisi heatsink.',
    image: heroComputerSystem,
    fallbackGradient: 'from-teal-950 to-slate-900'
  },
  {
    id: 'peripherals',
    name: 'Periferal Input & Output (I/O)',
    category: 'input-output',
    categoryLabel: 'Input & Output',
    shortDesc: 'Antarmuka interaksi fisik antara manusia (brainware) dan sistem komputer.',
    fullDesc: 'Perangkat input memungkinkan siswa memasukkan instruksi, teks, dan gesture (Keyboard, Mouse, Mikrofon, Scanner, Kamera Web). Perangkat output menampilkan hasil pemrosesan informasi secara visual, audio, atau cetakan fisik (Monitor IPS/OLED, Speaker Stereo, Printer Laser).',
    specs: [
      { label: 'Perangkat Input', value: 'Keyboard, Mouse, Scanner, Mikrofon, WebCam' },
      { label: 'Perangkat Output', value: 'Monitor (Refresh Rate 60-144Hz), Speaker, Printer' },
      { label: 'Antarmuka Koneksi', value: 'USB-C, USB-A 3.2, Bluetooth 5.3, DisplayPort' },
      { label: 'Tipe Sinyal', value: 'Analog ke Digital (ADC) & Digital ke Analog (DAC)' }
    ],
    mainFunction: 'Menerjemahkan bahasa manusia menjadi sinyal biner dan sebaliknya.',
    roleInSystem: 'Jembatan sensorik interaksi langsung pengguna dalam kehidupan sehari-hari.',
    troubleshootingTip: 'Jika keyboard atau mouse USB tidak terdeteksi, coba colok ke port USB belakang (langsung ke motherboard) bukan port casing depan.',
    image: heroComputerSystem,
    fallbackGradient: 'from-slate-900 to-cyan-950'
  }
];

// 3. Quiz Questions: 10 authentic questions for Grade 10 Informatics (SMA Kelas X)
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Penyimpanan Primer & Sekunder',
    question: 'Manakah pernyataan yang paling tepat mengenai perbedaan sifat penyimpanan antara RAM dan ROM pada sistem komputer?',
    options: [
      'RAM bersifat non-volatile dan datanya tetap tersimpan saat listrik padam, sedangkan ROM bersifat volatile.',
      'RAM bersifat volatile dan datanya hilang saat listrik padam, sedangkan ROM bersifat non-volatile dan menyimpan firmware BIOS/UEFI.',
      'RAM hanya dapat dibaca saja (read-only), sedangkan ROM dapat dibaca dan ditulisi kapan saja secara acak.',
      'Keduanya sama-sama bersifat volatile namun RAM memiliki kapasitas yang lebih kecil daripada ROM.'
    ],
    correctIndex: 1,
    explanation: 'RAM (Random Access Memory) bersifat VOLATILE, artinya semua data yang ditampung akan hilang seketika saat suplai daya listrik terputus. Sebaliknya, ROM (Read-Only Memory) bersifat NON-VOLATILE, datanya permanen dan digunakan untuk menyimpan program awal inisialisasi perangkat keras (firmware BIOS/UEFI).'
  },
  {
    id: 2,
    topic: 'Pemrosesan (CPU Architecture)',
    question: 'Di dalam struktur internal prosesor (CPU), unit manakah yang bertugas secara spesifik untuk melakukan operasi penjumlahan, pengurangan, perbandingan logika, dan operasi Boolean (AND, OR, NOT)?',
    options: [
      'Control Unit (CU)',
      'Arithmetic Logic Unit (ALU)',
      'Memory Register',
      'System Bus Controller'
    ],
    correctIndex: 1,
    explanation: 'ALU (Arithmetic Logic Unit) adalah bagian inti dari CPU yang mengeksekusi semua operasi aritmatika (seperti tambah, kurang, kali, bagi) dan operasi logika perbandingan (seperti lebih besar, sama dengan, logika AND/OR/NOT). Adapun Control Unit (CU) bertugas mengatur dan mengoordinasikan lalu lintas instruksi.'
  },
  {
    id: 3,
    topic: 'Hardware (Motherboard)',
    question: 'Papan sirkuit elektronik utama yang berfungsi menyatukan, menghubungkan, dan menjadi media komunikasi bus antar komponen seperti CPU, RAM, GPU, dan Storage disebut...',
    options: [
      'Processor Socket Unit',
      'Motherboard (Mainboard)',
      'Power Distribution Board',
      'Network Interface Card'
    ],
    correctIndex: 1,
    explanation: 'Motherboard (Mainboard) adalah papan sirkuit utama tempat semua komponen fisik komputer dipasang atau dihubungkan melalui jalur komunikasi data (bus), soket, dan slot ekspansi, sehingga seluruh subsistem dapat saling berkoordinasi.'
  },
  {
    id: 4,
    topic: 'Perangkat Lunak (Software)',
    question: 'Di bawah ini, kelompok perangkat lunak manakah yang seluruh anggotanya termasuk ke dalam kategori System Software (Perangkat Lunak Sistem)?',
    options: [
      'Microsoft Word, Adobe Photoshop, dan Google Chrome',
      'Windows 11, Linux Ubuntu, dan Driver Kartu Grafis',
      'Python, Visual Studio Code, dan GCC Compiler',
      'Canva, Spotify, dan WhatsApp Desktop'
    ],
    correctIndex: 1,
    explanation: 'System Software mencakup Sistem Operasi (seperti Windows 11, Linux Ubuntu, macOS) dan utilitas tingkat rendah termasuk Device Drivers (firmware/driver pengontrol perangkat keras). Microsoft Word dan Photoshop adalah Application Software, sedangkan VS Code dan Python adalah Programming Software.'
  },
  {
    id: 5,
    topic: 'Siklus Cara Kerja (IPOS)',
    question: 'Urutan siklus pemrosesan data dasar pada sistem komputer yang benar menurut konsep IPOS Cycle adalah...',
    options: [
      'Process → Input → Storage → Output',
      'Input → Process → Output → Storage',
      'Input → Storage → Process → Output',
      'Output → Process → Input → Storage'
    ],
    correctIndex: 1,
    explanation: 'Siklus kerja dasar komputer adalah IPOS: Input (data dimasukkan lewat keyboard/mouse) → Process (CPU mengolah data tersebut dengan bantuan RAM) → Output (hasil ditampilkan ke monitor/printer) → Storage (hasil disimpan secara permanen ke media simpan seperti SSD atau hard disk).'
  },
  {
    id: 6,
    topic: 'Pengguna Sistem (Brainware)',
    question: 'Seorang profesional teknologi informasi yang bertugas menganalisis kebutuhan organisasi, merancang alur logika arsitektur sistem, dan menyusun spesifikasi sebelum program ditulis oleh programmer disebut...',
    options: [
      'Operator Komputer',
      'End User',
      'System Analyst',
      'Database Administrator'
    ],
    correctIndex: 2,
    explanation: 'System Analyst bertanggung jawab meneliti masalah dan kebutuhan pengguna, lalu merancang spesifikasi sistem informasi secara komprehensif. Setelah rancangan selesai, Programmer bertugas menerjemahkannya ke dalam baris-baris kode pemrograman.'
  },
  {
    id: 7,
    topic: 'Perangkat Lunak Pemrograman',
    question: 'Apa perbedaan mendasar antara Compiler dan Interpreter dalam mengeksekusi kode program software?',
    options: [
      'Compiler menerjemahkan seluruh kode sumber sekaligus menjadi file biner siap pakai, sedangkan Interpreter menerjemahkan baris demi baris secara berurutan saat program dijalankan.',
      'Compiler digunakan khusus untuk aplikasi web, sedangkan Interpreter hanya digunakan pada sistem operasi.',
      'Compiler menerjemahkan kode baris demi baris, sedangkan Interpreter mengubah seluruh kode menjadi kode mesin sebelum dieksekusi.',
      'Compiler tidak memerlukan perangkat keras untuk dijalankan, sedangkan Interpreter membutuhkan prosesor khusus.'
    ],
    correctIndex: 0,
    explanation: 'Compiler (misal pada C++ atau Go) menerjemahkan keseluruhan source code menjadi kode mesin (file .exe/biner) sebelum program dapat dijalankan. Interpreter (misal pada Python atau JavaScript) membaca dan mengeksekusi kode instruksi baris demi baris secara runtime.'
  },
  {
    id: 8,
    topic: 'Hardware (Output Device)',
    question: 'Perangkat keras keluaran (output device) yang menghasilkan informasi dalam bentuk salinan fisik nyata (hardcopy) di atas kertas adalah...',
    options: [
      'Monitor OLED',
      'Proyektor Digital',
      'Printer',
      'Speaker Stereo'
    ],
    correctIndex: 2,
    explanation: 'Printer adalah output device yang mencetak dokumen digital menjadi salinan fisik di atas kertas (hardcopy). Sebaliknya, monitor dan proyektor menghasilkan keluaran tampilan elektronik (softcopy), sedangkan speaker menghasilkan sinyal audio.'
  },
  {
    id: 9,
    topic: 'Teknologi Penyimpanan',
    question: 'Mengapa Solid State Drive (SSD) berbasis NVMe jauh lebih cepat dan tahan guncangan dibandingkan Hard Disk Drive (HDD) konvensional?',
    options: [
      'Karena SSD memiliki motor dinamo yang berputar pada kecepatan lebih dari 10.000 RPM.',
      'Karena SSD menggunakan chip semikonduktor flash NAND tanpa bagian mekanik bergerak, sedangkan HDD menggunakan piringan magnetik berputar dan head baca mekanik.',
      'Karena SSD menggunakan kabel tembaga yang lebih tebal daripada HDD.',
      'Karena SSD menyimpan data dalam bentuk optik seperti kepingan CD-ROM.'
    ],
    correctIndex: 1,
    explanation: 'SSD bekerja murni secara elektronik menggunakan memori flash semikonduktor (NAND Flash) tanpa ada bagian fisik yang bergerak sama sekali (tanpa piringan atau jarum mekanik). Hal ini membuat SSD tidak menimbulkan suara bising, jauh lebih tahan guncangan fisik, dan memiliki waktu akses data (access time) yang ribuan kali lebih cepat daripada HDD mekanik.'
  },
  {
    id: 10,
    topic: 'Hardware (Power & Infrastructure)',
    question: 'Komponen perangkat keras yang bertugas menerima arus listrik bolak-balik (AC) bertegangan tinggi dari stopkontak PLN dan mengonversinya menjadi arus searah (DC) dengan voltase rendah yang stabil untuk motherboard dan periferal adalah...',
    options: [
      'Uninterruptible Power Supply (UPS)',
      'Power Supply Unit (PSU)',
      'Voltage Regulator Module (VRM)',
      'Thermal Heatpipe Cooler'
    ],
    correctIndex: 1,
    explanation: 'PSU (Power Supply Unit) adalah perangkat internal di dalam casing komputer yang mengubah tegangan listrik AC 220V dari jala-jala listrik menjadi tegangan DC rendah (+3.3V, +5V, +12V) yang dibutuhkan oleh komponen elektronik di dalam PC.'
  }
];

// 4. Learning Modules Content
export const MATERI_MODULES = [
  {
    id: 'intro',
    letter: 'A',
    title: 'Pengenalan Sistem Komputer',
    tag: 'Dasar Konsep',
    summary: 'Memahami apa itu sistem komputer, definisi ilmiah, tujuan utama pengolahan data, serta hubungan sinergis ketiga pilar pendukungnya.',
    content: {
      definition: 'Sistem Komputer adalah kumpulan perangkat keras (Hardware), perangkat lunak (Software), dan manusia (Brainware) yang saling terhubung, berinteraksi, dan berkolaborasi secara terpadu untuk menerima data masukan, mengolahnya sesuai instruksi logika yang diberikan, menghasilkan keluaran berupa informasi yang bermanfaat, serta menyimpannya untuk keperluan di masa mendatang.',
      goals: [
        'Mengolah data mentah (data angka, teks, suara, gambar) menjadi informasi terstruktur yang memiliki makna bagi manusia.',
        'Meningkatkan efisiensi, akurasi, dan kecepatan dalam pemecahan masalah komputasi kompleks.',
        'Memfasilitasi otomasi tugas-tugas berulang dalam dunia sains, industri, pendidikan, dan kehidupan sehari-hari.'
      ],
      theTrinity: [
        {
          name: 'Hardware (Perangkat Keras)',
          role: 'Raga / Fisik',
          desc: 'Wujud fisik nyata yang dapat dilihat, disentuh, dan dialiri arus listrik (CPU, Motherboard, Keyboard, Layar).'
        },
        {
          name: 'Software (Perangkat Lunak)',
          role: 'Jiwa / Instruksi Logika',
          desc: 'Program tak berwujud berupa baris-baris kode yang memberi tahu hardware apa yang harus dilakukan.'
        },
        {
          name: 'Brainware (Manusia / Pengguna)',
          role: 'Akal / Pengendali',
          desc: 'Manusia yang merancang, memberi perintah, mengoperasikan, dan memanfaatkan hasil informasi sistem.'
        }
      ],
      crucialRule: 'Ketiga elemen tersebut TIDAK DAPAT BERDIRI SENDIRI. Hardware secanggih apapun tidak akan menyala tanpa Software (BIOS & OS), dan software tercanggih di dunia tidak ada gunanya tanpa Brainware yang memanfaatkannya.'
    }
  },
  {
    id: 'hardware',
    letter: 'B',
    title: 'Hardware (Perangkat Keras)',
    tag: 'Komponen Fisik',
    summary: 'Mempelajari 4 klasifikasi perangkat keras komputer: Input Device, Processing Device, Output Device, dan Storage Device beserta contoh komponen dan fungsinya.',
    categories: [
      {
        name: '1. Input Device (Perangkat Masukan)',
        desc: 'Perangkat yang digunakan pengguna untuk memasukkan data dan instruksi ke dalam sistem komputer.',
        items: [
          { name: 'Keyboard', role: 'Memasukkan data teks, angka, simbol, serta kombinasi shortcut perintah.' },
          { name: 'Mouse & Touchpad', role: 'Mengendalikan kursor penunjuk (pointer) dengan aksi klik, scroll, dan drag.' },
          { name: 'Scanner', role: 'Mengonversi lembar dokumen fisik atau foto menjadi gambar digital (format JPG/PDF).' },
          { name: 'Mikrofon (Microphone)', role: 'Menangkap gelombang suara analog dan mengubahnya menjadi sinyal audio digital.' },
          { name: 'Webcam & Kamera', role: 'Menangkap gambar dan video real-time untuk komunikasi atau pengenalan wajah.' }
        ]
      },
      {
        name: '2. Processing Device (Perangkat Pemrosesan)',
        desc: 'Komponen yang melakukan kalkulasi, pengolahan logika, dan pengaturan aliran instruksi.',
        items: [
          { name: 'Central Processing Unit (CPU)', role: 'Terdiri dari ALU (kalkulasi angka & logika), CU (pengontrol jalannya program), dan Register (memori super cepat di dalam chip).' },
          { name: 'Motherboard', role: 'Papan sirkuit utama dengan jalur bus tembaga yang menghubungkan seluruh komponen satu sama lain.' },
          { name: 'Graphics Processing Unit (GPU)', role: 'Prosesor khusus pengolah piksel grafis 3D dan rendering visual berkecepatan tinggi.' }
        ]
      },
      {
        name: '3. Output Device (Perangkat Keluaran)',
        desc: 'Perangkat yang menyajikan hasil pemrosesan data kepada pengguna dalam bentuk visual, cetak, atau suara.',
        items: [
          { name: 'Monitor', role: 'Menampilkan visual grafis antarmuka sistem operasi dan aplikasi (softcopy).' },
          { name: 'Printer', role: 'Mencetak dokumen digital dan gambar ke atas media fisik kertas (hardcopy).' },
          { name: 'Speaker & Headphone', role: 'Mengeluarkan sinyal audio frekuensi suara yang dapat didengar telinga manusia.' },
          { name: 'Proyektor', role: 'Memproyeksikan tampilan visual ke layar besar untuk keperluan presentasi kelas.' }
        ]
      },
      {
        name: '4. Storage Device (Perangkat Penyimpanan)',
        desc: 'Media penyimpan data, terbagi menjadi Memori Primer (sementara) dan Memori Sekunder (permanen).',
        items: [
          { name: 'RAM (Penyimpanan Primer)', role: 'Volatile (data hilang saat mati listrik). Sangat cepat, menampung aplikasi yang sedang aktif berjalan.' },
          { name: 'ROM (Read-Only Memory)', role: 'Non-volatile. Berisi instruksi firmware BIOS/UEFI untuk booting inisialisasi awal.' },
          { name: 'SSD (Solid State Drive)', role: 'Penyimpanan sekunder modern menggunakan chip flash NAND super cepat tanpa bagian mekanik.' },
          { name: 'HDD (Hard Disk Drive)', role: 'Penyimpanan sekunder tradisional menggunakan piringan magnetik berputar (5400/7200 RPM).' },
          { name: 'Penyimpanan Awan (Cloud Storage)', role: 'Menyimpan data di server jarak jauh melalui koneksi internet (Google Drive, OneDrive).' }
        ]
      }
    ]
  },
  {
    id: 'software',
    letter: 'C',
    title: 'Software (Perangkat Lunak)',
    tag: 'Instruksi Terprogram',
    summary: 'Membedah klasifikasi perangkat lunak: System Software (Sistem Operasi, Firmware, Driver), Application Software, dan Programming Software.',
    categories: [
      {
        name: '1. System Software (Perangkat Lunak Sistem)',
        desc: 'Perangkat lunak tingkat dasar yang mengelola sumber daya perangkat keras dan menyediakan platform untuk menjalankan aplikasi.',
        subcategories: [
          {
            title: 'Sistem Operasi (Operating System / OS)',
            examples: 'Microsoft Windows 11, Linux (Ubuntu, Debian), macOS Sonoma, Android, iOS.',
            role: 'Mengatur alokasi memori, penjadwalan CPU, manajemen berkas (file system), keamanan, dan antarmuka pengguna (GUI/CLI).'
          },
          {
            title: 'Firmware (BIOS / UEFI)',
            examples: 'AMI UEFI BIOS, Phoenix BIOS.',
            role: 'Kode program permanen yang tertanam pada chip motherboard untuk melakukan POST (Power-On Self Test) dan memuat bootloader OS.'
          },
          {
            title: 'Device Driver',
            examples: 'NVIDIA GeForce Driver, Realtek Audio Driver, Intel Wi-Fi Driver.',
            role: 'Penerjemah komunikasi antara sistem operasi dengan perangkat keras spesifik agar dapat berfungsi normal.'
          }
        ]
      },
      {
        name: '2. Application Software (Perangkat Lunak Aplikasi)',
        desc: 'Program yang dibuat secara khusus untuk membantu pengguna manusia menyelesaikan tugas-tugas produktivitas sehari-hari.',
        subcategories: [
          {
            title: 'Aplikasi Perkantoran & Produktivitas',
            examples: 'Microsoft 365 (Word, Excel, PowerPoint), Google Workspace (Docs, Sheets), LibreOffice.',
            role: 'Pembuatan dokumen teks, kalkulasi tabel akuntansi, dan presentasi.'
          },
          {
            title: 'Peramban Web (Web Browser)',
            examples: 'Google Chrome, Mozilla Firefox, Microsoft Edge, Safari.',
            role: 'Menjelajahi halaman internet dan menjalankan aplikasi web berbasis cloud.'
          },
          {
            title: 'Desain Grafis & Multimedia',
            examples: 'Adobe Photoshop, Premiere Pro, Blender 3D, Figma, Canva.',
            role: 'Manipulasi gambar raster/vektor, penyuntingan video, dan pemodelan 3 dimensi.'
          }
        ]
      },
      {
        name: '3. Programming Software (Perangkat Lunak Pemrograman)',
        desc: 'Perangkat dan utilitas yang digunakan para programmer untuk menulis, menguji, menerjemahkan, dan melakukan debugging kode program.',
        subcategories: [
          {
            title: 'Integrated Development Environment (IDE) & Code Editor',
            examples: 'Visual Studio Code, PyCharm, Android Studio, Code::Blocks.',
            role: 'Menyediakan editor teks berfitur syntax highlighting, autocompletion, dan debugger terpadu.'
          },
          {
            title: 'Compiler (Penerjemah Kompilasi)',
            examples: 'GCC (C/C++), GHC (Haskell), Rustc.',
            role: 'Menerjemahkan seluruh kode program sekaligus menjadi bahasa mesin (file binary .exe) sebelum dieksekusi.'
          },
          {
            title: 'Interpreter (Penerjemah Interpretasi)',
            examples: 'Python Interpreter, Node.js V8 Engine.',
            role: 'Menerjemahkan dan menjalankan instruksi baris demi baris secara interaktif tanpa kompilasi awal.'
          }
        ]
      }
    ]
  },
  {
    id: 'brainware',
    letter: 'D',
    title: 'Brainware (Pengguna Manusia)',
    tag: 'Unsur Insani',
    summary: 'Mengenal peran manusia dalam sistem komputasi: Programmer, System Analyst, Administrator, Operator, dan End-User.',
    roles: [
      {
        name: '1. System Analyst (Analis Sistem)',
        badge: 'Perancang Arsitektur',
        desc: 'Merancang dan menganalisis kebutuhan sistem secara menyeluruh dari sudut pandang bisnis dan teknis.',
        tasks: 'Melakukan wawancara kebutuhan klien, membuat flowchart, diagram DFD/UML, dan menentukan arsitektur sistem yang akan dibangun.'
      },
      {
        name: '2. Programmer (Pengembang Perangkat Lunak)',
        badge: 'Pembuat Kode',
        desc: 'Menulis baris-baris kode instruksi menggunakan bahasa pemrograman (Python, Java, C++, TypeScript).',
        tasks: 'Menerjemahkan rancangan sistem analis menjadi kode executable, melakukan unit test, dan memperbaiki bug program.'
      },
      {
        name: '3. Administrator (Network / Database / SysAdmin)',
        badge: 'Pengelola & Penjaga',
        desc: 'Mengelola kestabilan, performa, dan keamanan infrastruktur sistem komputer serta database.',
        tasks: 'Mengatur hak akses izin pengguna, memelihara cadangan data (backup), mengamankan jaringan dari malware, dan mengonfigurasi server.'
      },
      {
        name: '4. Operator Komputer',
        badge: 'Pelaksana Operasional',
        desc: 'Mengoperasikan perangkat keras dan sistem komputer untuk tugas-tugas rutin pemrosesan data harian.',
        tasks: 'Memasukkan input data massal, memantau log pencetakan batch, serta menjalankan prosedur harian backup terstruktur.'
      },
      {
        name: '5. User / End-User (Pengguna Akhir)',
        badge: 'Pemakai Aplikasi',
        desc: 'Masyarakat umum atau siswa yang menggunakan aplikasi komputer untuk mempermudah aktivitas kehidupan sehari-hari.',
        tasks: 'Mengetik tugas di Word, mencari materi di Google, menonton video edukasi, bertukar pesan, dan menyusun laporan kegiatan.'
      }
    ]
  },
  {
    id: 'ipos',
    letter: 'E',
    title: 'Cara Kerja Sistem Komputer (Siklus IPOS)',
    tag: 'Siklus Operasi Terpadu',
    summary: 'Memahami bagaimana data bertransformasi menjadi informasi melalui siklus 4 tahap: Input, Process, Output, dan Storage.',
    cycleStages: [
      {
        stage: 'Input (Masukan)',
        subtitle: 'Tahap 1',
        desc: 'Pengguna memasukkan data mentah ke dalam sistem melalui periferal input seperti keyboard, mouse, mikrofon, atau kamera.',
        tech: 'Data analog diubah menjadi kode biner (0 dan 1) melalui encoder dan dikirim ke controller bus.'
      },
      {
        stage: 'Process (Pemrosesan)',
        subtitle: 'Tahap 2',
        desc: 'CPU bersama RAM memproses data biner sesuai alur algoritma instruksi yang tersimpan di memori kerja.',
        tech: 'Control Unit mengatur pengambilan instruksi (fetch), decode, dan ALU melakukan operasi kalkulasi matematis/logika.'
      },
      {
        stage: 'Output (Keluaran)',
        subtitle: 'Tahap 3',
        desc: 'Hasil pengolahan data disajikan kepada pengguna dalam format yang mudah dipahami manusia.',
        tech: 'Sinyal biner diubah menjadi tampilan visual di monitor, gelombang audio di speaker, atau cetakan fisik di kertas.'
      },
      {
        stage: 'Storage (Penyimpanan)',
        subtitle: 'Tahap 4',
        desc: 'Hasil data atau dokumen yang telah diproses disimpan secara aman untuk dibuka kembali di lain waktu.',
        tech: 'Data ditulis secara magnetik atau flash elektron ke media sekunder non-volatile (SSD/HDD/Cloud).'
      }
    ]
  }
];

// 5. Glossary of terms for Revision page
export const GLOSSARY_TERMS = [
  { term: 'ALU (Arithmetic Logic Unit)', meaning: 'Bagian prosesor yang khusus melakukan perhitungan aritmatika dan perbandingan logika.' },
  { term: 'CU (Control Unit)', meaning: 'Bagian prosesor yang mengendalikan lalu lintas data dan sinkronisasi instruksi antar komponen.' },
  { term: 'Register', meaning: 'Memori internal di dalam chip CPU dengan kecepatan tertinggi dan ukuran kecil untuk menyimpan operan instruksi saat ini.' },
  { term: 'Cache Memory', meaning: 'Memori penyangga perantara antara CPU dan RAM utama yang dibagi menjadi tingkatan L1, L2, dan L3.' },
  { term: 'Volatile', meaning: 'Sifat memori yang membutuhkan daya listrik untuk mempertahankan datanya; jika listrik padam, seluruh data hilang (misal: RAM).' },
  { term: 'Non-Volatile', meaning: 'Sifat memori yang tetap menyimpan datanya meskipun aliran listrik dimatikan (misal: ROM, SSD, Flashdisk).' },
  { term: 'UEFI / BIOS', meaning: 'Firmware tingkat dasar yang menginisialisasi hardware dan memuat sistem operasi saat komputer baru pertama kali dinyalakan.' },
  { term: 'Driver', meaning: 'Perangkat lunak khusus yang bertindak sebagai jembatan komunikasi antara sistem operasi dengan perangkat keras spesifik.' },
  { term: 'Kernel', meaning: 'Inti terdalam dari sebuah sistem operasi yang mengontrol akses langsung ke CPU, memori, dan perangkat keras.' },
  { term: 'Bus Sistem', meaning: 'Kumpulan konduktor jalur sirkuit listrik yang digunakan untuk memindahkan data, alamat, dan sinyal kendali antar modul PC.' }
];
