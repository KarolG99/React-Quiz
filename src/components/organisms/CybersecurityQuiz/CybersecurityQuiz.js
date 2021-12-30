import {
  StyledQuizSection,
  StyledQuizWrapper,
  StyledLink,
  StyledShowScore,
} from "./CybersecurityQuiz.styles";
import { useState } from "react";
import { cybersecurity, cybersecurityAnswers } from "../../../data/QuestionsAndAnswers";
import ShowCorrectAnswers from "./ShowCorrectAnswers";
import Scores from "../../atoms/Scores/Scores";
import ShowQuestions from "../../molecules/ShowQuestions/ShowQuestions";

const CybersecurityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < cybersecurity.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    // <>
      <StyledQuizWrapper>
        <StyledLink to="/">{"< cofnij"}</StyledLink>

        <StyledQuizSection>
          {showScore ? (
            <StyledShowScore>
              {score ? (
                <div>
                  <Scores score={score} length={cybersecurity.length} />
                  <ShowCorrectAnswers
                    correctAnswer={cybersecurityAnswers}
                  />
                </div>
              ) : (
                <>
                  <span>Tym razem się nie udało, może następnym razem!</span>
                  <ShowCorrectAnswers
                    correctAnswer={cybersecurityAnswers}
                  />
                </>
              )}
            </StyledShowScore>
          ) : (
            <ShowQuestions category={cybersecurity} currentQuestion={currentQuestion} handleAnswerButtonClick={handleAnswerButtonClick} />
          )}
        </StyledQuizSection>
      </StyledQuizWrapper>
    // </>
  );
};

export default CybersecurityQuiz;
