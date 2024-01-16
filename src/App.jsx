/* eslint-disable no-unused-vars */
import { useState } from "react";
import Intro from "./components/Intro";
import characterData from "./components/Data";
import Card from "./components/Card";

import "./styles/App.css";

function App() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [gameMode, setGameMode] = useState("easy");
  const cardIdArray = getRandomCards();
  const displayCards = cardIdArray.map((cardId) => {
    const character = characterData.find(
      (character) => character.id === cardId
    );
    return (
      <Card
        src={character.src}
        name={character.name}
        key={character.id}
        id={character.id}
        onClick={() => handleCardClick(character.id)}
      />
    );
  });

  function getRandomCards() {
    const numOfCards = gameMode === "easy" ? 3 : gameMode === "medium" ? 5 : 10;
    const cardIdSet = new Set();

    while (cardIdSet.size < numOfCards) {
      const randomCardId = Math.floor(Math.random() * characterData.length);

      // Only add the card ID to the set if it's not already present
      if (
        !cardIdSet.has(randomCardId) &&
        !clickedCardIds.includes(randomCardId)
      ) {
        cardIdSet.add(randomCardId);
      }
    }

    return Array.from(cardIdSet);
  }
  function handleCardClick() {
    //card clicked id
    //push id to clickedCardIds state variable
    //reshuffle cards and redisplay
  }
  return (
    <>
      <Intro />
      <div className="card-collection-container">{displayCards}</div>
    </>
  );
}

export default App;
