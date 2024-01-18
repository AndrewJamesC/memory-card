/* eslint-disable react/prop-types */
import woohoo from "../assets/homer-woohoo.mp3";
import winHomer from "../assets/img/homer-win.jpg";

export default function Win({ handlePlayAgain }) {
  new Audio(woohoo).play();
  return (
    <div className="win-screen">
      <p className="you-win">Woo Hoo!</p>
      <img className="win-img" src={winHomer} alt="Homer wins" />
      <button className="win-btn" onClick={() => handlePlayAgain()}>
        Play Again
      </button>
    </div>
  );
}
