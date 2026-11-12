import React, { useState } from 'react';
import { Cpu, Code2, Users, AlertCircle, CheckCircle } from 'lucide-react';

export const TriadVisualizer: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'all' | 'no-hw' | 'no-sw' | 'no-bw'>('all');

  const states = {
    all: {
      title: 'Sistem Berjalan Sempurna (Sinergi Penuh)',
      status: 'Normal & Produktif',
      isWorking: true,
      description:
        'Brainware memberikan perintah melalui software aplikasi, sistem operasi mengaturnya ke hardware, dan hardware mengeksekusinya menjadi hasil nyata. Komputer bekerja optimal.',
      iconColor: 'text-emerald-400',
    },
    'no-hw': {
      title: 'Kondisi: Tidak Ada Hardware',
      status: 'Gagal Beroperasi (Tidak Ada Fisik)',
      isWorking: false,
      description:
        'Anda memiliki installer software dan operator yang pintar, tetapi tidak ada komputer fisik. Software hanyalah data pasif tak bertuan dan tidak dapat dijalankan.',
      iconColor: 'text-red-400',
    },
    'no-sw': {
      title: 'Kondisi: Tidak Ada Software',
      status: 'Mati / Layar Hitam (Rongsokan Elektronik)',
      isWorking: false,
      description:
        'Hardware dengan prosesor termahal dinyalakan, namun storage kosong tanpa OS. Layar hanya menampilkan pesan error "No bootable device". Komputer tidak mengerti apa yang harus diperbuat.',
      iconColor: 'text-red-400',
    },
    'no-bw': {
      title: 'Kondisi: Tidak Ada Brainware',
      status: 'Menganggur Pasif (Tanpa Pengarah)',
      isWorking: false,
      description:
        'Komputer dan aplikasi siap di atas meja, namun tanpa manusia yang mengendalikan atau membutuhkan. Komputer diam membisu tanpa tujuan dan tidak menghasilkan nilai guna apapun.',
      iconColor: 'text-amber-400',
    },
  };

  const current = states[activeScenario];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 bg-[#101B32] text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#36C5F0] uppercase tracking-wider mb-1">
          <span>Eksperimen Konsep Bab 6</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight text-white">
          Sinergi Trikomponen: Hardware, Software & Brainware
        </h3>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl">
          Uji apa yang terjadi jika salah satu dari tiga pilar komputasi dihilangkan dari sistem.
        </p>
      </div>

      <div className="p-6 lg:p-8 space-y-6">
        {/* Toggle scenarios buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveScenario('all')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeScenario === 'all'
                ? 'bg-[#101B32] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Lengkap: Hardware + Software + Brainware
          </button>
          <button
            onClick={() => setActiveScenario('no-hw')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeScenario === 'no-hw'
                ? 'bg-rose-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Hilangkan Hardware
          </button>
          <button
            onClick={() => setActiveScenario('no-sw')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeScenario === 'no-sw'
                ? 'bg-rose-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Hilangkan Software
          </button>
          <button
            onClick={() => setActiveScenario('no-bw')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeScenario === 'no-bw'
                ? 'bg-amber-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Hilangkan Brainware
          </button>
        </div>

        {/* 3 Pillars Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Hardware Card */}
          <div
            className={`p-5 rounded-xl border transition-all ${
              activeScenario === 'no-hw'
                ? 'bg-rose-50/70 border-rose-300 opacity-50 grayscale'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">1. Hardware (Raga Fisik)</h4>
            <p className="text-xs text-slate-600 mt-1">
              Komponen elektronik fisik: CPU, motherboard, RAM, storage, monitor, keyboard.
            </p>
            <span
              className={`inline-block mt-3 text-[11px] font-semibold ${
                activeScenario === 'no-hw' ? 'text-rose-600' : 'text-emerald-700'
              }`}
            >
              {activeScenario === 'no-hw' ? '✕ Dinonaktifkan' : '✓ Siap Beroperasi'}
            </span>
          </div>

          {/* Software Card */}
          <div
            className={`p-5 rounded-xl border transition-all ${
              activeScenario === 'no-sw'
                ? 'bg-rose-50/70 border-rose-300 opacity-50 grayscale'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-3">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">2. Software (Instruksi Logis)</h4>
            <p className="text-xs text-slate-600 mt-1">
              Program instruksi: Sistem Operasi (Windows/Linux), aplikasi kerja, utilitas.
            </p>
            <span
              className={`inline-block mt-3 text-[11px] font-semibold ${
                activeScenario === 'no-sw' ? 'text-rose-600' : 'text-emerald-700'
              }`}
            >
              {activeScenario === 'no-sw' ? '✕ Dinonaktifkan' : '✓ Siap Beroperasi'}
            </span>
          </div>

          {/* Brainware Card */}
          <div
            className={`p-5 rounded-xl border transition-all ${
              activeScenario === 'no-bw'
                ? 'bg-amber-50/70 border-amber-300 opacity-50 grayscale'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">3. Brainware (Pengguna Manusia)</h4>
            <p className="text-xs text-slate-600 mt-1">
              Manusia pengarah: Operator, Programmer, Administrator jaringan, Teknisi perawat.
            </p>
            <span
              className={`inline-block mt-3 text-[11px] font-semibold ${
                activeScenario === 'no-bw' ? 'text-amber-600' : 'text-emerald-700'
              }`}
            >
              {activeScenario === 'no-bw' ? '✕ Dinonaktifkan' : '✓ Siap Mengendalikan'}
            </span>
          </div>
        </div>

        {/* Reaction Status Box */}
        <div
          className={`p-5 rounded-xl border flex items-start gap-4 ${
            current.isWorking
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              : activeScenario === 'no-bw'
              ? 'bg-amber-50/80 border-amber-200 text-amber-950'
              : 'bg-rose-50/80 border-rose-200 text-rose-950'
          }`}
        >
          {current.isWorking ? (
            <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
          )}
          <div>
            <div className="flex items-center gap-2">
              <h5 className="font-bold text-sm">{current.title}</h5>
              <span className="text-xs opacity-75">· {current.status}</span>
            </div>
            <p className="text-xs mt-1.5 leading-relaxed">{current.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
