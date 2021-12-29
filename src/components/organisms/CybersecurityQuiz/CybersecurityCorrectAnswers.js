import { AnswersHeader, CorrectQuestionNumber } from "./CybersecurityQuiz.styles";

const CybersecurityCorrectAnswers = ({correctAnswer}) => {
  return (
    <>
    <br />
    <br />
      <AnswersHeader>Odpowiedzi:</AnswersHeader>
      {correctAnswer.map((answers, i) => (
        <p key={answers.correctAnswer}>
          <CorrectQuestionNumber>Pytanie {i + 1}: </CorrectQuestionNumber>
          {answers.correctAnswer}
        </p>
      ))}
    </>
  );
};

export default CybersecurityCorrectAnswers;
