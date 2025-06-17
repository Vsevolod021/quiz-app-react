import { useEffect, useState } from 'react';
import { fetchQuizQuestions } from '../../api/quizApi';
import type { QuestionDto } from '../../model/types';

export function useQuestionsList() {
  const [questionsList, setQuestionsList] = useState<QuestionDto[]>([]);
  const [pending, setPending] = useState<boolean>(true);

  useEffect(() => {
    fetchQuizQuestions().then((data) => {
      setQuestionsList(data);
      setPending(false);
    });
  }, []);

  return { questionsList, pending };
}
