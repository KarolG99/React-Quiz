import styled from "styled-components";

export const StyledAnswerButton = styled.button`
  padding: 8px 8px;
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 10px;
  box-shadow: 0px 5px 0px 0px ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 600;
  cursor: pointer;
  font-size: ${({theme }) => theme.fontSize.s};

  &:active {
    box-shadow: none;
    transform: translateY(5px);
  }
`;
