import { QuizBtn } from "./QuizCategoryBtn.styles";
import PropTypes from 'prop-types';

const QuizCategoryBtn = ({ text }) => {
  return (
    <QuizBtn>
      <span>{text}</span>
    </QuizBtn>
  );
};

QuizCategoryBtn.propTypes = {
  text: PropTypes.string,
}

export default QuizCategoryBtn;
