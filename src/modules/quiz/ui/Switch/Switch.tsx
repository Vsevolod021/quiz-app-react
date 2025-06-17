import Button from '../../../../shared/ui/Button/Button';

interface SwitchProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  index: number;
}

function Switch({ index, length, setIndex }: SwitchProps) {
  const handleNext = () => {
    if (index < length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Button onClick={handlePrev}>Предыдущий вопрос</Button>
      <Button onClick={handleNext}>Следующий вопрос</Button>
    </div>
  );
}

export default Switch;
