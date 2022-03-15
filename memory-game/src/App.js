import React from "react";
import Header from "./components/header/Header";
import Scoreboard from "./components/scoreboard/Scoreboard";

function App() {

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
  }
  return (
    <div className="App" style={appStyle}>
      <Header />
      <Scoreboard />
    </div>
  );
}

export default App;
