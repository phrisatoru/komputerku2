/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ChapterView } from './components/ChapterView';
import { QuizView } from './components/QuizView';
import { AboutView } from './components/AboutView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');
  const [activeChapterId, setActiveChapterId] = useState<number>(1);

  const handleNavigate = (page: PageType, chapterId?: number) => {
    setCurrentPage(page);
    if (chapterId) {
      setActiveChapterId(chapterId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F5F8] text-[#101B32]">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        activeChapterId={activeChapterId}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'beranda' && (
          <HomeView onNavigate={handleNavigate} />
        )}

        {currentPage === 'materi' && (
          <ChapterView
            initialChapterId={activeChapterId}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'kuis' && (
          <QuizView onNavigate={handleNavigate} />
        )}

        {currentPage === 'tentang' && (
          <AboutView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Standardized Footer with Attribution */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
