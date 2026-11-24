import apiQuestions from '../data/questions-api.json';
import type { QuestionData } from '../types';

const DELAY_MS = 900;

interface FetchQuestionsOptions {
  shouldFail?: boolean;
}

export function fetchQuestions({ shouldFail = false }: FetchQuestionsOptions = {}): Promise<QuestionData[]> {
  return new Promise<QuestionData[]>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('No se pudieron obtener las preguntas. Inténtalo de nuevo.'));
        return;
      }
      resolve(apiQuestions.map((question) => ({
        ...question,
        options: [...question.options],
      })));
    }, DELAY_MS);
  });
}
