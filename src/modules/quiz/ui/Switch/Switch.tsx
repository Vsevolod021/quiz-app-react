import { useAppDispatch } from 'src/shared/model/store';
import Button from 'src/shared/ui/Button';
import { nextQuestion, prevQuestion } from '../../model/slice';

function Switch() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(prevQuestion())}>Предыдущий вопрос</Button>
      <Button onClick={() => dispatch(nextQuestion())}>Следующий вопрос</Button>
    </div>
  );
}

export default Switch;
