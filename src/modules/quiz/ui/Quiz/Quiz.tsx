import { useAppSelector } from 'src/shared/model/store';

import { useQuestionsList } from '../../lib/hooks/useQuestionsList';
import Question from '../Question/Question';
import Switch from '../Switch/Switch';

export function Quiz() {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex);
  const { questionsList, status } = useQuestionsList();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load questions</div>;
  }

  return (
    <div>
      {questionsList.length !== 0 && <Question question={questionsList[currentQuestionIndex]} />}

      <Switch />
    </div>
  );
}
