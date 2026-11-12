import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizData';
import { QuizQuestion, PageType } from '../types';
import confetti from 'canvas-confetti';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Shuffle,
  Award,
  ChevronRight,
  BookOpen,
  ArrowRight,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface QuizViewProps {
  onNavigate: (page: PageType, chapterId?: number) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onNavigate }) => {
  // Current active questions set (can be shuffled)
  const [questions, setQuestions] = useState<QuizQuestion[]>(quizQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showInstantFeedback, setShowInstantFeedback] = useState(true);

  const currentQ = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  // Shuffle helper
  const handleShuffle = () => {
    const shuffled = [...quizQuestions]
      .map((q) => ({ q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ q }) => q);
    setQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const handleReset = () => {
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Calculate score
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scorePct = (correctCount / totalQuestions) * 100;
    if (scorePct >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  // Score computation
  const correctCount = questions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  const getGradeAssessment = (score: number) => {
    if (score >= 90) return { grade: 'A', label: 'Luar Biasa!', text: 'Pemahaman materi Sistem Komputer Anda sangat mendalam dan siap untuk ujian sekolah.' };
    if (score >= 80) return { grade: 'B+', label: 'Sangat Baik!', text: 'Anda menguasai sebagian besar konsep hardware, software, brainware, dan IPOS.' };
    if (score >= 70) return { grade: 'B', label: 'Baik!', text: 'Telah mencapai KKM (Kriteria Ketercapaian Tujuan Pembelajaran). Pertahankan!' };
    if (score >= 50) return { grade: 'C', label: 'Cukup', text: 'Perlu membaca kembali beberapa bab terkait komponen hardware dan alur kerja IPOS.' };
    return { grade: 'D', label: 'Perlu Belajar Lagi', text: 'Silakan baca ulang materi bab 1 sampai bab 7 lalu ulangi kuis ini untuk hasil maksimal.' };
  };

  const currentSelection = selectedAnswers[currentQuestionIndex];
  const hasAnsweredCurrent = currentSelection !== undefined;
  const isCurrentCorrect = hasAnsweredCurrent && currentSelection === currentQ.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 border-b border-slate-200 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#101B32] bg-cyan-100/60 px-3 py-1 rounded-md mb-2">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-700" />
          <span>Evaluasi Pemahaman Siswa Kelas 10 SMA</span>
        </div>
        <h1 className="text-3xl font-extrabold text-[#101B32] tracking-tight">
          Kuis Interaktif Sistem Komputer
        </h1>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Uji pemahaman Anda melalui 10 soal pilihan ganda seputar hardware, software, brainware, siklus IPOS, dan sejarah komputer.
        </p>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-3 pt-3">
          <button
            onClick={handleShuffle}
            className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
          >
            <Shuffle className="w-3.5 h-3.5 text-slate-500" />
            <span>Acak Soal</span>
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
            <span>Ulangi dari Awal</span>
          </button>
        </div>
      </div>

      {/* Quiz Progress & Question Tracker */}
      {!isSubmitted && (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>
              Soal <strong className="text-slate-900 font-bold">{currentQuestionIndex + 1}</strong> dari{' '}
              <strong className="text-slate-900 font-bold">{totalQuestions}</strong>
            </span>
            <span className="font-mono text-slate-700">
              Terjawab: {answeredCount} / {totalQuestions}
            </span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-[#36C5F0] h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Quick jump nodes */}
          <div className="flex items-center justify-center gap-1.5 pt-1 overflow-x-auto">
            {questions.map((_, idx) => {
              const isAns = selectedAnswers[idx] !== undefined;
              const isCurr = currentQuestionIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`w-7 h-7 rounded-md text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                    isCurr
                      ? 'bg-[#101B32] text-white ring-2 ring-[#36C5F0]'
                      : isAns
                      ? 'bg-cyan-100 text-[#101B32] border border-[#36C5F0]/40'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* When Quiz is Submitted: Result Summary Card */}
      {isSubmitted && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center mx-auto text-[#101B32]">
            <Award className="w-10 h-10 text-cyan-600" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Hasil Evaluasi Kuis Anda
            </span>
            <div className="text-5xl font-extrabold text-[#101B32] tracking-tight">
              {scorePercent}
              <span className="text-2xl text-slate-400 font-normal"> / 100</span>
            </div>
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 font-bold text-sm rounded-md">
              Predikat: {getGradeAssessment(scorePercent).grade} · {getGradeAssessment(scorePercent).label}
            </div>
            <p className="text-sm text-slate-600 max-w-md mx-auto pt-1">
              {getGradeAssessment(scorePercent).text}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto text-left text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-500 block">Jawaban Benar:</span>
              <strong className="text-emerald-700 text-base font-bold">{correctCount} Soal</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Jawaban Salah:</span>
              <strong className="text-rose-700 text-base font-bold">{totalQuestions - correctCount} Soal</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="px-5 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis Ini</span>
            </button>
            <button
              onClick={() => onNavigate('materi')}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#101B32] hover:bg-slate-800 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#36C5F0]" />
              <span>Kembali Pelajari Materi</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Question Card (Active mode) */}
      {!isSubmitted && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          {/* Question Title & Ref */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-[#101B32]">
                SOAL #{currentQuestionIndex + 1}
              </span>
              <span className="text-slate-500 text-[11px] bg-slate-100 px-2 py-0.5 rounded">
                Ref: {currentQ.chapterRef}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, optIdx) => {
              const isSelected = currentSelection === optIdx;
              const isOptionCorrect = optIdx === currentQ.correctAnswer;
              const showResult = hasAnsweredCurrent && showInstantFeedback;

              let optionClasses = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';
              if (isSelected && !showResult) {
                optionClasses = 'border-[#36C5F0] bg-cyan-50/50 text-[#101B32] font-semibold';
              } else if (showResult) {
                if (isOptionCorrect) {
                  optionClasses = 'border-emerald-400 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                } else if (isSelected && !isOptionCorrect) {
                  optionClasses = 'border-rose-300 bg-rose-50 text-rose-950';
                } else {
                  optionClasses = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-70';
                }
              }

              const optionLetters = ['A', 'B', 'C', 'D'];

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={hasAnsweredCurrent && showInstantFeedback}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3.5 cursor-pointer ${optionClasses}`}
                >
                  <span
                    className={`w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-[#101B32] text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="flex-1 leading-relaxed">{option}</span>

                  {showResult && isOptionCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  {showResult && isSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Explanation Feedback Box */}
          {hasAnsweredCurrent && showInstantFeedback && (
            <div
              className={`p-5 rounded-xl border space-y-2 text-xs leading-relaxed ${
                isCurrentCorrect
                  ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50/90 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {isCurrentCorrect ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Jawaban Anda Benar!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>Jawaban Anda Kurang Tepat</span>
                  </>
                )}
              </div>
              <p className="text-slate-700">{currentQ.explanation}</p>
            </div>
          )}

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                currentQuestionIndex === 0
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              ← Soal Sebelumnya
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#101B32] hover:bg-slate-800 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Soal Berikutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitQuiz}
                disabled={answeredCount < totalQuestions}
                className={`px-5 py-2 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
                  answeredCount === totalQuestions
                    ? 'text-[#101B32] bg-[#36C5F0] hover:bg-[#36C5F0]/90 shadow-xs'
                    : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                }`}
              >
                <span>Selesaikan Kuis</span>
                <Award className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Review Section (Shown after Quiz Submission) */}
      {isSubmitted && (
        <div className="space-y-6 pt-6">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-xl font-bold text-[#101B32]">
              Pembahasan Lengkap Semua Soal (Review)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Periksa kembali kunci jawaban dan analisis pembahasan untuk memperkaya materi belajar Anda.
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((q, idx) => {
              const chosen = selectedAnswers[idx];
              const isCorrect = chosen === q.correctAnswer;
              const optionLetters = ['A', 'B', 'C', 'D'];

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-xl p-6 border transition-all ${
                    isCorrect ? 'border-emerald-200' : 'border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-bold text-slate-900">Soal {idx + 1}</span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? '✓ Jawaban Anda Benar' : '✕ Jawaban Anda Salah'}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 mb-3">
                    {q.question}
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block mb-0.5">Pilihan Anda:</span>
                      <span className={isCorrect ? 'text-emerald-700 font-semibold' : 'text-rose-700 font-semibold'}>
                        {chosen !== undefined ? `${optionLetters[chosen]}. ${q.options[chosen]}` : 'Tidak dijawab'}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
                        <span className="text-emerald-800 font-semibold block mb-0.5">Kunci Jawaban Benar:</span>
                        <span className="text-emerald-900 font-semibold">
                          {optionLetters[q.correctAnswer]}. {q.options[q.correctAnswer]}
                        </span>
                      </div>
                    )}

                    <div className="p-3 bg-cyan-50/50 rounded-lg border border-cyan-100 text-slate-700 mt-2">
                      <strong className="text-[#101B32] block mb-1">Pembahasan:</strong>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
