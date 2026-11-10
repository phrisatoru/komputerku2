import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, ArrowRight, Zap, CheckCircle2, HardDrive, Cpu, Monitor, Keyboard as KeyboardIcon, Layers } from 'lucide-react';
import { IPOS_SCENARIOS, IPOSScenario } from '../data/learningData';

export const IPOSSimulator: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenario: IPOSScenario = IPOS_SCENARIOS[selectedScenarioIndex];
  const currentStep = scenario.steps[activeStepIndex];

  // Auto-play timer
  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= scenario.steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, scenario.steps.length]);

  const handleSelectScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    setActiveStepIndex(0);
    setIsPlaying(false);
  };

  const handleNextStep = () => {
    if (activeStepIndex < scenario.steps.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setActiveStepIndex(0);
  };

  const stagesMeta = [
    {
      id: 'input',
      title: '1. INPUT',
      subtitle: 'Memasukkan Data',
      icon: KeyboardIcon,
      color: 'border-blue-500/60 bg-blue-950/30 text-blue-400',
      activeColor: 'border-blue-400 bg-blue-900/40 text-blue-300 ring-2 ring-blue-400/50',
    },
    {
      id: 'process',
      title: '2. PROCESS',
      subtitle: 'Pengolahan CPU & RAM',
      icon: Cpu,
      color: 'border-cyan-500/60 bg-cyan-950/30 text-cyan-400',
      activeColor: 'border-cyan-400 bg-cyan-900/40 text-cyan-300 ring-2 ring-cyan-400/50',
    },
    {
      id: 'output',
      title: '3. OUTPUT',
      subtitle: 'Penyajian Informasi',
      icon: Monitor,
      color: 'border-teal-500/60 bg-teal-950/30 text-teal-400',
      activeColor: 'border-teal-400 bg-teal-900/40 text-teal-300 ring-2 ring-teal-400/50',
    },
    {
      id: 'storage',
      title: '4. STORAGE',
      subtitle: 'Penyimpanan Permanen',
      icon: HardDrive,
      color: 'border-indigo-500/60 bg-indigo-950/30 text-indigo-400',
      activeColor: 'border-indigo-400 bg-indigo-900/40 text-indigo-300 ring-2 ring-indigo-400/50',
    },
  ];

  return (
    <div className="bg-[#081224] border border-cyan-900/40 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Simulasi Interaktif Alur Data</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Laboratorium Siklus IPOS
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Amati bagaimana data biner berpindah dan diolah dari perangkat masukan hingga penyimpanan.
          </p>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-slate-400 font-medium">Pilih Skenario Nyata:</label>
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800">
            {IPOS_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => handleSelectScenario(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedScenarioIndex === idx
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {sc.title.split(' ')[0]} {sc.title.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scenario Brief Description */}
      <div className="py-4 px-4 bg-slate-900/70 border border-slate-800 rounded-xl my-6 flex items-start gap-3">
        <Layers className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
        <div>
          <h4 className="text-sm font-semibold text-white">{scenario.title}</h4>
          <p className="text-xs text-slate-300 mt-0.5">{scenario.description}</p>
        </div>
      </div>

      {/* Interactive Stages Node Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative py-2">
        {stagesMeta.map((meta, idx) => {
          const isActive = idx === activeStepIndex;
          const isPassed = idx < activeStepIndex;
          const IconComp = meta.icon;
          const stepData = scenario.steps[idx];

          return (
            <div
              key={meta.id}
              onClick={() => {
                setIsPlaying(false);
                setActiveStepIndex(idx);
              }}
              className={`p-4 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between min-h-[170px] ${
                isActive
                  ? `${meta.activeColor} shadow-lg shadow-cyan-950/50 scale-[1.02]`
                  : isPassed
                  ? 'border-slate-700 bg-slate-900/50 text-slate-300'
                  : 'border-slate-800/80 bg-slate-950/40 text-slate-400 hover:border-slate-700'
              }`}
            >
              {/* Card top */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider uppercase">
                  {meta.title}
                </span>
                {isPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                ) : (
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Hardware Device */}
              <div className="my-2">
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Perangkat:</span>
                <span className="text-xs sm:text-sm font-semibold text-white block mt-0.5">
                  {stepData.device}
                </span>
                <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                  {stepData.action}
                </p>
              </div>

              {/* Status pill */}
              <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{meta.subtitle}</span>
                {isActive && (
                  <span className="text-cyan-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping inline-block" />
                    Sedang Aktif
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Technical Inspector Box */}
      <div className="mt-6 bg-[#040913] border border-cyan-800/50 rounded-xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800/80 rounded">
                Inspektur Bus & Hardware
              </span>
              <span className="text-xs text-slate-400">
                Langkah {activeStepIndex + 1} dari 4 · {stagesMeta[activeStepIndex].title}
              </span>
            </div>
            
            <h4 className="text-base sm:text-lg font-bold text-white pt-1">
              {currentStep.action} pada <span className="text-cyan-400">{currentStep.device}</span>
            </h4>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              {currentStep.techDetail}
            </p>
          </div>

          {/* Micro-metrics visual */}
          <div className="shrink-0 bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs space-y-1.5 min-w-[190px]">
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Tahapan:</span>
              <span className="text-white font-medium capitalize">{currentStep.stage}</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Protokol Data:</span>
              <span className="text-cyan-400 font-mono">Biner (0 & 1)</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Media Transfer:</span>
              <span className="text-slate-300 font-mono">PCIe / USB Bus</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Latensi Relatif:</span>
              <span className="text-emerald-400 font-mono">
                {currentStep.stage === 'process' ? '< 10 ns' : currentStep.stage === 'input' ? '~ 1 ms' : '~ 50 μs'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/80">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Jeda Simulasi' : 'Jalankan Otomatis'}</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs transition-colors cursor-pointer"
            title="Reset ke Langkah Awal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Step Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevStep}
            disabled={activeStepIndex === 0}
            className="flex items-center gap-1 px-3 py-2 bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>
          
          <button
            onClick={handleNextStep}
            disabled={activeStepIndex === scenario.steps.length - 1}
            className="flex items-center gap-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 text-white font-medium rounded-lg text-xs transition-colors cursor-pointer"
          >
            <span>Langkah Berikut</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
