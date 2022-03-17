import React, {useEffect, useState} from "react";
import Header from "./components/header/Header";
import Scoreboard from "./components/scoreboard/Scoreboard";
import Gameboard from "./components/gameboard/Gameboard";
import pokeRoad from '/home/chobot/javascript/react/Memory-Game/memory-game/src/pokeRoad.jpg'


function App() {

  // ---------------------------- CSS ----------------------------//
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(${pokeRoad})`,
    backgroundPosition: 'center',
    backgroundSize : 'cover',
  }

  const mainStyle = {
    display: 'flex',
    flex: '1',
  }
// ---------------------------- CSS _END_ ----------------------------//

  const [memory, setMemory] = useState([]);

  return (
    <div className="App" style={appStyle}>
      <Header />
      <div className="main" style={mainStyle}>
        <Scoreboard memory = {memory}
                    setMemory = {setMemory}
                    />
        <Gameboard memory = {memory}
                  setMemory = {setMemory}/>
      </div>
    </div>
  );
}

export default App;
