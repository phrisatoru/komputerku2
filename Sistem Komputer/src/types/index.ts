export type PageType = 'beranda' | 'materi' | 'kuis' | 'tentang';

export interface Chapter {
  id: number;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
  content: ChapterSection[];
}

export interface ChapterSection {
  title: string;
  description: string;
  subsections?: {
    subtitle: string;
    details: string;
    examples?: string[];
    technicalNote?: string;
  }[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed
  explanation: string;
  chapterRef: string;
}

export interface IPOSStep {
  stage: 'input' | 'process' | 'output' | 'storage';
  title: string;
  device: string;
  action: string;
  detail: string;
}

export interface IPOSScenario {
  id: string;
  name: string;
  description: string;
  steps: IPOSStep[];
}
