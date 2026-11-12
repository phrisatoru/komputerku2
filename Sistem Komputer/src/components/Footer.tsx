import React from 'react';
import { PageType } from '../types';
import { Cpu, Heart, BookOpen, HelpCircle, Info, Home } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType, chapterId?: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType, chapterId?: number) => {
    onNavigate(page, chapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101B32] text-white border-t border-slate-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#36C5F0]/10 border border-[#36C5F0]/30 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#36C5F0]" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight text-white block">
                  SISTEM KOMPUTER
                </span>
                <span className="text-xs text-[#36C5F0] font-medium block">
                  Mengenal Komponen, Cara Kerja, dan Teknologi Komputer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Website media pembelajaran digital interaktif mata pelajaran Informatika
              khusus materi Sistem Komputer untuk siswa kelas 10 SMA. Disajikan dengan
              bahasa yang mudah dipahami, ilustrasi komponen, alur IPOS terstruktur, dan evaluasi kuis.
            </p>

            {/* Creators Callout */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800">
                <Heart className="w-3.5 h-3.5 text-[#36C5F0]" />
                <span>
                  Dibuat dengan semangat belajar oleh{' '}
                  <strong className="text-white font-semibold">Ayik</strong>,{' '}
                  <strong className="text-white font-semibold">Kaka</strong>,{' '}
                  <strong className="text-white font-semibold">Riska</strong>, dan{' '}
                  <strong className="text-white font-semibold">Diara</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('beranda')}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#36C5F0] transition-colors"
                >
                  <Home className="w-4 h-4 opacity-70" />
                  <span>Beranda</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi')}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#36C5F0] transition-colors"
                >
                  <BookOpen className="w-4 h-4 opacity-70" />
                  <span>Materi Pembelajaran (7 Bab)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('kuis')}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#36C5F0] transition-colors"
                >
                  <HelpCircle className="w-4 h-4 opacity-70" />
                  <span>Kuis Evaluasi Interaktif</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tentang')}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#36C5F0] transition-colors"
                >
                  <Info className="w-4 h-4 opacity-70" />
                  <span>Tentang Tim Pembuat</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Chapters Directory */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Daftar Bab Materi
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('materi', 1)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 1: Pengertian Sistem Komputer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi', 2)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 2: Komponen Hardware, Software, Brainware
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi', 3)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 3: Cara Kerja (Siklus IPOS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi', 4)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 4: Perangkat Keras Deep Dive
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi', 5)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 5: Perangkat Lunak Komputer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi', 6)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 6: Hubungan Trikomponen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('materi', 7)}
                  className="hover:text-[#36C5F0] transition-colors text-left"
                >
                  Bab 7: Manfaat & Perkembangan Komputer
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 SISTEM KOMPUTER. Hak Cipta Dilindungi.</p>
          <p className="text-slate-400">
            Dibuat untuk Tugas Informatika Kelas 10 SMA · Kurikulum Merdeka
          </p>
        </div>
      </div>
    </footer>
  );
};
