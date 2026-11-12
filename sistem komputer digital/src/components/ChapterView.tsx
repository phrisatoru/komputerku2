import React, { useState, useMemo } from 'react';
import { Chapter, PageType } from '../types';
import { chaptersData } from '../data/chaptersData';
import { IPOSSimulator } from './IPOSSimulator';
import { HardwareExplorer } from './HardwareExplorer';
import { TriadVisualizer } from './TriadVisualizer';
import { SmartImage } from './SmartImage';
import {
  BookOpen,
  CheckCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  Search,
  Sparkles,
  Award,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface ChapterViewProps {
  initialChapterId?: number;
  onNavigate: (page: PageType, chapterId?: number) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  initialChapterId = 1,
  onNavigate,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(initialChapterId);
  const [searchQuery, setSearchQuery] = useState('');

  // Find active chapter
  const currentChapter = useMemo(() => {
    return chaptersData.find((c) => c.id === selectedChapterId) || chaptersData[0];
  }, [selectedChapterId]);

  // Filtered chapters for search
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chaptersData;
    const q = searchQuery.toLowerCase();
    return chaptersData.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectChapter = (id: number) => {
    setSelectedChapterId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevChapter = () => {
    if (selectedChapterId > 1) {
      handleSelectChapter(selectedChapterId - 1);
    }
  };

  const handleNextChapter = () => {
    if (selectedChapterId < chaptersData.length) {
      handleSelectChapter(selectedChapterId + 1);
    } else {
      // Jump to Quiz after Bab 7
      onNavigate('kuis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb & Header Bar */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <button
              onClick={() => onNavigate('beranda')}
              className="hover:text-[#101B32] transition-colors"
            >
              Beranda
            </button>
            <span>/</span>
            <span className="text-[#36C5F0] font-medium">Materi Pembelajaran</span>
            <span>/</span>
            <span className="font-semibold text-slate-800">{currentChapter.number}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B32] tracking-tight">
            Modul Pembelajaran Sistem Komputer
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Bahan ajar lengkap kelas 10 SMA sesuai Kurikulum Merdeka Informatika.
          </p>
        </div>

        {/* Quick Quiz CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('kuis')}
            className="px-4 py-2 text-xs font-semibold text-[#101B32] bg-[#36C5F0]/20 hover:bg-[#36C5F0]/30 border border-[#36C5F0]/40 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Award className="w-4 h-4 text-cyan-700" />
            <span>Uji Pemahaman di Kuis</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar Navigator + Reading Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sticky Sidebar (Chapters List) */}
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
          {/* Search Box */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari bab atau materi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36C5F0] text-slate-800 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Chapters Directory Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#101B32]" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  Daftar Isi Bab (7 Bab)
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                {currentChapter.id} / 7
              </span>
            </div>

            <div className="divide-y divide-slate-100 max-h-[580px] overflow-y-auto">
              {filteredChapters.map((ch) => {
                const isActive = ch.id === selectedChapterId;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleSelectChapter(ch.id)}
                    className={`w-full p-3.5 text-left transition-colors flex items-start gap-3 cursor-pointer group ${
                      isActive
                        ? 'bg-cyan-50/60 border-l-3 border-[#36C5F0]'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-[#101B32] text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      {ch.id}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold truncate block ${
                            isActive ? 'text-[#101B32]' : 'text-slate-800'
                          }`}
                        >
                          {ch.title}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {ch.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-gradient-to-br from-[#101B32] to-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Progres Pembelajaran</span>
              <span className="text-[#36C5F0] font-bold">
                {Math.round((selectedChapterId / chaptersData.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#36C5F0] h-full rounded-full transition-all duration-300"
                style={{ width: `${(selectedChapterId / chaptersData.length) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-slate-300">
              Menjelajahi Bab {selectedChapterId} dari {chaptersData.length} materi Sistem Komputer.
            </p>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <main className="lg:col-span-8 space-y-8">
          {/* Chapter Main Article Card */}
          <article className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Header / Title */}
            <div className="border-b border-slate-100 pb-6">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                <span className="font-bold text-[#101B32] uppercase tracking-wider">
                  {currentChapter.number}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-600">
                  <Clock className="w-3.5 h-3.5" />
                  {currentChapter.readTime} waktu baca
                </span>
                <span>·</span>
                <span>Informatika SMA Kelas 10</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentChapter.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                {currentChapter.subtitle}
              </p>
            </div>

            {/* Bab Summary Callout */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#101B32] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-cyan-600" />
                <span>Ringkasan Pengantar Bab</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {currentChapter.summary}
              </p>
            </div>

            {/* Key Points (Poin Penting) Box */}
            <div className="bg-cyan-50/40 border border-[#36C5F0]/30 rounded-xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-[#101B32] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-600" />
                <span>Poin-Poin Penting yang Perlu Diingat</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {currentChapter.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embedded Interactive Tools based on Chapter Context */}
            {currentChapter.id === 2 && (
              <div className="pt-2">
                <HardwareExplorer />
              </div>
            )}

            {currentChapter.id === 3 && (
              <div className="pt-2 space-y-6">
                <div className="bg-[#101B32] rounded-xl overflow-hidden border border-slate-800 p-2 shadow-inner">
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center">
                    <SmartImage
                      src="/images/ipos_cycle_concept.jpg"
                      fallbackSrcs={[
                        '/images/ipos_cycle_concept_1794482163991.jpg',
                        '/src/assets/images/ipos_cycle_concept_1794482163991.jpg',
                      ]}
                      alt="Diagram Konsep Siklus IPOS (Input, Process, Output, Storage)"
                      className="w-full h-full object-cover"
                      fallbackType="ipos"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[#101B32]/90 backdrop-blur-sm p-3 rounded-lg border border-slate-700 text-xs text-slate-200 flex items-center justify-between">
                      <span>Diagram Aliran Data: Input ke Pemrosesan CPU, Penyimpanan, dan Keluaran Informasi</span>
                      <span className="text-[#36C5F0] font-semibold text-[11px]">Siklus IPOS</span>
                    </div>
                  </div>
                </div>
                <IPOSSimulator />
              </div>
            )}

            {currentChapter.id === 6 && (
              <div className="pt-2">
                <TriadVisualizer />
              </div>
            )}

            {/* Section by Section Content */}
            <div className="space-y-8 divide-y divide-slate-100">
              {currentChapter.content.map((sec, secIdx) => (
                <section key={secIdx} className={secIdx > 0 ? 'pt-8' : ''}>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {sec.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {sec.description}
                  </p>

                  {/* Subsections if available */}
                  {sec.subsections && (
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      {sec.subsections.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4.5 space-y-2 hover:bg-slate-50 transition-colors"
                        >
                          <h4 className="text-sm font-bold text-slate-900">
                            {sub.subtitle}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {sub.details}
                          </p>

                          {/* Examples */}
                          {sub.examples && sub.examples.length > 0 && (
                            <div className="pt-2 mt-2 border-t border-slate-200/60">
                              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                                Contoh Penerapan:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {sub.examples.map((ex, exIdx) => (
                                  <span
                                    key={exIdx}
                                    className="text-xs bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                                  >
                                    {ex}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Technical Note */}
                          {sub.technicalNote && (
                            <div className="text-xs font-mono text-cyan-900 bg-cyan-50/80 p-2 rounded-md border border-cyan-100 mt-2">
                              {sub.technicalNote}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Comparison Table if available */}
                  {sec.comparisonTable && (
                    <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#101B32] text-white">
                          <tr>
                            {sec.comparisonTable.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 font-semibold tracking-wider">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {sec.comparisonTable.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`p-3 text-slate-700 ${
                                    cIdx === 0 ? 'font-semibold text-slate-900' : ''
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Chapter Recap Box */}
            <div className="p-6 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#36C5F0] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Rangkuman Pembelajaran {currentChapter.number}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentChapter.summary}
              </p>
              <div className="pt-2 text-xs text-slate-400">
                Lanjutkan ke bab berikutnya untuk memperdalam pemahaman sistem komputer Anda, atau uji ingatan Anda di modul kuis interaktif.
              </div>
            </div>

            {/* Bottom Nav Action Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handlePrevChapter}
                disabled={selectedChapterId === 1}
                className={`w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  selectedChapterId === 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Bab Sebelumnya</span>
              </button>

              <div className="text-xs text-slate-500 font-medium">
                Bab {selectedChapterId} dari {chaptersData.length}
              </div>

              <button
                onClick={handleNextChapter}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#101B32] hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-95"
              >
                <span>
                  {selectedChapterId === chaptersData.length
                    ? 'Selesai: Menuju Kuis'
                    : 'Bab Berikutnya'}
                </span>
                {selectedChapterId === chaptersData.length ? (
                  <Award className="w-4 h-4 text-[#36C5F0]" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[#36C5F0]" />
                )}
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};
