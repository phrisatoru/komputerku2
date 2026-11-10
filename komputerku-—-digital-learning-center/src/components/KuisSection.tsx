import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  BookOpen, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/learningData';

interface KuisSectionProps {
  onQuizCompleted: (score: number) => void;
  bestScore: number | null;
  onNavigateTab: (tabId: string) => void;
}

export const KuisSection: React.FC<KuisSectionProps> = ({
  onQuizCompleted,
  bestScore,
  onNavigateTab,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    return {
      correct,
      incorrect: totalQuestions - correct,
      score: Math.round((correct / totalQuestions) * 100),
    };
  };

  const handleSubmitQuiz = () => {
    const { score } = calculateScore();
    setIsSubmitted(true);
    onQuizCompleted(score);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const { correct, incorrect, score } = calculateScore();

  const getPredicate = (s: number) => {
    if (s >= 90) return { title: 'Sangat Memuaskan (A)', color: 'text-emerald-400', desc: 'Pemahamanmu mengenai Sistem Komputer sudah sangat mendalam dan siap menghadapi asesmen sekolah!' };
    if (s >= 75) return { title: 'Baik (B)', color: 'text-cyan-400', desc: 'Kamu telah memahami sebagian besar konsep perangkat keras, lunak, dan siklus IPOS dengan baik.' };
    if (s >= 60) return { title: 'Cukup (C)', color: 'text-amber-400', desc: 'Cukup baik, tetapi disarankan mengulang kembali membaca Modul Hardware dan Perangkat Lunak.' };
    return { title: 'Perlu Pengulangan (D)', color: 'text-rose-400', desc: 'Jangan berkecil hati! Buka kembali modul pembelajaran lalu ulangi kuis ini untuk meningkatkan nilaimu.' };
  };

  const predicate = getPredicate(score);

  return (
    <section id="kuis" className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-1">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Evaluasi Pembelajaran Siswa</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Kuis Sistem Komputer (10 Soal)
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl">
          Uji pemahamanmu tentang arsitektur komputer, CPU, memori, klasifikasi software, brainware, dan siklus IPOS.
        </p>
      </div>

      {/* When Quiz is In Progress */}
      {!isSubmitted && (
        <div className="bg-[#081224] border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          
          {/* Top Status & Question Navigator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Topik: {currentQ.topic}
              </span>
              <div className="text-sm font-semibold text-slate-300 mt-0.5">
                Soal Nomor <span className="text-white text-base font-bold tabular-nums">{currentQuestionIndex + 1}</span> dari <span className="tabular-nums">{totalQuestions}</span>
              </div>
            </div>

            {/* Answered progress */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                Terjawab: <strong className="text-cyan-400 font-mono tabular-nums">{answeredCount}/{totalQuestions}</strong>
              </span>
              {bestScore !== null && (
                <span className="text-xs text-slate-400 hidden sm:inline pl-3 border-l border-slate-800">
                  Skor Tertinggi: <strong className="text-emerald-400 font-mono tabular-nums">{bestScore}</strong>
                </span>
              )}
            </div>
          </div>

          {/* Question Number Pills */}
          <div className="flex flex-wrap gap-2 my-6">
            {QUIZ_QUESTIONS.map((_, idx) => {
              const isAnswered = selectedAnswers[idx] !== undefined;
              const isCurrent = idx === currentQuestionIndex;

              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-cyan-500 text-slate-950 ring-2 ring-cyan-400/50'
                      : isAnswered
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Question Body */}
          <div className="my-6">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-relaxed">
              {currentQ.question}
            </h3>

            {/* Options list */}
            <div className="mt-6 space-y-3">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                const optionLetter = ['A', 'B', 'C', 'D'][optIdx];

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 group ${
                      isSelected
                        ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-md shadow-cyan-950/40'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'
                    }`}>
                      {optionLetter}
                    </span>
                    <span className="text-xs sm:text-sm pt-0.5 leading-relaxed">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-900 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Sebelumnya</span>
            </button>

            <div className="flex items-center gap-2">
              {currentQuestionIndex < totalQuestions - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold rounded-lg text-xs transition-colors shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Selesaikan & Lihat Nilai</span>
                </button>
              )}
            </div>
          </div>

        </div>
      )}

      {/* When Quiz is Submitted: Result & Review Mode */}
      {isSubmitted && (
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Score Header Card */}
          <div className="bg-[#081224] border border-cyan-800/60 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl">
            <div className="max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                  Hasil Evaluasi Kuis
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono mt-1 tabular-nums">
                  {score}<span className="text-2xl text-slate-400 font-sans"> / 100</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className={`text-base font-bold ${predicate.color} block`}>
                  {predicate.title}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {predicate.desc}
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-3 text-center pt-2">
                <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                  <span className="text-xs text-slate-400 block">Total Soal</span>
                  <span className="text-lg font-bold text-white font-mono">{totalQuestions}</span>
                </div>
                <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/40">
                  <span className="text-xs text-emerald-400 block">Benar</span>
                  <span className="text-lg font-bold text-emerald-400 font-mono">{correct}</span>
                </div>
                <div className="p-3 bg-rose-950/30 rounded-lg border border-rose-800/40">
                  <span className="text-xs text-rose-400 block">Salah</span>
                  <span className="text-lg font-bold text-rose-400 font-mono">{incorrect}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Kuis Sekarang</span>
                </button>
                <button
                  onClick={() => onNavigateTab('rangkuman')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-medium transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Lihat Rangkuman Materi</span>
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Question Review & Pembahasan */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Pembahasan Lengkap 10 Soal
              </h3>
              <span className="text-xs text-slate-400">
                Kunci Jawaban & Penjelasan Ilmiah
              </span>
            </div>

            <div className="space-y-4">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctIndex;
                const optionLetters = ['A', 'B', 'C', 'D'];

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      isCorrect
                        ? 'bg-slate-900/50 border-emerald-800/40'
                        : 'bg-slate-900/50 border-rose-800/40'
                    }`}
                  >
                    {/* Soal Header */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-slate-800 text-xs font-bold flex items-center justify-center text-white">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-medium text-cyan-400">
                          {q.topic}
                        </span>
                      </div>
                      
                      {isCorrect ? (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Jawaban Benar (+10)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-md border border-rose-800/60">
                          <XCircle className="w-3.5 h-3.5" />
                          Jawaban Kurang Tepat
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-semibold text-white mt-1">
                      {q.question}
                    </h4>

                    {/* Options list status */}
                    <div className="mt-4 space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isThisUserChoice = userChoice === optIdx;
                        const isThisCorrect = optIdx === q.correctIndex;

                        let optClass = 'bg-slate-950/40 border-slate-800/70 text-slate-400';
                        if (isThisCorrect) {
                          optClass = 'bg-emerald-950/40 border-emerald-600/60 text-emerald-200 font-medium';
                        } else if (isThisUserChoice && !isCorrect) {
                          optClass = 'bg-rose-950/40 border-rose-600/60 text-rose-200';
                        }

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${optClass}`}
                          >
                            <span className="font-bold shrink-0">{optionLetters[optIdx]}.</span>
                            <span className="flex-1">{opt}</span>
                            {isThisCorrect && (
                              <span className="text-[10px] text-emerald-400 font-bold uppercase shrink-0">
                                Kunci Benar
                              </span>
                            )}
                            {isThisUserChoice && !isThisCorrect && (
                              <span className="text-[10px] text-rose-400 font-bold uppercase shrink-0">
                                Pilihan Kamu
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Pembahasan Box */}
                    <div className="mt-4 p-4 rounded-xl bg-[#050b14] border border-cyan-900/40 text-xs">
                      <span className="font-bold text-cyan-400 block mb-1">
                        Pembahasan Edukatif:
                      </span>
                      <p className="text-slate-300 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom retry button */}
            <div className="pt-6 text-center">
              <button
                onClick={handleResetQuiz}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Ulangi Kuis untuk Skor Sempurna
              </button>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
