import { useAppDispatch, useAppSelector } from 'src/shared/model/store';
import { useEffect } from 'react';

import { loadQuizQuestions } from '../../model/slice';

export function useQuestionsList() {
  const dispatch = useAppDispatch();

  const status = useAppSelector((state) => state.quiz.status);
  const questionsList = useAppSelector((state) => state.quiz.questions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadQuizQuestions());
    }
  }, [dispatch, status]);

  return { questionsList, status };
}
