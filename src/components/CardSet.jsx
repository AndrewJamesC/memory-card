/* eslint-disable react/prop-types */
import characterData from "./Data";
import Card from "./Card";
import { useEffect } from "react";

export default function CardSet({
  gameMode,
  clickedCardIds,
  handleCardClick,
  playGame,
}) {
  useEffect(() => {
    getRandomCards();
  }, [gameMode]);

  useEffect(() => {
    getRandomCards();
  }, [clickedCardIds]);

  function getRandomCards() {
    const numOfCards = gameMode === "easy" ? 3 : gameMode === "medium" ? 5 : 10;
    let cardIdArr = [];
    let uniqueCardFound = false;
    if (clickedCardIds.length < characterData.length) {
      while (!uniqueCardFound) {
        const randomCardId = Math.floor(Math.random() * characterData.length);
        if (!clickedCardIds.includes(randomCardId)) {
          cardIdArr.push(randomCardId);
          uniqueCardFound = true;
        }
      }
      while (cardIdArr.length < numOfCards) {
        const randomCardId = Math.floor(Math.random() * characterData.length);
        if (!cardIdArr.includes(randomCardId)) {
          cardIdArr.push(randomCardId);
        }
      }

      return cardIdArr;
    }
    console.log("You win");
    return;
  }

  function displayCards(cardIdArr) {
    return cardIdArr.map((cardId) => {
      const character = characterData.find(
        (character) => character.id === cardId
      );
      return (
        <Card
          src={character.src}
          name={character.name}
          key={character.id}
          id={character.id}
          onClick={(event) => handleCardClick(event)}
        />
      );
    });
  }
  let render;
  if (playGame) {
    render = displayCards(getRandomCards());
  }

  return (
    <div>
      <div className="card-set-container">{render}</div>
    </div>
  );
}
