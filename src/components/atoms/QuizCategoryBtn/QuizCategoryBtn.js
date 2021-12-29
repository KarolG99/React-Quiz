import { QuizBtn } from "./QuizCategoryBtn.styles";

const QuizCategoryBtn = ({ text }) => {
  return (
    <QuizBtn>
      <span>{text}</span>
    </QuizBtn>
  );
};

export default QuizCategoryBtn;
