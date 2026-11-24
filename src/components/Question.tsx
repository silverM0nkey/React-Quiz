import type { QuestionData } from '../types';
import { CategoryTag, OptionButton, OptionCheck, OptionLetter, Options, QuestionHeading } from '../styles';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

interface QuestionProps {
  question: QuestionData;
  selectedAnswer: number | null;
  onAnswer: (answerIndex: number) => void;
}

export default function Question({ question, selectedAnswer, onAnswer }: QuestionProps) {
  return (
    <div>
      <CategoryTag>{question.category}</CategoryTag>
      <QuestionHeading>{question.question}</QuestionHeading>
      <Options role="group" aria-label="Opciones de respuesta">
        {question.options.map((option, index) => {
          const selected = selectedAnswer === index;
          return (
            <OptionButton
              type="button"
              selected={selected}
              onClick={() => onAnswer(index)}
              aria-pressed={selected}
              key={`${question.id}-${index}`}
            >
              <OptionLetter selected={selected}>{LETTERS[index] ?? index + 1}</OptionLetter>
              <span>{option}</span>
              {selected && <OptionCheck aria-hidden="true">✓</OptionCheck>}
            </OptionButton>
          );
        })}
      </Options>
    </div>
  );
}
