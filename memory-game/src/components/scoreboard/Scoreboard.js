import React, {useEffect, useState} from "react"
import pokedexImg from "/home/chobot/javascript/react/Memory-Game/memory-game/src/pokedex.jpg"
import '/home/chobot/javascript/react/Memory-Game/memory-game/src/styles/fonts.css'

const Scoreboard = (props) => {

    // ---------------------------- CSS ----------------------------//
    const scoreBoardStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${pokedexImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        flex: '0 0 30em',
        border: '0.1em transparent solid',
        borderRadius: '2em',
        margin: '1em 2em'
    }
    
    const scoreContainerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        right: "30%",
        top: "30%",
        fontFamily: `'Press Start 2P', cursive`,
        gap: '1em',
    }
    // ---------------------------- CSS _END_ ----------------------------//

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        setScore(props.memory.length);
        if(score > props.memory.length && bestScore < score){
            setBestScore(score);
        }
    }, [props.memory.length, score, bestScore, props.memory]);


    return (
        <div className="scoreboard" style={scoreBoardStyle}>
            <div className="score-container" style={scoreContainerStyle}>
                <div id="current-score">Current Score: {score}</div>
                <div id="best-score">Best Score: {bestScore}</div>
            </div>
        </div>
    )
}

export default Scoreboard;