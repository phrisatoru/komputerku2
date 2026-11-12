import React, { useState, useEffect } from 'react';
import { iposScenarios } from '../data/iposData';
import { Play, Pause, RotateCcw, ChevronRight, HardDrive, Cpu, Monitor, Keyboard, CheckCircle2 } from 'lucide-react';

export const IPOSSimulator: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenario = iposScenarios[selectedScenarioIndex];
  const currentStep = scenario.steps[currentStepIndex];

  // Auto-play timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < scenario.steps.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, scenario.steps.length]);

  const handleScenarioChange = (index: number) => {
    setSelectedScenarioIndex(index);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleNextStep = () => {
    if (currentStepIndex < scenario.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setCurrentStepIndex(0);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const stageIcons = {
    input: Keyboard,
    process: Cpu,
    output: Monitor,
    storage: HardDrive,
  };

  const stageColors = {
    input: 'from-sky-500 to-cyan-500',
    process: 'from-indigo-500 to-blue-600',
    output: 'from-emerald-500 to-teal-600',
    storage: 'from-amber-500 to-orange-500',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Top Header Bar */}
      <div className="p-6 bg-[#101B32] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36C5F0] uppercase tracking-wider mb-1">
            <span>Simulasi Interaktif Siklus Komputasi</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            Simulator Alur Kerja IPOS (Input - Process - Output - Storage)
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Pilih skenario nyata dan ikuti bagaimana data fisik bertransformasi menjadi sinyal biner dan informasi.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap items-center gap-2">
          {iposScenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => handleScenarioChange(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedScenarioIndex === idx
                  ? 'bg-[#36C5F0] text-[#101B32] font-semibold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {sc.name.split(' ')[0]} {sc.name.split(' ')[1]}...
            </button>
          ))}
        </div>
      </div>

      {/* Main Sandbox Area */}
      <div className="p-6 lg:p-8 space-y-8">
        {/* Scenario description kicker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h4 className="text-base font-semibold text-slate-900">
              Skenario: {scenario.name}
            </h4>
            <p className="text-xs text-slate-500">{scenario.description}</p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#101B32] hover:bg-slate-800 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#36C5F0]" />
                  <span>Jeda</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#36C5F0]" />
                  <span>Jalankan Otomatis</span>
                </>
              )}
            </button>
            <button
              onClick={handleNextStep}
              className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Langkah Berikutnya</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Reset Simulasi"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Stages Visual Diagram Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {scenario.steps.map((st, idx) => {
            const Icon = stageIcons[st.stage];
            const isCurrent = currentStepIndex === idx;
            const isCompleted = currentStepIndex > idx;

            return (
              <div
                key={st.stage}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative p-5 rounded-xl border transition-all cursor-pointer text-left ${
                  isCurrent
                    ? 'border-[#36C5F0] bg-cyan-50/40 ring-2 ring-[#36C5F0]/20 shadow-md'
                    : isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Stage number & status indicator */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      isCurrent
                        ? 'text-[#101B32]'
                        : isCompleted
                        ? 'text-emerald-700'
                        : 'text-slate-400'
                    }`}
                  >
                    Tahap 0{idx + 1}
                  </span>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isCurrent ? 'bg-[#36C5F0] ring-4 ring-[#36C5F0]/20' : 'bg-slate-200'
                      }`}
                    />
                  )}
                </div>

                {/* Stage Icon & Label */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${
                      stageColors[st.stage]
                    } ${isCurrent ? 'scale-110 shadow-sm' : 'opacity-80'} transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-slate-900 capitalize">
                      {st.stage}
                    </h5>
                    <span className="text-[11px] text-slate-500 block truncate max-w-[130px]">
                      {st.device.split(' ')[0]} {st.device.split(' ')[1] || ''}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {st.action}
                </p>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Current Stage Card */}
        <div className="bg-[#101B32] text-white p-6 rounded-xl border border-slate-800 shadow-inner">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#36C5F0] uppercase tracking-wide">
                  Detail Tahap Aktif
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-300">
                  Langkah {currentStepIndex + 1} dari 4
                </span>
              </div>
              <h4 className="text-lg font-bold text-white">
                {currentStep.title}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {currentStep.detail}
              </p>
            </div>

            <div className="lg:w-80 shrink-0 bg-slate-900/90 p-4 rounded-lg border border-slate-800 space-y-3">
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                  Perangkat Terlibat:
                </span>
                <span className="text-xs font-semibold text-[#36C5F0]">
                  {currentStep.device}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                  Aksi Fisik / Sinyal:
                </span>
                <span className="text-xs text-slate-300">
                  {currentStep.action}
                </span>
              </div>
              <div className="pt-1 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Status Siklus:</span>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {currentStepIndex === 3 ? 'Selesai (Tersimpan)' : 'Sedang Diproses...'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway Notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold shrink-0 mt-0.5">
            i
          </div>
          <div>
            <strong className="text-slate-800 font-semibold block mb-0.5">
              Kunci Pemahaman Kurikulum Kelas 10:
            </strong>
            Komputer tidak pernah melompati tahap. Perangkat masukan (Input) mengubah bahasa fisik manusia menjadi sinyal biner 0 dan 1, kemudian CPU & RAM (Process) mengolahnya secara terstruktur, disajikan ke manusia lewat perangkat keluaran (Output), dan disimpan permanen di media penyimpanan (Storage).
          </div>
        </div>
      </div>
    </div>
  );
};
