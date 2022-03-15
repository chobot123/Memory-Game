import React, {useState} from "react"

const Scoreboard = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const scoreBoardStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightblue',
        alignSelf: 'center',
        padding: '0.5em'
    }

    return (
        <div className="scoreboard" style={scoreBoardStyle}>
            <div id="current-score">Current Score: {score}</div>
            <div id="best-score">Best Score: {bestScore}</div>
        </div>
    )
}

export default Scoreboard;