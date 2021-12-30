import styled from "styled-components";

import { ShowAnimation } from "../../organisms/CybersecurityQuiz/CybersecurityQuiz.styles";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bgGray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  animation: ${ShowAnimation} 1.4s linear;


  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 100vw;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1251px) {
    padding-bottom: 150px;
  }
`;

export const TextWrapperHeader = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 80%;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 10px;
  }
`;

export const ImageWrapperHeader = styled.div`
`;
