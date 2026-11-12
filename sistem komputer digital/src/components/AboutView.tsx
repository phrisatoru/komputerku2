import React from 'react';
import { PageType } from '../types';
import { Users, BookOpen, Target, Sparkles, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageType, chapterId?: number) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const creators = [
    {
      name: 'MOH FACHRI ARVA RAMADHAN',
      initials: 'FA',
      color: 'from-[#101B32] to-[#36C5F0]/80',
    },
    {
      name: 'SASHENKA KEANDRI IKHWAN',
      initials: 'KA',
      color: 'from-[#101B32] to-slate-800',
    },
    {
      name: 'RISKA SIFANA',
      initials: 'RI',
      color: 'from-[#101B32] to-cyan-800',
    },
    {
      name: 'DIARA ZEBADIA',
      initials: 'DI',
      color: 'from-[#101B32] to-indigo-900',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Title & Main Description */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#101B32] bg-cyan-100/60 px-3.5 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
          <span>Informasi Media Pembelajaran</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101B32] tracking-tight">
          Tentang Website Ini
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          Website ini dibuat sebagai media pembelajaran digital untuk membantu siswa
          kelas 10 SMA memahami materi Sistem Komputer dengan cara yang lebih mudah,
          menarik, dan interaktif.
        </p>
      </div>

      {/* Creators Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10 space-y-8">
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#101B32] uppercase tracking-wider">
            <Users className="w-4 h-4 text-cyan-600" />
            <span>Tim Pembuat Website</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Dibuat Oleh
          </h2>
          <p className="text-xs text-slate-500">
            Karya kolaborasi siswa dalam mengembangkan platform edukasi teknologi interaktif.
          </p>
        </div>

        {/* 4 Creators Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {creators.map((creator) => (
            <div
              key={creator.name}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-center space-y-4 transition-all hover:shadow-xs group"
            >
              {/* Initials Avatar */}
              <div
                className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${creator.color} text-white font-extrabold text-xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-105 transition-transform`}
              >
                <span>{creator.initials}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {creator.name}
                </h3>
                <span className="text-xs text-slate-500 block mt-0.5">
                  Tim Pembuat
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Statement of Integrity */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3 justify-center text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Website ini disusun murni sebagai proyek pembelajaran informatika sekolah menengah atas.
          </span>
        </div>
      </div>

      {/* Curriculum & Purpose Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
            <Target className="w-5 h-5 text-cyan-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Tujuan Pembelajaran
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Membekali peserta didik dengan pemahaman menyeluruh mengenai cara kerja komputer,
            perbedaan peran antara hardware, software, dan brainware, memahami siklus input-proses-output-penyimpanan (IPOS),
            serta menyadari perkembangan pesat teknologi informasi di masa kini dan masa depan.
          </p>
        </div>

        <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Kesesuaian Kurikulum
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Materi disusun mengacu pada Capaian Pembelajaran (CP) Elemen Sistem Komputer (SK)
            Mata Pelajaran Informatika untuk Fase E (Kelas 10 SMA/MA) Kurikulum Merdeka,
            lengkap dengan studi kasus autentik dan simulasi logika.
          </p>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="bg-[#101B32] text-white p-8 sm:p-10 rounded-2xl border border-slate-800 text-center space-y-4">
        <div className="w-12 h-12 rounded-xl bg-[#36C5F0]/20 text-[#36C5F0] flex items-center justify-center mx-auto">
          <Cpu className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white">
          Siap Menjelajahi Dunia Sistem Komputer?
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Pelajari 7 bab materi terstruktur atau uji langsung pemahaman Anda melalui kuis interaktif 10 soal.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              onNavigate('materi');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-2.5 text-xs font-semibold text-[#101B32] bg-[#36C5F0] hover:bg-[#36C5F0]/90 rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-xs"
          >
            <span>Buka Materi Pembelajaran</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              onNavigate('kuis');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <span>Mulai Kuis</span>
          </button>
        </div>
      </div>
    </div>
  );
};
