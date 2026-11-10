import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Code, 
  Users, 
  RefreshCw, 
  CheckCircle, 
  ChevronRight, 
  Layers, 
  ArrowRight,
  HardDrive,
  Monitor,
  Keyboard,
  Shield,
  FileCheck,
  Terminal,
  Sparkles
} from 'lucide-react';
import { MATERI_MODULES } from '../data/learningData';
import { IPOSSimulator } from './IPOSSimulator';
import {
  componentCpuProcessor,
  componentMotherboard,
  componentRamStorage,
} from '../assets/images';

interface MateriSectionProps {
  initialModuleId?: string;
  onMarkModuleRead: (moduleId: string) => void;
  readModules: string[];
  onOpenComponents: () => void;
  onOpenQuiz: () => void;
}

export const MateriSection: React.FC<MateriSectionProps> = ({
  initialModuleId = 'intro',
  onMarkModuleRead,
  readModules,
  onOpenComponents,
  onOpenQuiz,
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(initialModuleId);

  const modules = [
    { id: 'intro', letter: 'A', name: 'Pengenalan Sistem Komputer', icon: BookOpen },
    { id: 'hardware', letter: 'B', name: 'Hardware (Perangkat Keras)', icon: Cpu },
    { id: 'software', letter: 'C', name: 'Software (Perangkat Lunak)', icon: Code },
    { id: 'brainware', letter: 'D', name: 'Brainware (Pengguna)', icon: Users },
    { id: 'ipos', letter: 'E', name: 'Cara Kerja (Siklus IPOS)', icon: RefreshCw },
  ];

  const currentModule = MATERI_MODULES.find((m) => m.id === selectedModuleId) || MATERI_MODULES[0];
  const isCurrentRead = readModules.includes(currentModule.id);

  const getNextModuleId = () => {
    const currentIndex = modules.findIndex((m) => m.id === selectedModuleId);
    if (currentIndex < modules.length - 1) {
      return modules[currentIndex + 1].id;
    }
    return null;
  };

  return (
    <section id="materi" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Kurikulum Informatika SMA Kelas X</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Materi Pembelajaran Sistem Komputer
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl">
          Pelajari secara komprehensif mulai dari definisi fundamental, arsitektur perangkat keras, klasifikasi perangkat lunak, peran pengguna, hingga simulasi interaktif alur data IPOS.
        </p>
      </div>

      {/* Module Selector Tabs (Segmented control) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl mb-8">
        {modules.map((mod) => {
          const isActive = selectedModuleId === mod.id;
          const isRead = readModules.includes(mod.id);
          const IconComp = mod.icon;

          return (
            <button
              key={mod.id}
              onClick={() => setSelectedModuleId(mod.id)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                isActive ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-400'
              }`}>
                {mod.letter}
              </span>
              <span className="truncate flex-1">{mod.name.split(' ')[0]} {mod.name.split(' ')[1] || ''}</span>
              {isRead && (
                <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
              )}
            </button>
          );
        })}
      </div>

      {/* Module Content Body */}
      <div className="bg-[#081120] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
        
        {/* Module Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold mb-1">
              <span>MODUL {currentModule.letter}</span>
              <span aria-hidden="true">·</span>
              <span>{currentModule.tag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentModule.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {currentModule.summary}
            </p>
          </div>

          {/* Mark read button */}
          <button
            onClick={() => onMarkModuleRead(currentModule.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer shrink-0 ${
              isCurrentRead
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>{isCurrentRead ? 'Sudah Dibaca' : 'Tandai Selesai Dibaca'}</span>
          </button>
        </div>

        {/* Dynamic Content Per Module */}
        <div className="pt-8 space-y-8">
          
          {/* ================= MODUL A: PENGENALAN ================= */}
          {selectedModuleId === 'intro' && (
            <div className="space-y-8">
              {/* Definition */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                  Pengertian Sistem Komputer
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  {currentModule.content?.definition}
                </p>
              </div>

              {/* Goals */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Tujuan dan Fungsi Pokok</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentModule.content?.goals.map((goal, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                      <div className="text-xs font-mono text-cyan-400 font-bold mb-1">0{idx + 1}.</div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3 Pillars of Computer System */}
              <div>
                <h4 className="text-base font-bold text-white mb-3">Tiga Elemen Pilar Utama (Trinitas Sistem Komputer)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentModule.content?.theTrinity.map((pillar, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                      <div className="text-xs text-cyan-400 font-mono font-semibold">{pillar.role}</div>
                      <h5 className="text-base font-bold text-white mt-1 mb-2">{pillar.name}</h5>
                      <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Crucial Rule */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 flex items-start gap-3">
                <Shield className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide block">
                    Konsep Kunci yang Wajib Dipahami:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    {currentModule.content?.crucialRule}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODUL B: HARDWARE ================= */}
          {selectedModuleId === 'hardware' && (
            <div className="space-y-8">
              
              {/* Visual Hardware Spotlight Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 group">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={componentCpuProcessor} 
                      alt="CPU Chip Architecture" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-xs font-bold text-white">Central Processing Unit (CPU)</span>
                  </div>
                  <div className="p-3 text-xs text-slate-300">
                    Otak komputasi dengan ALU, Control Unit, dan Register berkecepatan GHz.
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 group">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={componentMotherboard} 
                      alt="Motherboard Bus" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-xs font-bold text-white">Motherboard (Papan Induk)</span>
                  </div>
                  <div className="p-3 text-xs text-slate-300">
                    Jalur sirkuit bus elektronik penghubung semua modul hardware.
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/60 group">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={componentRamStorage} 
                      alt="RAM and SSD Storage" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <span className="absolute bottom-2 left-3 text-xs font-bold text-white">DDR5 RAM & NVMe SSD</span>
                  </div>
                  <div className="p-3 text-xs text-slate-300">
                    Kombinasi memori primer berkecepatan tinggi dan storage non-volatile.
                  </div>
                </div>
              </div>

              {/* 4 Categories of Hardware */}
              <div className="space-y-6">
                {currentModule.categories?.map((cat, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <h4 className="text-base font-bold text-white flex items-center justify-between">
                      <span>{cat.name}</span>
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 mb-4">{cat.desc}</p>
                    
                    {'items' in cat && Array.isArray((cat as any).items) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {((cat as any).items as Array<{ name: string; role: string }>).map((item, itemIdx) => (
                          <div key={itemIdx} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80">
                            <span className="text-xs font-bold text-cyan-400 block">{item.name}</span>
                            <p className="text-[11px] text-slate-300 mt-1 leading-normal">{item.role}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Link to Components Gallery */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-300">
                  Ingin melihat foto rincian spesifikasi teknis setiap bagian hardware?
                </span>
                <button
                  onClick={onOpenComponents}
                  className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <span>Buka Galeri Komponen</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ================= MODUL C: SOFTWARE ================= */}
          {selectedModuleId === 'software' && (
            <div className="space-y-8">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Perangkat lunak (software) adalah rangkaian instruksi biner yang disusun dalam program terstruktur untuk mengarahkan perangkat keras komputer dalam melakukan operasi data yang diinginkan.
              </div>

              {/* 3 Categories with Cards */}
              <div className="space-y-6">
                {currentModule.categories?.map((cat, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-900/50 border border-slate-800">
                    <h4 className="text-base font-bold text-cyan-300 mb-1">{cat.name}</h4>
                    <p className="text-xs text-slate-400 mb-4">{cat.desc}</p>
                    
                    {'subcategories' in cat && Array.isArray((cat as any).subcategories) && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {((cat as any).subcategories as Array<{ title: string; examples: string; role: string }>).map((sub, sIdx) => (
                          <div key={sIdx} className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                            <div>
                              <span className="text-xs font-bold text-white block">{sub.title}</span>
                              <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">{sub.role}</p>
                            </div>
                            <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-cyan-400/90 font-mono">
                              <span className="text-slate-400 block font-sans">Contoh:</span>
                              {sub.examples}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Comparison Box: Compiler vs Interpreter */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Sorotan Penting: Perbedaan Compiler vs Interpreter</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <span className="font-bold text-cyan-400 block text-sm">Compiler</span>
                    <p className="text-slate-300 mt-1">
                      Menerjemahkan <strong>seluruh kode sumber</strong> sekaligus menjadi file biner siap pakai (.exe). Eksekusi program sangat cepat, namun jika ada 1 error kompilasi gagal total.
                    </p>
                    <span className="text-[11px] text-slate-400 mt-2 block font-mono">Contoh: C++, Go, Rust, GCC</span>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    <span className="font-bold text-cyan-400 block text-sm">Interpreter</span>
                    <p className="text-slate-300 mt-1">
                      Menerjemahkan instruksi <strong>baris demi baris secara berurutan</strong> saat program berjalan. Lebih fleksibel untuk eksperimen coding tetapi kecepatan eksekusi relatif lebih lambat.
                    </p>
                    <span className="text-[11px] text-slate-400 mt-2 block font-mono">Contoh: Python, JavaScript, PHP</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODUL D: BRAINWARE ================= */}
          {selectedModuleId === 'brainware' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Brainware merupakan elemen manusia yang mengoperasikan, memelihara, merancang arsitektur, dan memprogram sistem komputer. Tanpa campur tangan manusia yang terampil, hardware dan software secanggih apapun tidak akan memiliki tujuan operasional.
              </div>

              {/* 5 Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentModule.roles?.map((role, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 inline-block mb-2">
                        {role.badge}
                      </span>
                      <h4 className="text-base font-bold text-white">{role.name}</h4>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{role.desc}</p>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Tugas Utama:</span>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">{role.tasks}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Career insight */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wide block">
                    Peluang Karir Informatika Siswa SMA:
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Memahami peran brainware membantu siswa memilih bidang keahlian di jenjang perguruan tinggi dan industri, seperti Software Engineering, Data Science, Cybersecurity, Network Architecture, dan AI Engineering.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODUL E: CARA KERJA (IPOS) ================= */}
          {selectedModuleId === 'ipos' && (
            <div className="space-y-8">
              {/* Concept overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentModule.cycleStages?.map((stg, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] text-cyan-400 font-mono font-bold">{stg.subtitle}</span>
                    <h5 className="text-sm font-bold text-white mt-0.5">{stg.stage}</h5>
                    <p className="text-xs text-slate-300 mt-1.5">{stg.desc}</p>
                    <div className="mt-2 text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                      {stg.tech}
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded Interactive IPOS Simulator */}
              <IPOSSimulator />
            </div>
          )}
        </div>

        {/* Bottom Navigation between modules */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Selesai membaca? Klik tombol di bawah untuk melanjutkan atau uji pemahaman.
          </div>

          <div className="flex items-center gap-2">
            {getNextModuleId() ? (
              <button
                onClick={() => {
                  onMarkModuleRead(currentModule.id);
                  const next = getNextModuleId();
                  if (next) setSelectedModuleId(next);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>Lanjut ke Modul Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={onOpenQuiz}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>Semua Materi Selesai! Ikuti Kuis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
