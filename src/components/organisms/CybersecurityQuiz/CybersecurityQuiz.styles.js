import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const ShowAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
    display: block;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    display: none;
    transform: translateY(0);
  }
`;

export const SlideLeftStart = keyframes`
  0% {
    transform: translateX(100%);
    width: 100%;
    height: 200%;
  }
  25% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
    width: 100%;
    height: 200%;
  }
`;

export const StyledQuizWrapper = styled.article`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

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

export const StyledQuizSection = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 90%;
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  margin: 30px 0;
  animation: ${ShowAnimation} 1.4s linear;
  /* box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.5), 6px 6px 16px rgba(0, 102, 221, 0.5); */
  box-shadow: -18px 18px 30px rgba(209, 217, 230, 0.2), 18px -18px 30px rgba(209, 217, 230, 0.2), -18px -18px 30px rgba(255, 255, 255, 0.9), 18px 18px 30px rgba(209, 217, 230, 0.9), inset 2px 2px 4px rgba(255, 255, 255, 0.3), inset -2px -2px 2px rgba(209, 217, 230, 0.5);


  @media screen and (min-width: 768px) {
    width: fit-content;
    padding: 40px 60px;
    max-width: 90vw;
  }
`;

export const StyledShowScore = styled.div`
  padding: 10px 0;
`;

export const StyledAnswerBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
  animation: ${ShowAnimation} 1.4s linear;
  padding: 10px 15px;;

  background: ${({ theme }) => theme.colors.darkWhite};
box-shadow: -7px 7px 30px rgba(209, 217, 230, 0.5), 8px -8px 30px rgba(209, 217, 230, 0.5), -8px -8px 30px rgba(255, 255, 255, 0.9), 8px 8px 30px rgba(209, 217, 230, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.6), inset -1px -1px 2px rgba(209, 217, 230, 0.7);
border-radius: 10px;
`;

export const StyledAnswerNumber = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.fontSize.m};

  & span {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledCorrectQuestionNumber = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const StyledAnswersHeader = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.yellow};
`;
