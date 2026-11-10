import React, { useState } from 'react';
import { Search, BookOpen, CheckCircle, Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch: () => void;
  progressPercent: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  progressPercent,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'materi', label: 'Materi' },
    { id: 'komponen', label: 'Komponen' },
    { id: 'kuis', label: 'Kuis' },
    { id: 'rangkuman', label: 'Rangkuman' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050b14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Wordmark Brand */}
        <div 
          onClick={() => handleNavClick('beranda')}
          className="flex items-center gap-2.5 cursor-pointer shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
              KOMPUTER<span className="text-cyan-400">KU</span>
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 hidden sm:block tracking-wider uppercase">
              Digital Learning Center
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Single Line, 4-5 items) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer pb-1 relative text-sm ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'hover:text-white text-slate-300'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900/90 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            title="Pencarian Materi (Ctrl + K)"
            aria-label="Cari materi"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden lg:inline text-slate-400">Cari materi...</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700">
              /
            </kbd>
          </button>

          {/* Progress Tracker Widget */}
          <div 
            onClick={() => handleNavClick('rangkuman')} 
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-cyan-950/40 border border-cyan-800/40 rounded-lg text-xs text-cyan-300 cursor-pointer hover:bg-cyan-950/70 transition-colors whitespace-nowrap"
            title="Klik untuk melihat ringkasan progres belajar"
          >
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300">Progres:</span>
            <span className="font-bold text-cyan-400 tabular-nums">{progressPercent}%</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1324] border-b border-slate-800 px-4 pt-3 pb-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-3">
            <span>Progres Belajar:</span>
            <span className="font-semibold text-cyan-400 tabular-nums">{progressPercent}% Selesai</span>
          </div>
        </div>
      )}
    </header>
  );
};
