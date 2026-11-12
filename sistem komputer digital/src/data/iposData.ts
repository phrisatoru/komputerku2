import { IPOSScenario } from '../types';

export const iposScenarios: IPOSScenario[] = [
  {
    id: 'mengetik-dokumen',
    name: 'Mengetik Dokumen Makalah di Word',
    description: 'Bagaimana penekanan tuts keyboard diproses hingga tersimpan rapi sebagai file di komputer.',
    steps: [
      {
        stage: 'input',
        title: 'Input: Penekanan Tombol Keyboard',
        device: 'Keyboard Mekanik / Membran',
        action: 'Siswa menekan tombol huruf "B" pada keyboard.',
        detail: 'Sirkuit mikro-controller keyboard mendeteksi kontak tombol dan mengirimkan scan code ASCII biner (01000010) melalui kabel USB ke port motherboard.'
      },
      {
        stage: 'process',
        title: 'Process: Pengolahan oleh CPU & RAM',
        device: 'CPU (Control Unit + ALU) & RAM',
        action: 'Sistem Operasi menerima interupsi dan CPU memproses karakter biner.',
        detail: 'CPU membaca kode biner dari buffer RAM, menerapkan perataan huruf dan font yang dipilih pada Microsoft Word, serta menghitung letak kursor teks selanjutnya.'
      },
      {
        stage: 'output',
        title: 'Output: Tampilan Huruf di Layar Monitor',
        device: 'GPU & Monitor IPS 1080p',
        action: 'Huruf "B" muncul seketika di posisi kursor monitor.',
        detail: 'GPU merender piksel font hitam pada latar putih dokumen dan mengirimkan sinyal video digital via kabel HDMI ke panel monitor dalam waktu kurang dari 8 milidetik.'
      },
      {
        stage: 'storage',
        title: 'Storage: Penyimpanan Permanen ke SSD',
        device: 'NVMe M.2 Solid State Drive',
        action: 'Pengguna menekan tombol Save (Ctrl + S).',
        detail: 'Sistem Operasi menulis file "Makalah_Sistem_Komputer.docx" ke dalam blok sel memori flash NAND SSD sehingga data aman tersimpan meski komputer dimatikan.'
      }
    ]
  },
  {
    id: 'kasir-minimarket',
    name: 'Memindai Barcode di Kasir Minimarket',
    description: 'Proses transaksi belanjaan dari pemindaian optik hingga pencetakan struk dan pembaruan stok.',
    steps: [
      {
        stage: 'input',
        title: 'Input: Pemindaian Garis Barcode',
        device: 'Barcode Scanner Optik Laser',
        action: 'Kasir mengarahkan sensor laser ke barcode kemasan susu.',
        detail: 'Sensor optik membaca pantulan pola garis hitam-putih dan mengubahnya menjadi deretan string kode digital "899276123456".'
      },
      {
        stage: 'process',
        title: 'Process: Pencarian Harga & Hitung Total',
        device: 'Komputer Kasir (CPU & Database POS)',
        action: 'Program kasir mencocokkan kode barang dan menghitung total belanjaan.',
        detail: 'CPU mencari nama barang "Susu Kotak 250ml", mengambil harga Rp 6.500 dari database memori, menghitung PPN 11%, dan mengakumulasikan total belanja belanjaan.'
      },
      {
        stage: 'output',
        title: 'Output: Tampilan Layar & Cetak Struk Fisik',
        device: 'Display Kasir & Thermal Printer',
        action: 'Layar kasir menampilkan total dan printer mengeluarkan struk kertas.',
        detail: 'Printer thermal memanaskan kertas khusus untuk mencetak rincian belanjaan dan barcode transaksi secara cepat tanpa menggunakan pita tinta.'
      },
      {
        stage: 'storage',
        title: 'Storage: Pemotongan Stok di Database',
        device: 'Server Penyimpanan Basis Data',
        action: 'Stok barang berkurang otomatis dari 50 menjadi 49 unit.',
        detail: 'Data transaksi penjualan tersimpan permanen di basis data server lokal minimarket dan disinkronkan ke server pusat secara berkala.'
      }
    ]
  },
  {
    id: 'streaming-musik',
    name: 'Mendengarkan Musik Streaming',
    description: 'Aliran data paket internet yang didekode menjadi gelombang suara merdu di telinga.',
    steps: [
      {
        stage: 'input',
        title: 'Input: Klik Judul Lagu & Aliran Paket Data',
        device: 'Mouse / Touchscreen & Kartu Wi-Fi/LAN',
        action: 'Siswa mengklik tombol Play pada aplikasi musik.',
        detail: 'Antarmuka aplikasi mengirim permintaan stream ke server, lalu modul Wi-Fi menerima paket data audio terkompresi (format Ogg Vorbis/AAC) dari internet.'
      },
      {
        stage: 'process',
        title: 'Process: Dekompresi Audio & Decoding',
        device: 'CPU & Audio DSP Chip',
        action: 'Prosesor membuka kompresi file audio biner.',
        detail: 'CPU dan chip suara memproses algoritma decoding audio secara terus-menerus (buffering) agar pemutaran lagu berjalan mulus tanpa jeda terputus-putus.'
      },
      {
        stage: 'output',
        title: 'Output: Getaran Suara di Speaker / Headphone',
        device: 'DAC (Digital-to-Analog Converter) & Earphone',
        action: 'Musik terdengar jelas melalui earphone.',
        detail: 'Chip DAC mengubah sinyal digital biner menjadi sinyal tegangan analog yang menggetarkan diafragma membran earphone menghasilkan gelombang bunyi.'
      },
      {
        stage: 'storage',
        title: 'Storage: Penyimpanan Cache Lagu Sementara',
        device: 'SSD / Cache Memory Penyimpanan',
        action: 'Lagu disimpan sementara di folder cache perangkat.',
        detail: 'Potongan lagu disimpan di memori cache penyimpanan lokal agar jika diulang tidak perlu mengunduh ulang kuota data internet.'
      }
    ]
  }
];
