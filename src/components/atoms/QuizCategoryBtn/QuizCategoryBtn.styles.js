import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
margin: 5vh 3vw;
`;

export const QuizBtn = styled.button`
  width: 60vw;
  /* margin: 5vh 3vw; */
  border: 3px solid ${({ theme }) => theme.colors.yellow};
  background-color: transparent;
  padding: 10px 0;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  cursor: pointer;

  position: relative;
  overflow: hidden;
  transition: color 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);

  span {
    z-index: 3;
    position: relative;
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.yellow};
    left: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.4s cubic-bezier(0.61, 0.07, 0.23, 0.89);
    z-index: 1;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media screen and (min-width: 560px) {
    width: 40vw;
  }

  @media screen and (min-width: 900px) {
    width: 25vw;
  }
`;
