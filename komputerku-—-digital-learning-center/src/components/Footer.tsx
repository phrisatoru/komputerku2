import React from 'react';
import { Cpu, BookOpen, HelpCircle, Layers, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tabId: string) => void;
  onOpenSearch: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenSearch }) => {
  return (
    <footer className="w-full bg-[#03070f] border-t border-slate-800/80 pt-12 pb-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span>KOMPUTER<span className="text-cyan-400">KU</span></span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              KOMPUTERKU — Media Pembelajaran Informatika Kelas X. Pusat materi pembelajaran interaktif Sistem Komputer, galeri perangkat keras, dan simulasi IPOS berstandar Kurikulum Merdeka.
            </p>
          </div>

          {/* Col 2: Navigasi Materi */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Modul Pembelajaran</h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigateTab('materi')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Modul A: Pengenalan Sistem Komputer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('materi')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Modul B: Hardware & 4 Klasifikasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('materi')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Modul C: Software & Sistem Operasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('materi')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Modul D: Brainware & Peran Pengguna
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('materi')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Modul E: Siklus IPOS & Simulasi Alur
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Fitur & Evaluasi */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Fitur Interaktif</h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigateTab('komponen')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Galeri Komponen Modern
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('kuis')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Kuis Interaktif (10 Soal & Pembahasan)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('rangkuman')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Rangkuman & Glosarium Istilah
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSearch}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Pencarian Cepat Materi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Standar Akademik */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Standar Pembelajaran</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Materi disesuaikan dengan Capaian Pembelajaran (CP) Elemen Sistem Komputer (SK) Fase E untuk SMA/MA Kelas 10.
            </p>
            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-cyan-300">
              ✓ 100% Bebas Teks Dummy · Akurat & Edukatif
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">KOMPUTERKU — Media Pembelajaran Informatika Kelas X</strong>. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-1">
            <span>Didesain untuk Pendidikan Informatika Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
