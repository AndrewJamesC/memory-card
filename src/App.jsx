/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import CardCollection from "./components/CardCollection";
import Lost from "./components/Lost";
import Win from "./components/Win";
import characterData from "./components/Data";

import "./styles/App.css";

function App() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [gameMode, setGameMode] = useState("easy");
  const [playGame, setPlayGame] = useState(false);
  const [result, setResult] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem("highScore")) || 0
  );

  useEffect(() => {
    if (currentScore > highScore) {
      const highScoreStr = JSON.stringify(currentScore);
      localStorage.setItem("highScore", highScoreStr);
      setHighScore(JSON.parse(localStorage.getItem("highScore")));
    }
  }, [currentScore]);

  function handleCardClick(event) {
    const clickedID = Number(event.target.id.replace(/\D/g, ""));
    if (clickedCardIds.includes(clickedID)) {
      setResult("lost");
      setPlayGame(false);
      console.log("You lose");
      return;
    }

    setClickedCardIds((prevCards) => [...prevCards, clickedID]);
    setCurrentScore((prevScore) => prevScore + 1);
  }

  function handleSetPlayGame() {
    setPlayGame(true);
  }

  function handlePlayAgain() {
    setPlayGame(false);
    setResult("");
    setCurrentScore(0);
    setClickedCardIds([]);
  }
  return (
    <>
      {playGame && (
        <div className="scores-container">
          <div>Score: {currentScore}</div>
          <div>High Score: {highScore}</div>
        </div>
      )}
      {result === "" && (
        <Intro playGame={playGame} handleSetPlayGame={handleSetPlayGame} />
      )}
      {playGame && (
        <CardCollection
          clickedCardIds={clickedCardIds}
          gameMode={gameMode}
          handleCardClick={handleCardClick}
          playGame={playGame}
          setResult={setResult}
          setPlayGame={setPlayGame}
        />
      )}

      {result === "lost" && <Lost handlePlayAgain={handlePlayAgain} />}
      {result === "win" && <Win handlePlayAgain={handlePlayAgain} />}
    </>
  );
}

export default App;
