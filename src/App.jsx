/* eslint-disable no-unused-vars */
import { useState } from "react";
import Intro from "./components/Intro";
import CardCollection from "./components/CardCollection";

import "./styles/App.css";

function App() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [gameMode, setGameMode] = useState("easy");
  const [playGame, setPlayGame] = useState(false);
  const [result, setResult] = useState("");

  function handleCardClick(event) {
    const clickedID = Number(event.target.id.replace(/\D/g, ""));
    if (clickedCardIds.includes(clickedID)) {
      setResult("lost");
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
        <CardCollection
          clickedCardIds={clickedCardIds}
          gameMode={gameMode}
          handleCardClick={handleCardClick}
          playGame={playGame}
        />
      )}
      <h1>{clickedCardIds.toString()}</h1>
    </>
  );
}

export default App;
