/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import sound from "../assets/intro-song.mp3";
import { useState } from "react";

export default function Intro({ playGame, handleSetPlayGame }) {
  const [audioPlayed, setAudioPlayed] = useState(false);

  if (playGame && !audioPlayed) {
    new Audio(sound).play();
    setAudioPlayed(true);
  }

  return (
    <section>
      <img
        className={`logo ${!playGame ? "" : "small"}`}
        src="src/assets/img/The-Simpsons-yellow-logo.svg"
        alt="The Simpsons text logo"
      />
      {!playGame && (
        <div className="instructions-container">
          <p className="instructions">
            Don&apos;t click the same character more than once!
          </p>
          <button
            className="play-button"
            onClick={() => {
              handleSetPlayGame();
            }}
          >
            Click to Start
          </button>
        </div>
      )}
    </section>
  );
}
