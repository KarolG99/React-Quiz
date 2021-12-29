import {
  HeaderWrapper,
  ImageWrapperHeader,
  TextWrapperHeader,
} from "./Header.styles";
import QuizSMIcon from "../../../img/vectary-quiz-sm.png";
import QuizLGIcon from "../../../img/vectary-quiz-lg.png";

const QuizSm = QuizSMIcon;
const QuizLg = QuizLGIcon;

const Header = () => {
  return (
    <HeaderWrapper>
      <TextWrapperHeader>
        Rozwiąż quiz i sprawdź swoją wiedzę w różnych dziedzinach.
      </TextWrapperHeader>

      <ImageWrapperHeader>
        <picture>
          <source media="(max-width: 1250px)" srcSet={QuizSm} />
          <source media="(min-width: 1251px)" srcSet={QuizLg} />
          <img src={QuizLg} alt="ikonka quiz" />
        </picture>
      </ImageWrapperHeader>
    </HeaderWrapper>
  );
};

export default Header;
