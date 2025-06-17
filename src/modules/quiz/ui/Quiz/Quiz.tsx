import { useQuestionsList } from '../../lib/hooks/useQuestionsList';
import { useState } from 'react';

import Question from '../Question/Question';
import Switch from '../Switch/Switch';

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const { questionsList, pending } = useQuestionsList();

  if (pending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Question question={questionsList[currentQuestionIndex]} />

      <Switch
        setIndex={setCurrentQuestionIndex}
        length={questionsList.length}
        index={currentQuestionIndex}
      />
    </div>
  );
}
