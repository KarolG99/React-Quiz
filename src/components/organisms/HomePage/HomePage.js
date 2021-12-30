import Header from "../../molecules/Header/Header"
import QuizList from "../../molecules/QuizList/QuizList"
import { Wrapper } from "./HomePage.styles"

const HomePage = () => {
    return (
        <Wrapper>
            <Header />
            <QuizList />
        </Wrapper>
    )
}

export default HomePage
