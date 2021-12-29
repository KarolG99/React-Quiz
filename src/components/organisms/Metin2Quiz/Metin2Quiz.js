import {
  AnswerBtnWrapper,
  AnswerNumber,
  QuizSection,
  QuizWrapper,
  StyledLink,
  StyledShowScore,
} from "../CybersecurityQuiz/CybersecurityQuiz.styles";
import { useState } from "react";
import {
  metin2,
  metin2Answers,
} from "../../../data/QuestionsAndAnswers";
import { StyledAnswerButton } from "../../atoms/AnswerButton/AnswerButton";
import Scores from "../../atoms/Scores/Scores";
import CybersecurityCorrectAnswers from "../CybersecurityQuiz/CybersecurityCorrectAnswers";


const Metin2Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < metin2.length - 1) {
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
                  <Scores score={score} length={metin2.length} />
                  <CybersecurityCorrectAnswers
                    correctAnswer={metin2Answers}
                  />
                </>
              ) : (
                <>
                  <span>Tym razem się nie udało, może następnym razem!</span>
                  <CybersecurityCorrectAnswers
                    correctAnswer={metin2Answers}
                  />
                </>
              )}
            </StyledShowScore>
          ) : (
            <div>
              <AnswerNumber>
                Pytanie {currentQuestion + 1}/
                <span>{metin2.length}</span>
              </AnswerNumber>
              <p>{metin2[currentQuestion].questionText}</p>
              <AnswerBtnWrapper>
                {metin2[currentQuestion].answerOption.map(
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
              </AnswerBtnWrapper>
            </div>
          )}
        </QuizSection>
      </QuizWrapper>
    </>
  );
};

export default Metin2Quiz;
