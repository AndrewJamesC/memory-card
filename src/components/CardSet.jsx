/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import characterData from "./Data";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function CardSet({
  gameMode,
  clickedCardIds,
  handleCardClick,
  playGame,
}) {
  //   useEffect(() => {
  //     getRandomCards();
  //   }, [gameMode]);

  //   useEffect(() => {
  //     getRandomCards();
  //   }, [clickedCardIds]);

  const [currentCardSet, setCurrentCardSet] = useState([]);
  useEffect(() => {
    getRandomCards(clickedCardIds);
  }, [clickedCardIds]);

  function getRandomCards(clickedCardIds) {
    const numOfCards = gameMode === "easy" ? 3 : gameMode === "medium" ? 5 : 10;
    let cardIdArr = [];

    if (clickedCardIds.length < characterData.length) {
      const uniqueCardId = getUniqueRandomCardId();
      cardIdArr.push(uniqueCardId);

      while (cardIdArr.length < numOfCards) {
        const randomCardId = Math.floor(Math.random() * characterData.length);

        if (!cardIdArr.includes(randomCardId)) {
          cardIdArr.push(randomCardId);
        }
      }
      setCurrentCardSet(cardIdArr);
      return cardIdArr;
    }

    console.log("You win" + clickedCardIds);
    return undefined;

    function getUniqueRandomCardId() {
      let uniqueCardFound = false;

      while (!uniqueCardFound) {
        const randomCardId = Math.floor(Math.random() * characterData.length);

        if (!clickedCardIds.includes(randomCardId)) {
          uniqueCardFound = true;
          return randomCardId;
        }
      }
    }
  }

  const displayCards = (currentCardSet) => {
    return currentCardSet.map((cardId) => {
      const character = characterData.find(
        (character) => character.id === cardId
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
  };

  return (
    <div>
      <div className="card-set-container">{displayCards(currentCardSet)}</div>
    </div>
  );
}
