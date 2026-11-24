export interface QuestionData {
  id: number | string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export type Answer = number | null;
