import { jsonApiInstance } from 'src/shared/api/api';

import { type QuestionDto } from '../model/types';

export const fetchQuizQuestions = async (): Promise<QuestionDto[]> => {
  try {
    return await jsonApiInstance<QuestionDto[]>('/questions');
  } catch (error) {
    console.error('Error fetching quiz questions:', error);
    return [];
  }
};
