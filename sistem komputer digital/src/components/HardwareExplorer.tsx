import React, { useState } from 'react';
import { Cpu, HardDrive, Layers, Zap, Eye, Check } from 'lucide-react';
import { SmartImage } from './SmartImage';

interface HardwarePart {
  id: string;
  name: string;
  role: string;
  category: 'Process' | 'Storage' | 'Platform' | 'Visual';
  speed: string;
  specs: string;
  explanation: string;
  tips: string;
}

const hardwareParts: HardwarePart[] = [
  {
    id: 'cpu',
    name: 'CPU (Intel Core / AMD Ryzen)',
    role: 'Otak Utama Komputer (Central Processing Unit)',
    category: 'Process',
    speed: '3.5 - 5.8 GHz Clock Speed',
    specs: 'Multi-Core (8-24 Core), Cache L3 hingga 36MB, Litografi 3-7nm',
    explanation: 'Bertanggung jawab menjalankan instruksi software biner secara berurutan maupun paralel. Memiliki ALU (kalkulasi angka dan logika) serta CU (pengatur lalu lintas instruksi).',
    tips: 'Semakin tinggi IPC (Instructions Per Clock) dan jumlah core, semakin cepat komputer merender video dan multitasking.'
  },
  {
    id: 'motherboard',
    name: 'Motherboard (Papan Induk / Mainboard)',
    role: 'Tulang Punggung Konektivitas Komputer',
    category: 'Platform',
    speed: 'PCIe 5.0 (hingga 128 GB/s bandwidth)',
    specs: 'Form factor ATX/Micro-ATX, Socket LGA1700/AM5, VRM 16+1 Phase',
    explanation: 'Papan sirkuit cetak utama tempat CPU, RAM, GPU, dan SSD ditancapkan. Mengatur pembagian daya listrik dan jalur komunikasi data berkecepatan tinggi antar seluruh komponen.',
    tips: 'Pastikan socket motherboard cocok dengan generasi prosesor yang dipasang.'
  },
  {
    id: 'ram',
    name: 'RAM (DDR4 / DDR5 SDRAM)',
    role: 'Memori Kerja Cepat Sementara (Volatile)',
    category: 'Storage',
    speed: '4800 - 6400 MT/s (~60-90 GB/s bandwidth)',
    specs: 'Kapasitas 16GB - 64GB Dual Channel, Latensi CAS ~30-36',
    explanation: 'Tempat penyimpanan program yang sedang dibuka pengguna saat itu juga. CPU dapat mengambil data dari RAM dalam hitungan nanodetik, jauh lebih cepat daripada mengambil dari harddisk.',
    tips: 'Gunakan konfigurasi Dual-Channel (2 keping identik) untuk melipatgandakan jalur bandwidth memori.'
  },
  {
    id: 'gpu',
    name: 'GPU (NVIDIA GeForce RTX / AMD Radeon)',
    role: 'Pemroses Grafis dan Visual Paralel',
    category: 'Visual',
    speed: 'Hingga puluhan TFLOPs throughput komputasi paralel',
    specs: 'Dedicated VRAM 8GB - 24GB GDDR6X, Ribuan CUDA / Stream Cores',
    explanation: 'Didesain khusus dengan ribuan inti prosesor kecil untuk melakukan komputasi matematis rendering jutaan poligon 3D, efek pencahayaan ray tracing, dan piksel layar ke monitor.',
    tips: 'GPU diskrit wajib dimiliki untuk kebutuhan editing video profesional, perancangan 3D CAD, dan bermain game resolusi tinggi.'
  },
  {
    id: 'ssd',
    name: 'SSD NVMe M.2 (Solid State Drive)',
    role: 'Penyimpanan Permanen Berkecepatan Tinggi (Non-Volatile)',
    category: 'Storage',
    speed: 'Read/Write hingga 7000 MB/s (PCIe Gen 4)',
    specs: 'Kapasitas 512GB - 2TB, 3D TLC/QLC NAND Flash, Controller multi-channel',
    explanation: 'Menyimpan sistem operasi, program aplikasi, dan file pengguna secara permanen. Tidak menggunakan piringan berputar magnetik sehingga tahan guncangan dan menyala (booting) dalam hitungan detik.',
    tips: 'SSD NVMe langsung dipasang ke slot M.2 di motherboard tanpa membutuhkan kabel SATA tambahan.'
  }
];

