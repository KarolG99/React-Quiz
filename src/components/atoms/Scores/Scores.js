import { TotalScores } from "./Scores.styles"
import PropTypes from 'prop-types';

const Scores = ({score, length}) => {
    return (
        <TotalScores>
            Zdobyłeś {score} z {length} punktów!
        </TotalScores>
    )
}

Scores.propTypes = {
    score: PropTypes.number,
    length: PropTypes.number,
};

export default Scores
