import {
  AnswerBtnWrapper,
  AnswerNumber,
  QuizSection,
  QuizWrapper,
  StyledLink,
  StyledShowScore,
} from "../CybersecurityQuiz/CybersecurityQuiz.styles";
import { useState } from "react";
import { apple, appleAnswers } from "../../../data/QuestionsAndAnswers";
import { StyledAnswerButton } from "../../atoms/AnswerButton/AnswerButton";
import Scores from "../../atoms/Scores/Scores";
import CybersecurityCorrectAnswers from "../CybersecurityQuiz/CybersecurityCorrectAnswers";

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
      <QuizWrapper>
        <StyledLink to="/">{"< cofnij"}</StyledLink>

        <QuizSection>
          {showScore ? (
            <StyledShowScore>
              {score ? (
                <>
                  <Scores score={score} length={apple.length} />
                  <CybersecurityCorrectAnswers correctAnswer={appleAnswers} />
                </>
              ) : (
                <>
                  <span>Tym razem się nie udało, może następnym razem!</span>
                  <CybersecurityCorrectAnswers correctAnswer={appleAnswers} />
                </>
              )}
            </StyledShowScore>
          ) : (
            <div>
              <AnswerNumber>
                Pytanie {currentQuestion + 1}/<span>{apple.length}</span>
              </AnswerNumber>
              <p>{apple[currentQuestion].questionText}</p>
              <AnswerBtnWrapper>
                {apple[currentQuestion].answerOption.map((answerOption) => (
                  <StyledAnswerButton
                    key={answerOption.answerText}
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

export default AppleQuiz;
