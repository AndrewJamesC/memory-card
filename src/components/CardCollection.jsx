/* eslint-disable react/prop-types */
import characterData from "./Data";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function CardCollection({
  clickedCardIds,
  handleCardClick,
  setResult,
  setPlayGame,
}) {
  const [currentCards, setCurrentCards] = useState([]);
  const [renderedCards, setRenderedCards] = useState([]);

  useEffect(() => {
    setCurrentCards(getRandomCardIds(clickedCardIds));

    function getRandomCardIds(clickedCardIds) {
      if (clickedCardIds.length === characterData.length) {
        console.log("You win cardCollection");
        setResult("win");
        setPlayGame(false);
        return [];
      }
      let cardNotClicked = false;
      const tempCardIdArr = [];

      while (!cardNotClicked) {
        const unClickedCardId = Math.floor(
          Math.random() * characterData.length
        );
        if (!clickedCardIds.includes(unClickedCardId)) {
          cardNotClicked = true;
          tempCardIdArr.push(unClickedCardId);
        }
      }

      while (tempCardIdArr.length < 3) {
        const randomCardId = Math.floor(Math.random() * characterData.length);
        if (!tempCardIdArr.includes(randomCardId)) {
          tempCardIdArr.push(randomCardId);
        }
      }

      return tempCardIdArr.sort(() => Math.random() - 0.5);
    }
  }, [clickedCardIds]);

  useEffect(() => {
    if (currentCards.length > 0) {
      setRenderedCards(displayCards(currentCards));
    }

    function displayCards() {
      return currentCards.map((id) => {
        const character = characterData.find(
          (character) => character.id === id
        );
        return (
          <Card
            src={character.src}
            name={character.name}
            key={character.id}
            id={character.id}
            handleCardClick={handleCardClick}
          />
        );
      });
    }
  }, [currentCards]);

  return (
    <>
      <div className="card-set-container">
        {renderedCards ? renderedCards : null}
      </div>
    </>
  );
}
