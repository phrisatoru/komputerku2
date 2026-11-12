import React from 'react';
import { PageType } from '../types';
import { chaptersData } from '../data/chaptersData';
import { IPOSSimulator } from './IPOSSimulator';
import { HardwareExplorer } from './HardwareExplorer';
import { SmartImage } from './SmartImage';
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  Cpu,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
  Layers,
  ChevronRight,
  Shield,
  Activity,
  Users
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageType, chapterId?: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#101B32] via-[#101B32] to-[#152342] text-white pt-12 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#36C5F0] bg-cyan-950/60 border border-[#36C5F0]/30 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Media Pembelajaran Informatika Kelas 10 SMA</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                Mengenal Dunia <span className="text-[#36C5F0]">Sistem Komputer</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Dari ponsel cerdas di saku hingga server internet raksasa, sistem komputer menjadi
                jantung peradaban modern. Pahami bagaimana komponen fisik (hardware), program (software),
                dan kecerdasan manusia (brainware) bersinergi mengolah jutaan data dalam sekejap.
              </p>

              {/* Tagline Badge */}
              <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#36C5F0]" />
                <span>Mengenal Komponen, Cara Kerja, dan Teknologi Komputer.</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onNavigate('materi', 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-sm font-bold text-[#101B32] bg-[#36C5F0] hover:bg-[#36C5F0]/90 active:scale-95 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <span>Mulai Belajar Materi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    onNavigate('kuis');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-[#36C5F0]" />
                  <span>Uji Kemampuan di Kuis</span>
                </button>
              </div>

              {/* Quick stats / Highlights */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <span className="text-2xl font-bold text-white block">7 Bab</span>
                  <span className="text-xs text-slate-400">Materi Lengkap</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#36C5F0] block">IPOS</span>
                  <span className="text-xs text-slate-400">Simulasi Alur Interaktif</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white block">10 Soal</span>
                  <span className="text-xs text-slate-400">Evaluasi Pembahasan</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#36C5F0]/30 shadow-2xl bg-slate-950 group">
                <SmartImage
                  src="/images/hero_computer_system.jpg"
                  fallbackSrcs={[
                    '/images/hero_computer_system_1794482164056.jpg',
                    '/src/assets/images/hero_computer_system_1794482164056.jpg',
                  ]}
                  alt="Ilustrasi Modern Sistem Komputer Motherboard dan Prosesor"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  fallbackType="hero"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B32]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#101B32]/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 text-xs text-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#36C5F0]" />
                    <span className="font-semibold text-white">Anatomi Sistem Komputer Modern</span>
                  </div>
                  <span className="text-[11px] text-cyan-400 font-mono">DDR5 · NVMe · PCIe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Isi Pembelajaran (7 Bab Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Kurikulum Informatika SMA Fase E</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101B32] tracking-tight">
              Ringkasan Isi Pembelajaran (7 Bab Lengkap)
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Seluruh materi disusun secara bertahap dari pemahaman konsep, anatomi komponen,
              alur pemrosesan, hingga sejarah dan manfaatnya bagi peradaban.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('materi', 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-[#101B32] hover:text-cyan-700 flex items-center gap-1 transition-colors self-start md:self-auto"
          >
            <span>Buka Semua Materi</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 7 Chapter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaptersData.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => {
                onNavigate('materi', chapter.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#36C5F0]/60 p-6 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-600 tracking-wider">
                    {chapter.number}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {chapter.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors leading-snug">
                  {chapter.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {chapter.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#101B32] group-hover:text-cyan-700">
                <span>Pelajari Bab Ini</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Feature Spotlight: IPOS Cycle Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">
            <Zap className="w-4 h-4" />
            <span>Laboratorium Konsep Interaktif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101B32] tracking-tight">
            Uji Siklus Kerja Komputer (IPOS Cycle)
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Pelajari bagaimana alur data mengalir dari penekanan keyboard hingga tersimpan permanen di memori.
          </p>
        </div>

        <IPOSSimulator />
      </section>

      {/* Hardware Anatomy Explorer Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Eksplorasi Perangkat Keras</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101B32] tracking-tight">
            Bedah Komponen Fisik Komputer
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Klik komponen untuk melihat fungsi, bandwidth, dan standar spesifikasi teknologi terkini.
          </p>
        </div>

        <HardwareExplorer />
      </section>

      {/* Quick Quiz Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101B32] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#36C5F0] bg-cyan-950/80 px-3 py-1 rounded-md">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Kuis Evaluasi 10 Soal</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Seberapa Dalam Pemahaman Sistem Komputer Anda?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Uji pengetahuan Anda mengenai ALU, RAM vs ROM, sistem operasi, brainware,
              dan siklus IPOS dengan feedback instan serta pembahasan jawaban lengkap.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onNavigate('kuis');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 text-xs sm:text-sm font-bold text-[#101B32] bg-[#36C5F0] hover:bg-[#36C5F0]/90 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Mulai Kuis Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  onNavigate('materi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                <span>Pelajari Materi Dulu</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
