import {
  AnswerBtnWrapper,
  AnswerNumber,
  QuizSection,
  QuizWrapper,
  StyledLink,
  StyledShowScore,
} from "./CybersecurityQuiz.styles";
import { useState } from "react";
import { cybersecurity } from "../../../data/QuestionsAndAnswers";
import { StyledAnswerButton } from "../../atoms/AnswerButton/AnswerButton";


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
    <>

      <QuizWrapper>
      <StyledLink to="/">{"< cofnij"}</StyledLink>

        <QuizSection>
          {showScore ? (
            <StyledShowScore>
              {score ? (
                <span>Zdobyłeś {score} z {cybersecurity.length} punktów!</span>
              ) : (
                <span>Tym razem się nie udało, może następnym razem!</span>
              )}
            </StyledShowScore>
          ) : (
            <div>
              <AnswerNumber>
              Pytanie {currentQuestion + 1}/<span>{cybersecurity.length}</span>
              </AnswerNumber>
              <p>{cybersecurity[currentQuestion].questionText}</p>
              <AnswerBtnWrapper>
                {cybersecurity[currentQuestion].answerOption.map((answerOption) => (
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

export default CybersecurityQuiz;
