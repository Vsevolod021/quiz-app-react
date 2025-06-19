import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { fetchQuizQuestions } from '../api/quizApi';
import type { QuestionDto } from './types';

export type QuizState = {
  questions: QuestionDto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  currentQuestionIndex: number;
  selectedAnswers: number[];
};

const initialState: QuizState = {
  questions: [],
  status: 'idle',
  error: null,
  currentQuestionIndex: 0,
  selectedAnswers: []
};

export const loadQuizQuestions = createAsyncThunk('quiz/loadQuestions', async () => {
  const response = await fetchQuizQuestions();
  return response;
});

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: initialState,
  reducers: {
    selectAnswer: (
      state,
      action: PayloadAction<{ questionIndex: number; answerIndex: number }>
    ) => {
      const { questionIndex, answerIndex } = action.payload;
      state.selectedAnswers[questionIndex] = answerIndex;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadQuizQuestions.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadQuizQuestions.fulfilled, (state, action: PayloadAction<QuestionDto[]>) => {
        state.questions = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadQuizQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  }
});

export const { selectAnswer, nextQuestion, prevQuestion } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;
