import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import questionsJson from '../data/questions.json';
import type { Answer, QuestionData } from '../types';
import {
  Eyebrow, HelperText, MutedText, NextButton, Panel, PrimaryButton,
  ProgressFill, ProgressTrack, QuestionCounter, QuizFooter, QuizTopline,
  ResultIcon, ResultPercent, ResultScore, ResultsPanel, ResultTitle, ResultTotal
} from '../styles';

const questions: QuestionData[] = questionsJson;

export default function Quiz() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  function handleAnswer(answerIndex: number) {
    setAnswers(previous => {
      const next = [...previous];
      next[currentIndex] = answerIndex;
      return next;
    });
  }

  function handleNext() {
    if (answers[currentIndex] == null) return;
    setCurrentIndex(previous => previous + 1);
  }

  function handleRestart() {
    navigate('/');
  }

  const finished = currentIndex >= questions.length;
  const correct = answers.filter((answer, index) => answer === questions[index]?.correctAnswer).length;
  const percentage = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;

  if (finished) {
    return (
      <ResultsPanel aria-live="polite">
        <Eyebrow>TEST FINALIZADO</Eyebrow>
        <ResultIcon aria-hidden="true">★</ResultIcon>
        <ResultTitle>¡Has terminado!</ResultTitle>
        <MutedText>Este es tu resultado en el cuestionario.</MutedText>
        <ResultScore>{correct}<ResultTotal> / {questions.length}</ResultTotal></ResultScore>
        <ResultPercent>{percentage}% de respuestas correctas</ResultPercent>
        <PrimaryButton onClick={handleRestart}>Volver a empezar ↻</PrimaryButton>
      </ResultsPanel>
    );
  }

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[currentIndex] ?? null;
  const isLastQuestion = currentIndex === questions.length - 1;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <Panel>
      <QuizTopline>
        <Eyebrow>CUESTIONARIO</Eyebrow>
        <QuestionCounter>Pregunta {currentIndex + 1} de {questions.length}</QuestionCounter>
      </QuizTopline>
      <ProgressTrack role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemin={0} aria-valuemax={questions.length}>
        <ProgressFill percentage={progress} />
      </ProgressTrack>
      <Question question={currentQuestion} selectedAnswer={selectedAnswer} onAnswer={handleAnswer} />
      <QuizFooter>
        <HelperText>Selecciona una respuesta para continuar.</HelperText>
        <NextButton disabled={selectedAnswer === null} onClick={handleNext}>
          {isLastQuestion ? 'Ver resultados' : 'Siguiente pregunta'} <span aria-hidden="true">→</span>
        </NextButton>
      </QuizFooter>
    </Panel>
  );
}
