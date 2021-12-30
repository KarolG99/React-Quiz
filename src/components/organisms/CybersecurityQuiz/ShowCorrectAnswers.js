import { StyledAnswersHeader, StyledCorrectQuestionNumber } from "./CybersecurityQuiz.styles";

const ShowCorrectAnswers = ({correctAnswer}) => {
  return (
    <>
    <br />
    <br />
      <StyledAnswersHeader>Odpowiedzi:</StyledAnswersHeader>
      {correctAnswer.map((answers, i) => (
        <p key={answers.correctAnswer}>
          <StyledCorrectQuestionNumber>Pytanie {i + 1}: </StyledCorrectQuestionNumber>
          {answers.correctAnswer}
        </p>
      ))}
    </>
  );
};

export default ShowCorrectAnswers;
