import React, { useState } from 'react';
import { ArrowRight, BookOpen, HelpCircle, Cpu, CheckCircle2, ShieldCheck, Zap, Info } from 'lucide-react';
import { heroComputerSystem } from '../assets/images';

interface HeroSectionProps {
  onStartLearning: () => void;
  onOpenQuiz: () => void;
  onExploreComponents: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onOpenQuiz,
  onExploreComponents,
}) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'cooler',
      title: 'AIO Liquid Cooling',
      desc: 'Pompa dan radiator cairan pendingin untuk menjaga suhu prosesor tetap stabil di bawah 75°C.',
      top: '32%',
      left: '24%',
    },
    {
      id: 'ram',
      title: 'DDR5 RGB RAM',
      desc: 'Memori kerja berkecepatan 6000 MT/s untuk multitasking dan pengolahan data instan.',
      top: '36%',
      left: '30%',
    },
    {
      id: 'gpu',
      title: 'Kartu Grafis (GPU)',
      desc: 'Unit pemroses visual 3D berkekuatan ribuan CUDA cores dengan kipas pendingin triple fan.',
      top: '64%',
      left: '26%',
    },
    {
      id: 'monitor',
      title: 'Output Display 4K',
      desc: 'Panel monitor resolusi tinggi dengan refresh rate mulus menyajikan hasil akhir pemrosesan visual.',
      top: '35%',
      left: '65%',
    },
  ];

  return (
    <section className="relative pt-6 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Kicker */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
          <span className="text-cyan-400 font-semibold">KOMPUTERKU</span>
          <span aria-hidden="true">·</span>
          <span>Informatika SMA Kelas X</span>
          <span aria-hidden="true">·</span>
          <span>Kurikulum Merdeka</span>
        </div>

        {/* Hero Main Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Belajar Sistem Komputer Jadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Lebih Mudah</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Media pembelajaran interaktif Informatika Kelas X untuk menguasai arsitektur 
              <strong className="text-white font-semibold"> Hardware</strong>, 
              <strong className="text-white font-semibold"> Software</strong>, dan 
              <strong className="text-white font-semibold"> Brainware</strong>. 
              Eksplorasi siklus kerja IPOS secara langsung dengan simulasi visual modern.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartLearning}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 cursor-pointer"
              >
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreComponents}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm transition-colors cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Galeri Komponen</span>
              </button>

              <button
                onClick={onOpenQuiz}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-cyan-300 border border-cyan-800/40 font-medium text-sm transition-colors cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>Uji Kuis (10 Soal)</span>
              </button>
            </div>

            {/* Micro Feature Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Simulasi IPOS Real-time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Kuis & Pembahasan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Mudah Diakses di HP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Computer Rig Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/60 shadow-2xl group">
              <img
                src={heroComputerSystem}
                alt="Modern Computer System Rig Architecture"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-transparent to-transparent pointer-events-none" />

              {/* Hotspot interactive buttons */}
              {hotspots.map((hs) => (
                <div
                  key={hs.id}
                  style={{ top: hs.top, left: hs.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                    className="relative flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/80 hover:bg-cyan-400 text-slate-950 font-bold shadow-lg transition-transform hover:scale-110 cursor-pointer focus:outline-none"
                    title={`Klik untuk info: ${hs.title}`}
                    aria-label={hs.title}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-950" />
                    <span className="absolute -inset-1 rounded-full border border-cyan-400 animate-ping opacity-60" />
                  </button>

                  {/* Tooltip Card */}
                  {activeHotspot === hs.id && (
                    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-64 bg-[#091120] border border-cyan-500/40 rounded-xl p-3 shadow-2xl z-30 text-left animate-in fade-in zoom-in-95 duration-150">
                      <div className="flex items-center justify-between text-cyan-400 text-xs font-bold mb-1">
                        <span>{hs.title}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveHotspot(null);
                          }}
                          className="text-slate-400 hover:text-white text-xs"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-normal">
                        {hs.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Bottom tag on image */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-slate-300 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/60">
                <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                  <Info className="w-3.5 h-3.5" />
                  Sentuh titik bercahaya untuk inspeksi komponen
                </span>
                <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                  Interactive PC Rig
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Metric / Statistics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800">
          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/80">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              5
            </span>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Modul Pembelajaran</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Hardware, Software, Brainware & IPOS</div>
          </div>

          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/80">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              8+
            </span>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Galeri Komponen</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Spesifikasi mendalam & fungsi nyata</div>
          </div>

          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/80">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              10
            </span>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Soal Kuis Teruji</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Dilengkapi kunci & pembahasan detail</div>
          </div>

          <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/80">
            <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
              100%
            </span>
            <div className="text-xs sm:text-sm font-semibold text-white mt-1">Kurikulum Merdeka</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Materi resmi Informatika SMA Kelas X</div>
          </div>
        </div>

      </div>
    </section>
  );
};