export const HardwareExplorer: React.FC = () => {
  const [activePartId, setActivePartId] = useState('cpu');
  const activePart = hardwareParts.find((p) => p.id === activePartId) || hardwareParts[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 bg-[#101B32] text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#36C5F0] uppercase tracking-wider mb-1">
          <span>Bedah Anatomi Perangkat Keras</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-white">
          Eksplorasi Komponen Fisik Komputer Modern
        </h3>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl">
          Kenali fungsi fisik, spesifikasi teknis, dan peran masing-masing komponen perangkat keras dalam satu unit sistem komputer desktop.
        </p>
      </div>

      <div className="p-6 lg:p-8 space-y-8">
        {/* Component Selector Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {hardwareParts.map((part) => (
            <button
              key={part.id}
              onClick={() => setActivePartId(part.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activePartId === part.id
                  ? 'bg-[#101B32] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {part.id === 'cpu' && <Cpu className="w-4 h-4 text-[#36C5F0]" />}
              {part.id === 'motherboard' && <Layers className="w-4 h-4 text-[#36C5F0]" />}
              {part.id === 'ram' && <Zap className="w-4 h-4 text-[#36C5F0]" />}
              {part.id === 'gpu' && <Eye className="w-4 h-4 text-[#36C5F0]" />}
              {part.id === 'ssd' && <HardDrive className="w-4 h-4 text-[#36C5F0]" />}
              <span>{part.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Split: Visual Blueprint & Tech Spec Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Diagram Blueprint */}
          <div className="lg:col-span-7 bg-[#101B32] rounded-xl overflow-hidden border border-slate-800 p-2 shadow-inner">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center">
              <SmartImage
                src="/images/hardware_components_diagram.jpg"
                fallbackSrcs={[
                  '/images/hardware_components_diagram_1794482164443.jpg',
                  '/src/assets/images/hardware_components_diagram_1794482164443.jpg',
                ]}
                alt="Diagram Komponen Perangkat Keras Komputer"
                className="w-full h-full object-contain"
                fallbackType="hardware"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#101B32]/90 backdrop-blur-sm p-3 rounded-lg border border-slate-700 text-xs text-slate-200 flex items-center justify-between">
                <span>Diagram Visual: Motherboard, CPU, RAM DDR5, GPU RTX, dan SSD M.2</span>
                <span className="text-[#36C5F0] font-semibold text-[11px]">Desktop Rig</span>
              </div>
            </div>
          </div>

          {/* Component Tech Spec Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span className="font-semibold text-[#101B32]">{activePart.category} Device</span>
                <span>·</span>
                <span>Spesifikasi Kelas 10 SMA</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 leading-tight">
                {activePart.name}
              </h4>
              <p className="text-xs font-medium text-slate-600 mt-1">
                {activePart.role}
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-200 text-xs">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Penjelasan Fungsi:
                </span>
                <p className="text-slate-700 leading-relaxed mt-1">
                  {activePart.explanation}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Kecepatan / Throughput:
                </span>
                <p className="font-mono text-slate-800 font-medium mt-0.5">
                  {activePart.speed}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Standar Spesifikasi Modern:
                </span>
                <p className="text-slate-700 mt-0.5">
                  {activePart.specs}
                </p>
              </div>

              <div className="p-3 bg-cyan-50/70 border border-[#36C5F0]/30 rounded-lg">
                <span className="text-[11px] font-semibold text-[#101B32] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Check className="w-3.5 h-3.5 text-cyan-600" />
                  Tips Siswa & Pemahaman Praktis:
                </span>
                <p className="text-slate-700 leading-normal">
                  {activePart.tips}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
