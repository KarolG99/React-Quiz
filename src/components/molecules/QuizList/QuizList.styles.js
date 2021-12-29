import styled from "styled-components";

export const QuizListWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 0;
    margin: 0;
    margin: auto;
    position: relative;

    svg {
        position: absolute;
        bottom: 100%;
    }
`;

export const TextWrapperQuizList = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const QuizListHeader = styled.h2`
    width: fit-content;
    margin: 0 auto;
    padding: 100px 0 30px 0;
`;

export const QuizCategories = styled.div`
    display: flex;
    flex-flow: wrap row;
    align-items: center;
    /* margin: auto; */
    justify-content: center;
    width: 100vw;
`;