import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom';

import ResultPage from '../pages/ResultPage';
import HomePage from '../pages/HomePage';
import QuizPage from '../pages/QuizPage';
import App from './App';

const Result: RouteObject = { path: 'result', element: <ResultPage /> };
const Quiz: RouteObject = { path: 'quiz', element: <QuizPage /> };
const Home: RouteObject = { index: true, element: <HomePage /> };

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to="/" />,
    children: [Home, Quiz, Result]
  }
];

export const router = createBrowserRouter(routes);
