import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MateriSection } from './components/MateriSection';
import { KomponenGallery } from './components/KomponenGallery';
import { KuisSection } from './components/KuisSection';
import { RangkumanSection } from './components/RangkumanSection';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { MATERI_MODULES, COMPUTER_COMPONENTS } from './data/learningData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [targetMateriId, setTargetMateriId] = useState<string>('intro');
  const [targetComponentId, setTargetComponentId] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // LocalStorage State for Learning Progress
  const [readModules, setReadModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('komputerku_read_modules');
      return saved ? JSON.parse(saved) : ['intro']; // Start with intro read
    } catch {
      return ['intro'];
    }
  });

  const [exploredComponents, setExploredComponents] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('komputerku_explored_components');
      return saved ? JSON.parse(saved) : ['cpu'];
    } catch {
      return ['cpu'];
    }
  });

  const [bestQuizScore, setBestQuizScore] = useState<number | null>(() => {
    try {
      const saved = localStorage.getItem('komputerku_best_score');
      return saved !== null ? parseInt(saved, 10) : null;
    } catch {
      return null;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('komputerku_read_modules', JSON.stringify(readModules));
    } catch (e) {
      console.error(e);
    }
  }, [readModules]);

  useEffect(() => {
    try {
      localStorage.setItem('komputerku_explored_components', JSON.stringify(exploredComponents));
    } catch (e) {
      console.error(e);
    }
  }, [exploredComponents]);

  useEffect(() => {
    if (bestQuizScore !== null) {
      try {
        localStorage.setItem('komputerku_best_score', bestQuizScore.toString());
      } catch (e) {
        console.error(e);
      }
    }
  }, [bestQuizScore]);

  // Calculate overall progress percentage
  // 5 modules = 50% (10% each)
  // Components explored = 25% (up to 8 components, ~3.1% each)
  // Quiz completed = 25% (if score >= 60, full 25%, else partial)
  const calculateProgress = (): number => {
    const modulesScore = (readModules.length / MATERI_MODULES.length) * 50;
    const componentsScore = Math.min(25, (exploredComponents.length / COMPUTER_COMPONENTS.length) * 25);
    const quizScore = bestQuizScore !== null ? Math.min(25, (bestQuizScore / 100) * 25) : 0;
    return Math.min(100, Math.round(modulesScore + componentsScore + quizScore));
  };

  const handleMarkModuleRead = (moduleId: string) => {
    if (!readModules.includes(moduleId)) {
      setReadModules((prev) => [...prev, moduleId]);
    }
  };

  const handleComponentExplored = (componentId: string) => {
    if (!exploredComponents.includes(componentId)) {
      setExploredComponents((prev) => [...prev, componentId]);
    }
  };

  const handleQuizCompleted = (score: number) => {
    setBestQuizScore((prev) => (prev === null || score > prev ? score : prev));
  };

  const handleNavigateToMateri = (moduleId: string) => {
    setTargetMateriId(moduleId);
    setActiveTab('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectComponent = (componentId: string) => {
    setTargetComponentId(componentId);
    setActiveTab('komponen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050b14] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-black">
      
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        progressPercent={calculateProgress()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <>
            <HeroSection
              onStartLearning={() => {
                setActiveTab('materi');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuiz={() => {
                setActiveTab('kuis');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreComponents={() => {
                setActiveTab('komponen');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Quick Preview of Learning Modules on Home */}
            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase block mb-1">
                    Kurikulum Terstruktur
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Jalur Belajar Sistem Komputer Kelas X
                  </h2>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('materi');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                >
                  Buka Seluruh Materi →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {MATERI_MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    onClick={() => handleNavigateToMateri(mod.id)}
                    className="p-5 rounded-2xl bg-[#081224] border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between hover:shadow-lg hover:shadow-cyan-950/40"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-xs font-bold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                        {mod.letter}
                      </div>
                      <h3 className="text-sm font-bold text-white mt-3 group-hover:text-cyan-300 transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-3 leading-relaxed">
                        {mod.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-medium">
                      <span>Pelajari</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'materi' && (
          <MateriSection
            initialModuleId={targetMateriId}
            onMarkModuleRead={handleMarkModuleRead}
            readModules={readModules}
            onOpenComponents={() => {
              setActiveTab('komponen');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenQuiz={() => {
              setActiveTab('kuis');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'komponen' && (
          <KomponenGallery
            selectedComponentId={targetComponentId}
            onClearSelectedComponent={() => setTargetComponentId(null)}
            onComponentExplored={handleComponentExplored}
          />
        )}

        {activeTab === 'kuis' && (
          <KuisSection
            onQuizCompleted={handleQuizCompleted}
            bestScore={bestQuizScore}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'rangkuman' && (
          <RangkumanSection
            readModules={readModules}
            bestScore={bestQuizScore}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToMateri={handleNavigateToMateri}
          />
        )}
      </main>

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToMateri={handleNavigateToMateri}
        onSelectComponent={handleSelectComponent}
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

    </div>
  );
}
