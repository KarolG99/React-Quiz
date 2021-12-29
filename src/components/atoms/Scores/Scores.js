import { TotalScores } from "./Scores.styles"

const Scores = ({score, length}) => {
    return (
        <TotalScores>
            Zdobyłeś {score} z {length} punktów!
        </TotalScores>
    )
}

export default Scores
