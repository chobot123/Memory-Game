import React from "react";
import Header from "./components/header/Header";
import Scoreboard from "./components/scoreboard/Scoreboard";
import Gameboard from "./components/gameboard/Gameboard";


function App() {

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
  return (
    <div className="App" style={appStyle}>
      <Header />
      <Scoreboard />
      <Gameboard />
    </div>
  );
}

export default App;
