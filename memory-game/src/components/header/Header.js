import React from "react"

const Header = () => {

    const headerStyle = {
        margin: '0',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: '0.67em',
    }
    return (
        <div className="header-container">
            <h1 style={headerStyle}>Game Title</h1>
        </div>
    )
}

export default Header