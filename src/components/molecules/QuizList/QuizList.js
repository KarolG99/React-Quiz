import QuizCategoryBtn from "../../atoms/QuizCategoryBtn/QuizCategoryBtn";
import {
  QuizCategories,
  QuizListHeader,
  QuizListWrapper,
  TextWrapperQuizList,
} from "./QuizList.styles";
import { StyledNavLink } from "../../atoms/QuizCategoryBtn/QuizCategoryBtn.styles";

const QuizList = () => {
  return (
    <QuizListWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,154.7C672,160,768,224,864,234.7C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <TextWrapperQuizList>
        <QuizListHeader>Wybierz kategorie quizu</QuizListHeader>

        <QuizCategories>
          <StyledNavLink to="cyberbezpieczenstwoquiz">
            <QuizCategoryBtn text="Cyberbeczpieczństwo" />
          </StyledNavLink>
          <StyledNavLink to="cookingquiz">
            <QuizCategoryBtn text="Gotowanie" />
          </StyledNavLink>
          <StyledNavLink to="metin2quiz">
            <QuizCategoryBtn text="Metin2" />
          </StyledNavLink>
          <StyledNavLink to="applequiz">
            <QuizCategoryBtn text="Apple" />
          </StyledNavLink>
        </QuizCategories>
      </TextWrapperQuizList>
    </QuizListWrapper>
  );
};

export default QuizList;
