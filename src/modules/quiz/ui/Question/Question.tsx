import type { QuestionDto } from '../../model/types';

interface QuestionProps {
  question: QuestionDto;
}

function Question({ question }: QuestionProps) {
  return (
    <div>
      <h1>{question.text}</h1>
      <div>
        {question.answers.map((answer, index) => (
          <p key={index}>{answer}</p>
        ))}
      </div>
    </div>
  );
}

export default Question;
