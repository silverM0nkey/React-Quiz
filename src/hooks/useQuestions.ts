import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchQuestions } from '../services/mockQuestionsApi';
import type { QuestionData } from '../types';

interface UseQuestionsOptions {
  simulateError?: boolean;
}

interface UseQuestionsResult {
  data: QuestionData[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useQuestions({ simulateError = false }: UseQuestionsOptions = {}): UseQuestionsResult {
  const [data, setData] = useState<QuestionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const requestId = useRef(0);

  const refetch = useCallback(async (): Promise<void> => {
    const id = ++requestId.current;
    setLoading(true);
    setError(null);

    try {
      const questions = await fetchQuestions({ shouldFail: simulateError });
      if (id === requestId.current) setData(questions);
    } catch (err: unknown) {
      if (id === requestId.current) {
        setData([]);
        setError(err instanceof Error ? err : new Error('Error inesperado'));
      }
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  }, [simulateError]);

  useEffect(() => {
    void refetch();
    return () => { requestId.current += 1; };
  }, [refetch]);

  return { data, loading, error, refetch };
}
