import {
  AnswerBtnWrapper,
  AnswerNumber,
  QuizSection,
  QuizWrapper,
  StyledLink,
  StyledShowScore,
} from "../CybersecurityQuiz/CybersecurityQuiz.styles";
import { useState } from "react";
import { cooking, cookingAnswers } from "../../../data/QuestionsAndAnswers";
import { StyledAnswerButton } from "../../atoms/AnswerButton/AnswerButton";
import Scores from "../../atoms/Scores/Scores";
import CybersecurityCorrectAnswers from "../CybersecurityQuiz/CybersecurityCorrectAnswers";

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
      <QuizWrapper>
        <StyledLink to="/">{"< cofnij"}</StyledLink>

        <QuizSection>
          {showScore ? (
            <StyledShowScore>
              {score ? (
                <>
                  <Scores score={score} length={cooking.length} />
                  <CybersecurityCorrectAnswers correctAnswer={cookingAnswers} />
                </>
              ) : (
                <>
                  <span>Tym razem się nie udało, może następnym razem!</span>
                  <CybersecurityCorrectAnswers correctAnswer={cookingAnswers} />
                </>
              )}
            </StyledShowScore>
          ) : (
            <div>
              <AnswerNumber>
                Pytanie {currentQuestion + 1}/<span>{cooking.length}</span>
              </AnswerNumber>
              <p>{cooking[currentQuestion].questionText}</p>
              <AnswerBtnWrapper>
                {cooking[currentQuestion].answerOption.map((answerOption) => (
                  <StyledAnswerButton
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    <span>{answerOption.answerText}</span>
                  </StyledAnswerButton>
                ))}
              </AnswerBtnWrapper>
            </div>
          )}
        </QuizSection>
      </QuizWrapper>
    </>
  );
};

export default CookingQuiz;