'use client';

import { useCallback, useState } from 'react';
import type { AnswerRecord, QuizResult, ReviewQuestion } from '@/types/quiz';

export type QuizPhase = 'answering' | 'reviewing' | 'complete' | 'empty';

interface UseQuizStateArgs {
  questions: ReviewQuestion[];
  onComplete: (result: QuizResult) => void;
}

interface UseQuizStateReturn {
  phase: QuizPhase;
  currentIndex: number;
  currentQuestion: ReviewQuestion | undefined;
  answers: AnswerRecord[];
  selectedOption: string | null;
  fillBlankInput: string;
  setSelectedOption: (value: string | null) => void;
  setFillBlankInput: (value: string) => void;
  getSelectedAnswer: () => string | null;
  submitAnswer: () => void;
  goNext: () => void;
}

function isAnswerCorrect(question: ReviewQuestion, answer: string): boolean {
  if (question.question_type === 'fill_blank') {
    return answer.trim().toLowerCase() === question.correct_answer.trim().toLowerCase();
  }
  return answer === question.correct_answer;
}

/**
 * Quiz 狀態機。將 UI 從狀態流轉抽出，方便：
 * - 在 unit test 直接驅動狀態，不必走 DOM
 * - QuizEngine 元件本身只負責渲染
 */
export function useQuizState({ questions, onComplete }: UseQuizStateArgs): UseQuizStateReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [fillBlankInput, setFillBlankInput] = useState('');
  const [phase, setPhase] = useState<QuizPhase>(questions.length === 0 ? 'empty' : 'answering');
  const [startTime] = useState(() => Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(() => Date.now());

  const currentQuestion = questions[currentIndex] as ReviewQuestion | undefined;

  const getSelectedAnswer = useCallback((): string | null => {
    if (!currentQuestion) return null;
    if (currentQuestion.question_type === 'fill_blank') {
      return fillBlankInput.trim() || null;
    }
    return selectedOption;
  }, [currentQuestion, fillBlankInput, selectedOption]);

  const submitAnswer = useCallback((): void => {
    if (!currentQuestion) return;
    const answer = currentQuestion.question_type === 'fill_blank'
      ? (fillBlankInput.trim() || null)
      : selectedOption;
    if (!answer) return;

    const timeSpent = Math.round((Date.now() - questionStartTime) / 1000);
    const record: AnswerRecord = {
      question_id: currentQuestion.id,
      selected_answer: answer,
      is_correct: isAnswerCorrect(currentQuestion, answer),
      time_spent_seconds: timeSpent,
    };

    setAnswers((prev) => [...prev, record]);
    setPhase('reviewing');
  }, [currentQuestion, fillBlankInput, selectedOption, questionStartTime]);

  const goNext = useCallback((): void => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= questions.length) {
      setPhase('complete');
      const correctCount = answers.filter((a) => a.is_correct).length;
      const totalTime = Math.round((Date.now() - startTime) / 1000);
      onComplete({
        session_id: `quiz-${Date.now()}`,
        node_id: questions[0]?.node_id ?? '',
        total_questions: questions.length,
        correct_count: correctCount,
        accuracy: questions.length > 0 ? correctCount / questions.length : 0,
        total_time_seconds: totalTime,
        answers,
        completed_at: new Date().toISOString(),
      });
      return;
    }

    setCurrentIndex(nextIndex);
    setSelectedOption(null);
    setFillBlankInput('');
    setQuestionStartTime(Date.now());
    setPhase('answering');
  }, [currentIndex, questions, answers, startTime, onComplete]);

  return {
    phase,
    currentIndex,
    currentQuestion,
    answers,
    selectedOption,
    fillBlankInput,
    setSelectedOption,
    setFillBlankInput,
    getSelectedAnswer,
    submitAnswer,
    goNext,
  };
}
