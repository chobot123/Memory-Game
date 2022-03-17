import React, {useEffect, useState} from "react";
import shuffleDeck from "../../game";
import pokeball from "/home/chobot/javascript/react/Memory-Game/memory-game/src/pokémon-poké-balls-artwork-pokeball-wallpaper.jpg"
import './cards.css'

const Gameboard = (props) => {

// ---------------------------- CSS ----------------------------//
    const gridWrapperStyle = {
        alignSelf: 'center',
        display: 'flex',
        flex: '2',
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
        pointerEvents: 'none',
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

// ---------------------------- CSS _END_ ----------------------------//

    const [cards, setCards] = useState([]);

    useEffect(() => {
        document.querySelector('#root').classList.add("unselectable");
        async function getCards(){
            const myCards = await shuffleDeck();
            setCards(myCards);
        }
        getCards();
        return document.querySelector("#root").classList.remove("unselectable");
    }, [props.memory])

    const handleClick = (e) => {

        let name;
        if(e.target.className === 'pokemon'){
            e.target.classList.add('unselectable');
            name = e.target.firstChild.id;
        }
        else {
            e.target.parentElement.classList.add("unselectable");
            name = e.target.id;
        }
        if(props.memory.filter((pokemon)=> pokemon !== name).length
            === props.memory.length){
                props.setMemory(prevState => [...prevState, name]);
        }
        else{ //LOSE
            props.setMemory([]);
        }
    }

    const onLoad = (e) => {
        e.target.classList.remove("hideCard");
    }

    return (
        <div className="gameboard-wrapper" style={gridWrapperStyle}>
            <div className="grid" style={gridStyle}>
                {cards.map((card)=>{
                    return (
                        <button className="pokemon" key={card.id} style={cardStyle}
                            onClick={(e) => handleClick(e, card.name)}>
                            <div id={card.name}>
                                <img className="hideCard" src={card.img} style={imgStyle} alt={card.name} onLoad={(e)=> onLoad(e)}></img>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Gameboard;