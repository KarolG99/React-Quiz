import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledQuizWrapper = styled.article`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const StyledQuizSection = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 90%;
  padding: 20px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  box-shadow: 0px 0px 92px -23px rgba(187, 187, 255, 1);
  margin: 30px 0;

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
