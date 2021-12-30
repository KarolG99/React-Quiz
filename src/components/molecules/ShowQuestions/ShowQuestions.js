import { StyledAnswerBtnWrapper, StyledAnswerNumber  } from "../../organisms/CybersecurityQuiz/CybersecurityQuiz.styles"
import { StyledAnswerButton } from "../../atoms/AnswerButton/AnswerButton"
import PropTypes from 'prop-types';

const ShowQuestions = ({currentQuestion, category, handleAnswerButtonClick}) => {
    return (
        <div>
            <StyledAnswerNumber>
                Pytanie {currentQuestion + 1}/
                <span>{category.length}</span>
              </StyledAnswerNumber>
              <p>{category[currentQuestion].questionText}</p>
              <StyledAnswerBtnWrapper>
                {category[currentQuestion].answerOption.map(
                  (answerOption) => (
                    <StyledAnswerButton
                    key={answerOption.answerText}
                      onClick={() =>
                        handleAnswerButtonClick(answerOption.isCorrect)
                      }
                    >
                      <span>{answerOption.answerText}</span>
                    </StyledAnswerButton>
                  )
                )}
              </StyledAnswerBtnWrapper>
        </div>
    )
}

ShowQuestions.propTypes = {
  currentQuestion: PropTypes.number,
  category: PropTypes.array,
  handleAnswerButtonClick: PropTypes.func,
}

export default ShowQuestions
