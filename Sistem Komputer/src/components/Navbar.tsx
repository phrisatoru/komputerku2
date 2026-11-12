import React, { useState } from 'react';
import { PageType } from '../types';
import { Cpu, Menu, X, ArrowRight, BookOpen, HelpCircle, Info, Home } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, chapterId?: number) => void;
  activeChapterId?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda' as PageType, label: 'Beranda', icon: Home },
    { id: 'materi' as PageType, label: 'Materi Pembelajaran', icon: BookOpen },
    { id: 'kuis' as PageType, label: 'Kuis Interaktif', icon: HelpCircle },
    { id: 'tentang' as PageType, label: 'Tentang Kami', icon: Info },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#101B32]/95 backdrop-blur-md border-b border-[#36C5F0]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36C5F0] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#36C5F0] to-[#101B32] p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <div className="w-full h-full bg-[#101B32] rounded-[6px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#36C5F0]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-white leading-tight">
                SISTEM KOMPUTER
              </span>
              <span className="text-[11px] text-slate-300 tracking-wide font-medium">
                Informatika Kelas 10 SMA
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single-line, unboxed text) */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors py-1 relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#36C5F0]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#36C5F0] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('materi')}
              className="px-4 py-2 text-sm font-semibold text-[#101B32] bg-[#36C5F0] hover:bg-[#36C5F0]/90 active:scale-95 transition-all rounded-lg shadow-sm flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Mulai Belajar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#36C5F0]"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101B32] border-b border-slate-700 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors ${
                  isActive
                    ? 'bg-[#36C5F0]/15 text-[#36C5F0]'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('materi')}
              className="w-full py-2.5 text-center text-sm font-semibold text-[#101B32] bg-[#36C5F0] hover:bg-[#36C5F0]/90 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Mulai Belajar Materi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
