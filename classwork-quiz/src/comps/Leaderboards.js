import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Leaderboards = () => {

    const score = useSelector(state => state.scoreTable[state.scoreTable.length-1])

    console.log(score)

    const renderScore = () => {
        return !Object.keys(score).length ? <div> No scores </div> : <div> You got {score.score} out of {score.questions}.</div>
    }

    return (
        <div className="scoreContainer">
            <span className="scoreTitle">{renderScore()}</span>
            <Link className="navItem" to="/">Back to Quiz Selection</Link>
        </div>
    )
}

export default Leaderboards;