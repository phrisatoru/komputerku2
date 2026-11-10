import React, { useState } from 'react';
import { Cpu, Search, X, CheckCircle2, AlertTriangle, Layers, Info, ArrowUpRight } from 'lucide-react';
import { COMPUTER_COMPONENTS, ComponentItem } from '../data/learningData';

interface KomponenGalleryProps {
  selectedComponentId?: string | null;
  onClearSelectedComponent?: () => void;
  onComponentExplored?: (id: string) => void;
}

export const KomponenGallery: React.FC<KomponenGalleryProps> = ({
  selectedComponentId,
  onClearSelectedComponent,
  onComponentExplored,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeModalComponent, setActiveModalComponent] = useState<ComponentItem | null>(null);

  // If passed an external selected component (e.g. from search), open modal
  React.useEffect(() => {
    if (selectedComponentId) {
      const match = COMPUTER_COMPONENTS.find((c) => c.id === selectedComponentId);
      if (match) {
        setActiveModalComponent(match);
        onComponentExplored?.(match.id);
      }
    }
  }, [selectedComponentId, onComponentExplored]);

  const categories = [
    { id: 'all', label: 'Semua Komponen' },
    { id: 'pemrosesan', label: 'Pemrosesan' },
    { id: 'penyimpanan', label: 'Penyimpanan' },
    { id: 'input-output', label: 'Input & Output' },
    { id: 'daya-pendingin', label: 'Daya & Pendingin' },
  ];

  const filteredComponents = filterCategory === 'all'
    ? COMPUTER_COMPONENTS
    : COMPUTER_COMPONENTS.filter((c) => c.category === filterCategory);

  const handleOpenDetail = (comp: ComponentItem) => {
    setActiveModalComponent(comp);
    onComponentExplored?.(comp.id);
  };

  const handleCloseModal = () => {
    setActiveModalComponent(null);
    onClearSelectedComponent?.();
  };

  return (
    <section id="komponen" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>Katalog Perangkat Keras Fisik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Galeri Komponen Komputer Modern
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Kenali bentuk fisik, arsitektur internal, spesifikasi teknis penting, dan peran vital setiap komponen di dalam unit komputer.
          </p>
        </div>

        {/* Filter Buttons (Segmented control) */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredComponents.map((comp) => (
          <div
            key={comp.id}
            className="group bg-[#081224] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/30"
          >
            {/* Image Thumbnail with Scrim */}
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img
                src={comp.image}
                alt={comp.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081224] via-transparent to-transparent opacity-90" />
              
              {/* Category Pill */}
              <span className="absolute top-3 left-3 text-[10px] font-semibold text-cyan-300 bg-cyan-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-700/50">
                {comp.categoryLabel}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {comp.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {comp.shortDesc}
                </p>
              </div>

              {/* Action */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {comp.specs.length} Spesifikasi Utama
                </span>
                <button
                  onClick={() => handleOpenDetail(comp)}
                  className="flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Pelajari Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog for In-Depth Component Inspection */}
      {activeModalComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div 
            className="w-full max-w-3xl bg-[#091222] border border-cyan-800/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d182e]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-600/40 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {activeModalComponent.name}
                  </h3>
                  <span className="text-xs text-cyan-400 font-medium">
                    Kategori: {activeModalComponent.categoryLabel}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Tutup detail modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="overflow-y-auto p-6 space-y-6">
              
              {/* Image banner with overlay */}
              <div className="rounded-xl overflow-hidden border border-slate-800 h-52 relative bg-slate-950">
                <img
                  src={activeModalComponent.image}
                  alt={activeModalComponent.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091222] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
                  <span className="font-semibold text-white">Visual Komponen: </span>
                  {activeModalComponent.name}
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Penjelasan Arsitektur & Cara Kerja
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeModalComponent.fullDesc}
                </p>
              </div>

              {/* Main Function & Role in System */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">Fungsi Utama:</span>
                  <p className="text-slate-300 leading-relaxed">
                    {activeModalComponent.mainFunction}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <span className="text-cyan-400 font-bold block mb-1">Peran dalam Sistem:</span>
                  <p className="text-slate-300 leading-relaxed">
                    {activeModalComponent.roleInSystem}
                  </p>
                </div>
              </div>

              {/* Specifications Table */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Spesifikasi Teknis yang Perlu Diketahui Siswa
                </h4>
                <div className="border border-slate-800 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-slate-800/80">
                      {activeModalComponent.specs.map((sp, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40">
                          <td className="px-4 py-2.5 font-medium text-slate-400 w-1/3 bg-slate-950/40">
                            {sp.label}
                          </td>
                          <td className="px-4 py-2.5 text-white font-mono">
                            {sp.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Troubleshooting & Maintenance Tip */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-amber-300 uppercase tracking-wide block mb-0.5">
                    Tips Pemecahan Masalah (Troubleshooting):
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {activeModalComponent.troubleshootingTip}
                  </p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-800 bg-[#0d182e] flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Informatika SMA Kelas X · Perangkat Keras
              </span>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
