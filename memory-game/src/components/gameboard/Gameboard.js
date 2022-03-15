import React, {useEffect, useState} from "react";
import shuffleDeck from "../../game";
import pokeball from "/home/chobot/javascript/react/Memory-Game/memory-game/src/pokémon-poké-balls-artwork-pokeball-wallpaper.jpg"

const Gameboard = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {

        async function getCards(){
            const myCards = await shuffleDeck();
            setCards(myCards);
        }
        getCards();
    }, [])

    useEffect(() => {
        console.log(cards);
    }, [cards])

    const gridWrapperStyle = {
        alignSelf: 'center',
        display: 'flex',
        flex: '1',
    }
    const gridStyle = {
        display: 'grid',
        gridTemplateRows: 'repeat(2, minmax(0,1fr))',
        gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
        gap: '2em',
        padding: '4em',
    }

    const imgStyle = {
        height: '75%',
        width: '75%',
        objectFit: 'cover',
    }

    const cardStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `url(${pokeball})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '0.5em solid black',
        borderRadius: '50%',
        width: '14em',
        height: '14em',
    }

    
    return (
        <div className="gameboard-wrapper" style={gridWrapperStyle}>
            <div className="grid" style={gridStyle}>
                {cards.map((card)=>{
                    return (
                        <div className="pokemon" key={card.id} style={cardStyle}>
                            <div id={card.name}>
                                <img src={card.img} style={imgStyle} alt={card.name}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gameboard;