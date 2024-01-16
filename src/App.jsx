/* eslint-disable no-unused-vars */
import { useState } from "react";
import Intro from "./components/Intro";
import characterData from "./components/Data";
import CardSet from "./components/CardSet";

import "./styles/App.css";

function App() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [gameMode, setGameMode] = useState("easy");
  const [playGame, setPlayGame] = useState(false);

  useState(() => {
    setClickedCardIds([]);
  }, [gameMode]);

  function handleCardClick(event) {
    const clickedID = event.target.id.replace(/\D/g, "");
    if (clickedCardIds.includes(clickedID)) {
      console.log("You lose");
    }
    setClickedCardIds((prevCards) => [...prevCards, clickedID]);
  }

  function handleSetPlayGame() {
    setPlayGame(true);
  }
  return (
    <>
      <Intro playGame={playGame} handleSetPlayGame={handleSetPlayGame} />
      {playGame && (
        <CardSet
          clickedCardIds={clickedCardIds}
          gameMode={gameMode}
          handleCardClick={handleCardClick}
          playGame={playGame}
        />
      )}
      <h1>{clickedCardIds}</h1>
    </>
  );
}

export default App;
