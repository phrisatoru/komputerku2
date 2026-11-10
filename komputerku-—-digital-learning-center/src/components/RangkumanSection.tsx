import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  CheckCircle, 
  Cpu, 
  Code, 
  Users, 
  RefreshCw, 
  BookMarked, 
  Award,
  Search,
  ExternalLink
} from 'lucide-react';
import { GLOSSARY_TERMS, MATERI_MODULES } from '../data/learningData';

interface RangkumanSectionProps {
  readModules: string[];
  bestScore: number | null;
  onNavigateTab: (tabId: string) => void;
  onNavigateToMateri: (moduleId: string) => void;
}

export const RangkumanSection: React.FC<RangkumanSectionProps> = ({
  readModules,
  bestScore,
  onNavigateTab,
  onNavigateToMateri,
}) => {
  const [glossarySearch, setGlossarySearch] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const filteredGlossary = GLOSSARY_TERMS.filter(
    (g) =>
      g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      g.meaning.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <section id="rangkuman" className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Intisari & Catatan Belajar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Rangkuman Sistem Komputer
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Ringkasan padat dan konsep esensial Kurikulum Informatika Kelas X yang wajib dikuasai sebelum menghadapi asesmen sumatif.
          </p>
        </div>

        {/* Print / Save button */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-medium transition-colors cursor-pointer shrink-0"
          title="Cetak atau Simpan sebagai PDF"
        >
          <Printer className="w-4 h-4 text-cyan-400" />
          <span>Cetak Catatan (PDF)</span>
        </button>
      </div>

      {/* Progress Overview Card */}
      <div className="bg-[#081224] border border-cyan-900/50 rounded-2xl p-6 mb-8 shadow-xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Status Pencapaian Belajarmu</span>
          <span className="text-cyan-400 font-mono text-xs">
            {readModules.length} dari 5 Modul Selesai Dibaca
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {MATERI_MODULES.map((m) => {
            const isRead = readModules.includes(m.id);
            return (
              <button
                key={m.id}
                onClick={() => onNavigateToMateri(m.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isRead
                    ? 'bg-cyan-950/40 border-cyan-700/60 text-cyan-300'
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span>Modul {m.letter}</span>
                  {isRead && <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />}
                </div>
                <div className="text-xs text-white font-medium mt-1 truncate">
                  {m.title.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            Kuis Evaluasi:{' '}
            {bestScore !== null ? (
              <span className="font-bold text-emerald-400 font-mono">
                Skor Terbaik: {bestScore}/100
              </span>
            ) : (
              <span className="text-amber-400">Belum dikerjakan</span>
            )}
          </div>
          <button
            onClick={() => onNavigateTab('kuis')}
            className="text-cyan-400 hover:underline font-semibold"
          >
            {bestScore !== null ? 'Kerjakan Ulang Kuis →' : 'Mulai Kerjakan Kuis →'}
          </button>
        </div>
      </div>

      {/* Main Pillars Summary Grid */}
      <div className="space-y-6">
        
        {/* Hardware Summary */}
        <div className="bg-[#081224] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Cpu className="w-4 h-4" />
            <span>Pilar 1: Perangkat Keras (Hardware)</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Struktur 4 Kategori Hardware Komputer
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            Hardware adalah wujud fisik komputer. Kinerjanya ditentukan oleh 4 pilar subsistem:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">1. Input Device</span>
              <p className="text-slate-300 leading-normal">
                Mengubah masukan fisik manusia menjadi biner. Contoh: Keyboard, Mouse, Scanner, Mikrofon, Touchscreen.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">2. Processing Device</span>
              <p className="text-slate-300 leading-normal">
                CPU (ALU untuk operasi logika/matematika, CU untuk pengontrol program, Register memori internal) dan GPU.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">3. Output Device</span>
              <p className="text-slate-300 leading-normal">
                Menyajikan informasi ke pengguna. Monitor & Speaker (softcopy), Printer & Plotter (hardcopy).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">4. Storage Device</span>
              <p className="text-slate-300 leading-normal">
                RAM (Primer, Volatile/sementara), ROM (Firmware UEFI, Non-volatile), SSD/HDD (Sekunder, permanen).
              </p>
            </div>
          </div>
        </div>

        {/* Software Summary */}
        <div className="bg-[#081224] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Code className="w-4 h-4" />
            <span>Pilar 2: Perangkat Lunak (Software)</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">
            Hirarki 3 Kategori Perangkat Lunak
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">System Software</span>
              <p className="text-slate-300 leading-normal">
                Sistem operasi (Windows, Linux, macOS) yang mengelola perangkat keras, serta firmware BIOS/UEFI dan driver.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">Application Software</span>
              <p className="text-slate-300 leading-normal">
                Program spesifik produktivitas pengguna seperti Microsoft 365, browser Chrome, dan software grafis Photoshop.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="font-bold text-cyan-300 block mb-1">Programming Software</span>
              <p className="text-slate-300 leading-normal">
                Utilitas pembuat kode seperti IDE (VS Code), Compiler (C++), dan Interpreter (Python) untuk menciptakan program baru.
              </p>
            </div>
          </div>
        </div>

        {/* Brainware & IPOS Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#081224] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Pilar 3: Brainware</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Hirarki Pengguna Sistem
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><strong className="text-white">System Analyst:</strong> Merancang kebutuhan dan arsitektur sistem.</li>
              <li><strong className="text-white">Programmer:</strong> Menulis kode logika aplikasi.</li>
              <li><strong className="text-white">Administrator:</strong> Mengatur database, jaringan, dan keamanan server.</li>
              <li><strong className="text-white">Operator:</strong> Menjalankan rutinitas harian entri data.</li>
              <li><strong className="text-white">User:</strong> Pengguna akhir aplikasi sehari-hari.</li>
            </ul>
          </div>

          <div className="bg-[#081224] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <RefreshCw className="w-4 h-4" />
              <span>Siklus IPOS</span>
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              Aliran Pemrosesan Data
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-mono text-cyan-400 text-[11px]">
                <span>INPUT</span> → <span>PROCESS</span> → <span>OUTPUT</span> → <span>STORAGE</span>
              </div>
              <p className="leading-relaxed">
                Data biner masuk dari periferal, dimuat ke buffer RAM, dikalkulasi oleh ALU di CPU, hasilnya ditampilkan lewat layar/audio, dan diarsipkan permanen ke SSD.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways & Exam Points */}
        <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-800/40 rounded-2xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-white uppercase tracking-wider mb-3">
            Poin-Poin Penting untuk Ujian & Penilaian
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Volatilitas:</strong> RAM bersifat volatile (hilang saat mati lampu), sedangkan ROM dan SSD bersifat non-volatile.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Komponen CPU:</strong> ALU (Aritmatika & Logika), CU (Kontrol instruksi), dan Register (memori internal sementara berkecepatan tertinggi).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Korelasi Trinitas:</strong> Sistem komputer tidak dapat bekerja jika salah satu dari Hardware, Software, atau Brainware ditiadakan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span><strong>Compiler vs Interpreter:</strong> Compiler menerjemahkan seluruh kode program sekaligus menjadi file biner, sedangkan Interpreter menerjemahkan kode baris per baris secara runtime.</span>
            </li>
          </ul>
        </div>

        {/* Kesimpulan Pembelajaran */}
        <div className="p-6 rounded-2xl bg-[#060e1d] border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
          <h4 className="font-bold text-white text-base">Kesimpulan Pembelajaran</h4>
          <p>
            Sistem komputer merupakan integrasi harmonis antara perangkat keras yang terorganisir dalam arsitektur Von Neumann, perangkat lunak berlapis mulai dari firmware hingga aplikasi siap pakai, serta kecakapan manusia (brainware) sebagai perancang dan pengguna. Penguasaan fondasi sistem komputer di kelas 10 SMA memberikan landasan kokoh bagi siswa untuk melangkah ke jenjang pemrograman lanjutan, rekayasa kecerdasan artifisial, dan keamanan siber.
          </p>
        </div>

        {/* Interactive Glossary Table */}
        <div className="bg-[#081224] border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h4 className="text-base font-bold text-white">Glosarium Istilah Penting</h4>
              <p className="text-xs text-slate-400">Kamus cepat istilah teknis Sistem Komputer.</p>
            </div>
            
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                placeholder="Cari istilah..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-cyan-500/50"
              />
            </div>
          </div>

          <div className="divide-y divide-slate-800/80 border border-slate-800 rounded-xl overflow-hidden">
            {filteredGlossary.map((item, idx) => (
              <div key={idx} className="p-3.5 bg-slate-950/40 hover:bg-slate-900/50 transition-colors text-xs flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="font-bold text-cyan-400 sm:w-1/3 shrink-0">{item.term}</span>
                <span className="text-slate-300 sm:w-2/3 leading-relaxed">{item.meaning}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
