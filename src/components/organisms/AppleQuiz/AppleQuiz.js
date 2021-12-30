import {
  StyledQuizSection,
  StyledQuizWrapper,
  StyledLink,
  StyledShowScore,
} from "../CybersecurityQuiz/CybersecurityQuiz.styles";
import { useState } from "react";
import { apple, appleAnswers } from "../../../data/QuestionsAndAnswers";
import Scores from "../../atoms/Scores/Scores";
import ShowCorrectAnswers from "../CybersecurityQuiz/ShowCorrectAnswers";
import ShowQuestions from '../../molecules/ShowQuestions/ShowQuestions';


const AppleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < apple.length - 1) {
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
                <>
                  <Scores score={score} length={apple.length} />
                  <ShowCorrectAnswers correctAnswer={appleAnswers} />
                </>
              ) : (
                <>
                  <span>Tym razem się nie udało, może następnym razem!</span>
                  <ShowCorrectAnswers correctAnswer={appleAnswers} />
                </>
              )}
            </StyledShowScore>
          ) : (
            <ShowQuestions category={apple} currentQuestion={currentQuestion} handleAnswerButtonClick={handleAnswerButtonClick} />
          )}
        </StyledQuizSection>
      </StyledQuizWrapper>
    </>
  );
};

export default AppleQuiz;
