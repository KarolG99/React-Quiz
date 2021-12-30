import styled from "styled-components";
import { SlideLeftStart } from "../CybersecurityQuiz/CybersecurityQuiz.styles";

export const Wrapper = styled.main`
    overflow-x: hidden;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(100%);
    width: 0;
    height: 0;
    background-color: ${({ theme }) => theme.colors.blue};
    animation: ${SlideLeftStart} 1s ease-in-out;
  }
`;