import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Di bawah ini manakah definisi yang paling tepat mengenai Sistem Komputer?',
    options: [
      'Kumpulan perangkat fisik elektronik komputer yang dirakit di dalam sebuah casing.',
      'Perpaduan terintegrasi antara hardware, software, dan brainware untuk mengolah data menjadi informasi.',
      'Aplikasi sistem operasi yang mengatur jalannya seluruh program di komputer.',
      'Alat elektronik yang hanya digunakan untuk menghitung rumus matematika rumit.'
    ],
    correctAnswer: 1,
    explanation: 'Sistem Komputer adalah kesatuan terintegrasi dari tiga pilar utama: hardware (perangkat keras), software (perangkat lunak), dan brainware (manusia pengguna). Ketiganya harus bekerja sama untuk menerima data mentah, memprosesnya, dan menghasilkan informasi yang bermanfaat.',
    chapterRef: 'BAB 1: Pengertian Sistem Komputer'
  },
  {
    id: 2,
    question: 'Komponen internal CPU yang bertugas melakukan operasi perhitungan matematika (seperti penjumlahan dan pengurangan) serta perbandingan logika adalah...',
    options: [
      'Control Unit (CU)',
      'Program Counter (PC)',
      'Arithmetic Logic Unit (ALU)',
      'Random Access Memory (RAM)'
    ],
    correctAnswer: 2,
    explanation: 'ALU (Arithmetic Logic Unit) adalah bagian dari prosesor yang khusus menangani seluruh operasi aritmetika (perhitungan angka) dan operasi logika biner (AND, OR, NOT, perbandingan lebih besar/lebih kecil). Sedangkan CU bertugas mengatur lalu lintas sinyal instruksi.',
    chapterRef: 'BAB 2: Komponen Sistem Komputer'
  },
  {
    id: 3,
    question: 'Mengapa memori RAM (Random Access Memory) dikategorikan sebagai memori yang bersifat "volatile"?',
    options: [
      'Karena data yang tersimpan di dalamnya akan hilang saat aliran daya listrik terputus.',
      'Karena kapasitas penyimpanannya tidak dapat ditambah atau di-upgrade.',
      'Karena kecepatan transfer datanya lebih lambat dibandingkan hard disk piringan magnetik.',
      'Karena isinya hanya dapat dibaca dan tidak bisa diubah sejak keluar dari pabrik pembuat.'
    ],
    correctAnswer: 0,
    explanation: 'Sifat "volatile" berarti memori membutuhkan pasokan daya listrik terus-menerus untuk mempertahankan data. Jika komputer dimatikan atau listrik padam mendadak, seluruh data yang sedang aktif di RAM akan terhapus seketika. Sebaliknya, ROM dan SSD bersifat non-volatile.',
    chapterRef: 'BAB 2: Komponen Sistem Komputer'
  },
  {
    id: 4,
    question: 'Urutan siklus kerja fundamental pada sistem komputer (IPOS Cycle) yang benar adalah...',
    options: [
      'Process → Input → Output → Storage',
      'Input → Process → Output → Storage',
      'Output → Storage → Input → Process',
      'Input → Storage → Output → Process'
    ],
    correctAnswer: 1,
    explanation: 'Siklus IPOS adalah siklus dasar komputasi: 1) Input (data mentah dimasukkan lewat perangkat masukan), 2) Process (data diolah oleh CPU dan RAM), 3) Output (hasil olahan disajikan lewat monitor/printer), dan 4) Storage (data disimpan permanen di SSD/HDD untuk masa mendatang).',
    chapterRef: 'BAB 3: Cara Kerja Sistem Komputer'
  },
  {
    id: 5,
    question: 'Pada siklus mesin (Machine Cycle) di dalam mikroprosesor, proses menerjemahkan kode biner instruksi menjadi sinyal kendali mikro disebut tahap...',
    options: [
      'Fetch',
      'Decode',
      'Execute',
      'Store'
    ],
    correctAnswer: 1,
    explanation: 'Siklus mesin CPU terdiri dari: Fetch (mengambil instruksi dari RAM), Decode (menerjemahkan kode instruksi biner tersebut oleh Control Unit), dan Execute (mengeksekusi kalkulasi instruksi pada unit sirkuit ALU).',
    chapterRef: 'BAB 3: Cara Kerja Sistem Komputer'
  },
  {
    id: 6,
    question: 'Manakah dari kelompok perangkat keras berikut yang semuanya tergolong sebagai perangkat masukan (Input Devices)?',
    options: [
      'Keyboard, Mouse, dan Monitor',
      'Scanner, Mikrofon, dan Webcam',
      'Printer, Proyektor, dan Speaker',
      'CPU, RAM, dan SSD'
    ],
    correctAnswer: 1,
    explanation: 'Scanner (pemindai optik), Mikrofon (penerima getaran suara), dan Webcam (perekam frame video) semuanya berfungsi mengambil data dari lingkungan luar dan mengirimkannya ke sistem komputer dalam bentuk biner. Monitor, printer, dan speaker adalah perangkat output.',
    chapterRef: 'BAB 4: Perangkat Keras Komputer'
  },
  {
    id: 7,
    question: 'Program komputer seperti Windows 11, Ubuntu Linux, dan macOS diklasifikasikan ke dalam kategori perangkat lunak...',
    options: [
      'Software Aplikasi (Application Software)',
      'Sistem Operasi (Operating System)',
      'Software Utilitas (Utility Software)',
      'Bahasa Pemrograman (Programming Language)'
    ],
    correctAnswer: 1,
    explanation: 'Windows, Linux, dan macOS adalah Sistem Operasi (Operating System), yaitu perangkat lunak fondasi yang mengelola seluruh sumber daya hardware, memanajemen memori, mengatur eksekusi CPU, dan menyediakan antarmuka pengguna.',
    chapterRef: 'BAB 5: Perangkat Lunak Komputer'
  },
  {
    id: 8,
    question: 'Seorang profesional di bidang teknologi yang bertanggung jawab merancang, menulis kode program, menguji, dan mengembangkan aplikasi perangkat lunak disebut sebagai...',
    options: [
      'Operator Komputer',
      'Teknisi Komputer',
      'Programmer',
      'System Administrator'
    ],
    correctAnswer: 2,
    explanation: 'Programmer (atau Software Developer) adalah brainware yang menulis baris kode menggunakan bahasa pemrograman untuk menciptakan aplikasi. Operator hanya menjalankan program sehari-hari, teknisi memperbaiki hardware, dan administrator mengelola server/jaringan.',
    chapterRef: 'BAB 2 & BAB 5: Komponen & Software'
  },
  {
    id: 9,
    question: 'Apa yang akan terjadi jika sebuah unit komputer memiliki spesifikasi hardware tercanggih namun sama sekali tidak memiliki sistem operasi dan perangkat lunak di dalamnya?',
    options: [
      'Komputer tetap dapat membuka browser internet secara otomatis.',
      'Komputer tidak dapat difungsikan karena tidak ada instruksi program yang mengatur hardware.',
      'Hardware akan secara cerdas memprogram dirinya sendiri untuk melayani pengguna.',
      'Komputer hanya dapat menjalankan game namun tidak dapat mengetik dokumen.'
    ],
    correctAnswer: 1,
    explanation: 'Hardware hanyalah rangkaian sirkuit elektronik mati. Tanpa software (khususnya Sistem Operasi), tidak ada sinyal logika atau instruksi yang dapat memberi tahu CPU, RAM, atau monitor apa yang harus dilakukan, sehingga komputer lumpuh total.',
    chapterRef: 'BAB 6: Hubungan Hardware, Software, dan Brainware'
  },
  {
    id: 10,
    question: 'Komputer generasi pertama (1940-1956) seperti ENIAC memiliki karakteristik fisik yang sangat besar dan panas karena menggunakan komponen utama berupa...',
    options: [
      'Transistor silikon mini',
      'Mikroprosesor VLSI',
      'Tabung Hampa Udara (Vacuum Tube)',
      'Integrated Circuit (IC)'
    ],
    correctAnswer: 2,
    explanation: 'Komputer Generasi Pertama mengandalkan ribuan tabung hampa udara (vacuum tubes) kaca sebagai saklar elektronik. Komponen ini berukuran besar, cepat menghasilkan panas tinggi, sering terbakar/putus, dan memerlukan daya listrik yang sangat besar.',
    chapterRef: 'BAB 7: Manfaat dan Perkembangan Sistem Komputer'
  }
];
