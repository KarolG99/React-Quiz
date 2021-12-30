import {
  StyledQuizSection,
  StyledQuizWrapper,
  StyledLink,
  StyledShowScore,
} from "../CybersecurityQuiz/CybersecurityQuiz.styles";
import { useState } from "react";
import { cooking, cookingAnswers } from "../../../data/QuestionsAndAnswers";
import Scores from "../../atoms/Scores/Scores";
import ShowCorrectAnswers from "../CybersecurityQuiz/ShowCorrectAnswers";
import ShowQuestions from '../../molecules/ShowQuestions/ShowQuestions';

const CookingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < cooking.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <StyledQuizWrapper>
        <StyledLink to="/">{"< cofnij"}</StyledLink>

        <StyledQuizSection>
          {showScore ? (
            <StyledShowScore>
              {score ? (
                <div>
                  <Scores score={score} length={cooking.length} />
                  <ShowCorrectAnswers correctAnswer={cookingAnswers} />
                </div>
              ) : (
                <div>
                  <span>Tym razem się nie udało, może następnym razem!</span>
                  <ShowCorrectAnswers correctAnswer={cookingAnswers} />
                </div>
              )}
            </StyledShowScore>
          ) : (
            <ShowQuestions category={cooking} currentQuestion={currentQuestion} handleAnswerButtonClick={handleAnswerButtonClick} />

          )}
        </StyledQuizSection>
      </StyledQuizWrapper>
    </>
  );
};

export default CookingQuiz;
