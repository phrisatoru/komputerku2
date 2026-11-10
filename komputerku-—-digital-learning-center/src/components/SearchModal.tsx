import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Cpu, HelpCircle, ArrowRight } from 'lucide-react';
import { MATERI_MODULES, COMPUTER_COMPONENTS, GLOSSARY_TERMS, QUIZ_QUESTIONS } from '../data/learningData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToMateri: (moduleId: string) => void;
  onSelectComponent: (componentId: string) => void;
  onNavigateTab: (tabId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToMateri,
  onSelectComponent,
  onNavigateTab,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (e.key === '/' && !isOpen && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        // open modal could be dispatched
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search in Modules
  const matchedModules = normalizedQuery
    ? MATERI_MODULES.filter(
        (m) =>
          m.title.toLowerCase().includes(normalizedQuery) ||
          m.summary.toLowerCase().includes(normalizedQuery)
      )
    : [];

  // Search in Components
  const matchedComponents = normalizedQuery
    ? COMPUTER_COMPONENTS.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.shortDesc.toLowerCase().includes(normalizedQuery) ||
          c.categoryLabel.toLowerCase().includes(normalizedQuery)
      )
    : [];

  // Search in Glossary
  const matchedGlossary = normalizedQuery
    ? GLOSSARY_TERMS.filter(
        (g) =>
          g.term.toLowerCase().includes(normalizedQuery) ||
          g.meaning.toLowerCase().includes(normalizedQuery)
      )
    : [];

  // Search in Quiz
  const matchedQuiz = normalizedQuery
    ? QUIZ_QUESTIONS.filter(
        (q) =>
          q.question.toLowerCase().includes(normalizedQuery) ||
          q.topic.toLowerCase().includes(normalizedQuery)
      )
    : [];

  const totalResults =
    matchedModules.length +
    matchedComponents.length +
    matchedGlossary.length +
    matchedQuiz.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-[#091120] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3 bg-[#0d182e]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari topik (misal: CPU, RAM, ALU, BIOS, IPOS, Driver)..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-white rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-400 hover:text-white bg-slate-800/80 rounded border border-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-4">
          {!normalizedQuery && (
            <div className="py-8 text-center text-slate-400 text-sm">
              <p className="font-medium text-slate-300">Pencarian Cepat Pembelajaran</p>
              <p className="text-xs text-slate-400 mt-1">
                Ketikkan kata kunci seperti <span className="text-cyan-400">"Motherboard"</span>, <span className="text-cyan-400">"Brainware"</span>, <span className="text-cyan-400">"ALU"</span>, atau <span className="text-cyan-400">"NVMe"</span>
              </p>
            </div>
          )}

          {normalizedQuery && totalResults === 0 && (
            <div className="py-8 text-center text-slate-400 text-sm">
              <p>Tidak ada hasil yang cocok dengan "{query}".</p>
              <p className="text-xs text-slate-400 mt-1">Coba gunakan kata kunci komponen atau istilah informatika lainnya.</p>
            </div>
          )}

          {/* Materi Modules Results */}
          {matchedModules.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2 block">
                Modul Materi Pembelajaran
              </span>
              <div className="space-y-1.5">
                {matchedModules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      onNavigateToMateri(m.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-start gap-2.5">
                      <BookOpen className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                          {m.letter}. {m.title}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {m.summary}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Components Results */}
          {matchedComponents.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2 block">
                Galeri Komponen Komputer
              </span>
              <div className="space-y-1.5">
                {matchedComponents.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onSelectComponent(c.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start justify-between gap-3 group cursor-pointer"
                  >
                    <div className="flex items-start gap-2.5">
                      <Cpu className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-300">
                          {c.name}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {c.shortDesc}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 shrink-0 mt-0.5">
                      {c.categoryLabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Glossary Results */}
          {matchedGlossary.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2 block">
                Glosarium & Istilah Penting
              </span>
              <div className="space-y-1.5">
                {matchedGlossary.map((g, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onNavigateTab('rangkuman');
                      onClose();
                    }}
                    className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-colors cursor-pointer"
                  >
                    <div className="text-xs font-bold text-cyan-300">{g.term}</div>
                    <p className="text-xs text-slate-300 mt-0.5">{g.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quiz Topics Results */}
          {matchedQuiz.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-2 block">
                Soal Terkait di Kuis
              </span>
              <div className="space-y-1.5">
                {matchedQuiz.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      onNavigateTab('kuis');
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start gap-2.5 group cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-cyan-400 font-medium">Soal #{q.id} · {q.topic}</span>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">{q.question}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
