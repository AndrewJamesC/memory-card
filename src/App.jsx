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
    const clickedCard = event.target.id;
    setClickedCardIds((prevCards) => [...prevCards, clickedCard]);
  }
  return (
    <>
      <Intro playGame={playGame} setPlayGame={setPlayGame} />
      {playGame && (
        <CardSet
          clickedCardIds={clickedCardIds}
          gameMode={gameMode}
          handleCardClick={handleCardClick}
          playGame={playGame}
        />
      )}
    </>
  );
}

export default App;
