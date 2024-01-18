/* eslint-disable react/prop-types */
import woohoo from "../assets/homer-woohoo.mp3";

export default function Win({ handlePlayAgain }) {
  new Audio(woohoo).play();
  return (
    <div className="win-screen">
      <p className="you-win">Woo Hoo!</p>
      <img
        className="win-img"
        src="src/assets/img/homer-win.jpg"
        alt="Homer wins"
      />
      <button className="win-btn" onClick={() => handlePlayAgain()}>
        Play Again
      </button>
    </div>
  );
}
