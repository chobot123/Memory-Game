import React from "react"
import '/home/chobot/javascript/react/Memory-Game/memory-game/src/styles/fonts.css'

const Header = () => {

    const headerStyle = {
        margin: '0',
        textAlign: 'center',
        color: '#ffcb05',
        padding: '0.67em',
        fontFamily: `'Pokemon Solid', sans-serif`,
        fontSize: '4em',
        WebkitTextStroke: '5px #2a75bb',
    }
    return (
        <div className="header-container">
            <h1 style={headerStyle}>Poké Road</h1>
        </div>
    )
}

export default Header